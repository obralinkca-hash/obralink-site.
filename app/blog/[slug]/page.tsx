import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/posts";
import { Metadata } from "next";

type Props = { params: { slug: string } };

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug);
  return {
    title: post?.title || "Artículo",
    description: post?.excerpt || ""
  };
}

export default function PostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();
  return (
    <article className="section container prose max-w-3xl">
      <h1 className="!mb-2">{post.title}</h1>
      <div className="text-sm text-slate-500">{new Date(post.date).toLocaleDateString("es")}</div>
      {post.cover && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={post.cover} alt={post.title} className="rounded-2xl my-6" />
      )}
      <div className="prose" dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br/>") }} />
    </article>
  );
}