import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contacto" };

export default function Contacto() {
  return (
    <section className="section container">
      <h1 className="section-title">Contacto</h1>
      <p className="mt-2 text-slate-600">Cuéntanos sobre tu proyecto y cómo podemos ayudarte.</p>
      <div className="mt-6">
        <ContactForm />
      </div>
    </section>
  );
}