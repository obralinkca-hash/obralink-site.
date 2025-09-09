export const metadata = { title: "Portafolio" };

export default function Portafolio() {
  return (
    <section className="section container">
      <h1 className="section-title">Portafolio</h1>
      <p className="mt-2 text-slate-600 max-w-3xl">
        Casos de éxito y proyectos ejecutados con nuestros aliados.
      </p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <article key={i} className="card p-4 h-48 flex items-center justify-center text-slate-500">
            Proyecto #{i+1} (reemplaza con tu imagen y texto)
          </article>
        ))}
      </div>
    </section>
  );
}