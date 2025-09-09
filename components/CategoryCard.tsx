import Image from "next/image";
type Props = {
  title: string;
  image: string;
  alt: string;
};
export default function CategoryCard({ title, image, alt }: Props) {
  return (
    <article className="card overflow-hidden">
      <div className="relative h-40">
        <Image src={image} alt={alt} fill className="object-cover" sizes="(min-width: 1024px) 25vw, 50vw" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold">{title}</h3>
      </div>
    </article>
  );
}