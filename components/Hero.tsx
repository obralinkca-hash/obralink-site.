import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero/hero.jpg"
          alt="Suministro de materiales y soluciones para la construcción"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>
      <div className="container min-h-[70svh] flex flex-col justify-center py-24">
        <h1 className="text-white text-4xl sm:text-6xl font-extrabold max-w-3xl">
          Materiales y soluciones integrales para tu proyecto
        </h1>
        <p className="text-white/90 mt-4 text-lg max-w-2xl">
          Trabajamos con expertos, marcas y fabricantes líderes para asegurar calidad, precio y eficiencia.
        </p>
        <div className="mt-8 flex gap-4">
          <Link href="/contacto" className="btn">Contáctanos</Link>
          <Link href="/productos" className="btn-outline">Ver productos</Link>
        </div>
      </div>
    </section>
  );
}