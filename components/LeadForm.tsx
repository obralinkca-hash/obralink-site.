"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(5),
  serviceType: z.string(),
  extras: z.record(z.string()).optional(),
});
type FormData = z.infer<typeof schema>;

export default function LeadForm({ serviceType, fields = [] as {name:string; label:string; type?:string; required?:boolean}[] }) {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, serviceType }),
      });
      if (!res.ok) throw new Error("Error");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card p-6 space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Nombre</label>
          <input className="mt-1 w-full rounded-xl border border-slate-300 p-2" {...register("name", { required: true })} />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" className="mt-1 w-full rounded-xl border border-slate-300 p-2" {...register("email", { required: true })} />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium">Teléfono</label>
          <input className="mt-1 w-full rounded-xl border border-slate-300 p-2" {...register("phone")} />
        </div>
        {fields.map(f => (
          <div key={f.name} className="sm:col-span-2">
            <label className="block text-sm font-medium">{f.label}</label>
            <input
              className="mt-1 w-full rounded-xl border border-slate-300 p-2"
              type={f.type || "text"} {...register(`extras.${f.name}`)} required={f.required} />
          </div>
        ))}
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium">Mensaje</label>
          <textarea className="mt-1 w-full rounded-xl border border-slate-300 p-2" rows={4} {...register("message", { required: true })} />
        </div>
      </div>
      <button className="btn" disabled={status==="loading"}>
        {status==="loading" ? "Enviando..." : "Enviar solicitud"}
      </button>
      {status==="success" && <p className="text-green-700">¡Gracias! Te contactaremos pronto.</p>}
      {status==="error" && <p className="text-red-700">Hubo un problema. Inténtalo de nuevo.</p>}
    </form>
  );
}