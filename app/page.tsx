import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/lib/categories";
import LogoMarquee from "@/components/LogoMarquee";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="section container">
        <h2 className="section-title">Categorías principales</h2>
        <p className="mt-2 text-slate-600 max-w-3xl">
          Trabajamos con los mejores expertos, marcas y fabricantes, asegurando siempre la mejor calidad y precios competitivos.
        </p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((c) => (<CategoryCard key={c.slug} title={c.title} image={c.image} alt={c.alt} />))}
        </div>
        <div className="mt-8">
          <Link href="/productos" className="btn-outline">Ver todos los productos</Link>
        </div>
      </section>
      <section className="section bg-slate-50">
        <div className="container">
          <h2 className="section-title">Aliados</h2>
          <p className="mt-2 text-slate-600">Estudios de arquitectura y fabricantes con los que trabajamos.</p>
          <div className="mt-6">
            <LogoMarquee />
          </div>
        </div>
      </section>
    </>
  );
}