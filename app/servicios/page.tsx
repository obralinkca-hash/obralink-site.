import LeadForm from "@/components/LeadForm";

export const metadata = { title: "Servicios" };

export default function Servicios() {
  return (
    <section className="section container">
      <h1 className="section-title">Servicios</h1>
      <p className="mt-2 text-slate-600">
        Trabajamos con los mejores profesionales del sector. Gracias a la creación de licitaciones, te ayudamos a ahorrar tiempo, dinero y dolores de cabeza.
      </p>

      <h2 className="text-2xl font-semibold mt-10">¿Qué necesitas para realizar tu proyecto?</h2>

      <div className="grid lg:grid-cols-2 gap-8 mt-6">
        <div>
          <h3 className="font-semibold text-lg mb-2">Diseño del proyecto</h3>
          <p className="text-slate-600 mb-4">
            Pide una propuesta con varios estudios de arquitectura. Recibirás presupuestos y portafolios para evaluar la calidad.
          </p>
          <LeadForm
            serviceType="Diseño del proyecto"
            fields={[
              { name: "tipoProyecto", label: "Tipo de proyecto (vivienda, local, etc.)", required: true },
              { name: "metrosCuadrados", label: "Metros cuadrados aproximados", type: "number" },
              { name: "ciudad", label: "Ciudad" },
              { name: "presupuesto", label: "Presupuesto estimado" },
            ]}
          />
          <div className="mt-6 card p-4">
            <p className="text-sm text-slate-600 mb-3">Estudios de arquitectura aliados</p>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 opacity-80">
              {Array.from({ length: 6 }).map((_, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={i} src={`/images/aliados/logo-${i+1}.svg`} alt="Logo de estudio aliado" className="h-10 w-auto object-contain" />
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Lleva tu proyecto a BIM</h3>
          <p className="text-slate-600 mb-4">
            Beneficios: reducción de errores, ahorro de tiempo y dinero, mejor coordinación y mayor eficiencia en todo el proceso constructivo.
          </p>
          <LeadForm
            serviceType="BIM"
            fields={[
              { name: "disciplina", label: "Disciplina (arquitectura, MEP, estructura...)" },
              { name: "etapa", label: "Etapa (anteproyecto, ejecutivo...)" },
            ]}
          />
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Alquiler de maquinaria pesada</h3>
          <p className="text-slate-600 mb-4">
            Si inicias en construcción o no deseas invertir en maquinaria, cotizamos las mejores máquinas listas para trabajar.
          </p>
          <LeadForm
            serviceType="Alquiler de maquinaria"
            fields={[
              { name: "tipoMaquinaria", label: "Tipo de maquinaria" },
              { name: "duracion", label: "Duración estimada (días)" },
            ]}
          />
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Crea licitaciones</h3>
          <p className="text-slate-600 mb-4">
            Organiza licitaciones parciales o totales para obtener mejores precios y condiciones que asumiendo costos directos.
          </p>
          <LeadForm
            serviceType="Licitaciones"
            fields={[
              { name: "alcance", label: "Alcance (parcial/total)" },
              { name: "fechaObjetivo", label: "Fecha objetivo", type: "date" },
            ]}
          />
        </div>

        <div className="lg:col-span-2">
          <h3 className="font-semibold text-lg mb-2">Consigue terrenos y vende tus proyectos</h3>
          <p className="text-slate-600 mb-4">
            Trabajamos con agencias inmobiliarias para encontrarte el terreno ideal o vender tu proyecto en curso de forma profesional.
          </p>
          <LeadForm
            serviceType="Inmobiliaria"
            fields={[
              { name: "necesidad", label: "Necesidad (comprar terreno / vender proyecto)", required: true },
              { name: "ubicacion", label: "Ubicación" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}