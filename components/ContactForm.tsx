"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm();
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");

  const onSubmit = async (data: any) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
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
          <label className="block text-sm font-medium">Asunto</label>
          <input className="mt-1 w-full rounded-xl border border-slate-300 p-2" {...register("subject", { required: true })} />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium">Mensaje</label>
          <textarea rows={5} className="mt-1 w-full rounded-xl border border-slate-300 p-2" {...register("message", { required: true })} />
        </div>
      </div>
      <button className="btn" disabled={status==="loading"}>
        {status==="loading" ? "Enviando..." : "Enviar mensaje"}
      </button>
      {status==="success" && <p className="text-green-700">¡Mensaje enviado! Te responderemos pronto.</p>}
      {status==="error" && <p className="text-red-700">No se pudo enviar. Intenta nuevamente.</p>}
    </form>
  );
}