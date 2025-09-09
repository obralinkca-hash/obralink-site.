import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = { title: "Blog" };

export default function Blog() {
  const posts = getAllPosts();
  return (
    <section className="section container">
      <h1 className="section-title">Blog</h1>
      <p className="mt-2 text-slate-600">Artículos, novedades y consejos para construir mejor.</p>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(p => (
          <article key={p.slug} className="card p-5 flex flex-col">
            <div className="text-xs text-slate-500">{new Date(p.date).toLocaleDateString("es")}</div>
            <h3 className="mt-1 font-semibold text-lg">{p.title}</h3>
            <p className="mt-2 text-slate-600 line-clamp-3">{p.excerpt}</p>
            <Link className="btn-outline mt-4" href={`/blog/${p.slug}`}>Leer más</Link>
          </article>
        ))}
      </div>
    </section>
  );
}