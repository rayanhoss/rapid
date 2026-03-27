import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/blog-data";
import { BlogPostPage } from "@/components/blog/BlogPostPage";

export async function generateMetadata(): Promise<Metadata> {
  const post = getPostBySlug("bathroom-waterproofing-mistakes");
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://www.rapidrenovationdemolition.com/blog/bathroom-waterproofing-mistakes` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.imageAlt }],
      url: `https://www.rapidrenovationdemolition.com/blog/bathroom-waterproofing-mistakes`,
      type: "article",
    },
  };
}

export default function Page() {
  const post = getPostBySlug("bathroom-waterproofing-mistakes");
  if (!post) notFound();
  return <BlogPostPage post={post} />;
}
