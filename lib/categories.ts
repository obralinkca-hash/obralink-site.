export type Category = {
  title: string;
  image: string;
  alt: string;
  slug: string;
};

export const categories: Category[] = [
  { title: "Revestimientos", image: "/images/categorias/revestimientos.svg", alt: "Revestimientos de alta calidad", slug: "revestimientos" },
  { title: "Madera", image: "/images/categorias/madera.svg", alt: "Soluciones en madera para construcción", slug: "madera" },
  { title: "Eléctrico", image: "/images/categorias/electrico.svg", alt: "Materiales eléctricos confiables", slug: "electrico" },
  { title: "Iluminación", image: "/images/categorias/iluminacion.svg", alt: "Iluminación moderna y eficiente", slug: "iluminacion" },
  { title: "Baños", image: "/images/categorias/banos.svg", alt: "Equipamiento y acabados para baños", slug: "banos" },
  { title: "Sistema de Enfriamiento", image: "/images/categorias/sistema-de-enfriamiento.svg", alt: "Sistemas de enfriamiento y aire acondicionado", slug: "sistema-de-enfriamiento" },
  { title: "Vidrios", image: "/images/categorias/vidrios.svg", alt: "Vidrios arquitectónicos", slug: "vidrios" },
  { title: "Aluminio", image: "/images/categorias/aluminio.svg", alt: "Perfiles y soluciones en aluminio", slug: "aluminio" },
  { title: "Automatizaciones", image: "/images/categorias/automatizaciones.svg", alt: "Domótica y automatización", slug: "automatizaciones" },
  { title: "Sistema de Seguridad", image: "/images/categorias/sistema-de-seguridad.svg", alt: "Sistemas de seguridad y vigilancia", slug: "sistema-de-seguridad" },
  { title: "Piedras", image: "/images/categorias/piedras.svg", alt: "Piedras naturales y decorativas", slug: "piedras" },
];