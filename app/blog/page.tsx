import posts from "@/data/blog.json"
import { BlogCard } from "@/components/blog/blog-card"
import { Metadata } from "next"
import { siteConfig } from "@/lib/seo-config"
import { BreadcrumbSchema } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Urology Blog | Kidney Health Articles | Expert Advice from Dr. Nitesh Battala",
  description: "Read expert articles on kidney health, urology, andrology, prostate care, male infertility, and more. Educational content by Dr. Nitesh Battala, best urologist in Hyderabad.",
  keywords: [
    "urology blog",
    "kidney health articles",
    "prostate health tips",
    "male fertility information",
    "urologist advice",
  ],
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
}

export default function BlogPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Blog", url: `${siteConfig.url}/blog` },
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h1 className="mb-6 text-3xl font-bold">Articles & Education</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <BlogCard key={p.id} post={p} />
          ))}
        </div>
      </div>
    </>
  )
}
