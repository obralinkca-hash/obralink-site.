import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/lib/categories";

export const metadata = { title: "Productos" };

export default function Productos() {
  return (
    <section className="section container">
      <h1 className="section-title">Productos</h1>
      <p className="mt-2 text-slate-600">Calidad y precios competitivos en todas nuestras líneas.</p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((c) => (<CategoryCard key={c.slug} title={c.title} image={c.image} alt={c.alt} />))}
      </div>
    </section>
  );
}