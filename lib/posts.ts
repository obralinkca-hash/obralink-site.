import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  cover?: string;
  content: string;
};

const postsDir = path.join(process.cwd(), "content", "blog");

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDir)) return [];
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith(".md"));
  return files.map(file => {
    const slug = file.replace(/\.md$/, "");
    const full = path.join(postsDir, file);
    const raw = fs.readFileSync(full, "utf-8");
    const { data, content } = matter(raw);
    return {
      slug,
      title: data.title || slug,
      date: data.date ? String(data.date) : "",
      excerpt: data.excerpt || "",
      cover: data.cover || "",
      content
    };
  }).sort((a,b) => (a.date > b.date ? -1 : 1));
}

export function getPostBySlug(slug: string): Post | null {
  const full = path.join(postsDir, slug + ".md");
  if (!fs.existsSync(full)) return null;
  const raw = fs.readFileSync(full, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title || slug,
    date: data.date ? String(data.date) : "",
    excerpt: data.excerpt || "",
    cover: data.cover || "",
    content
  };
}