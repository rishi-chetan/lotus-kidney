import posts from "@/data/blog.json"
import { BlogCard } from "@/components/blog/blog-card"

export const metadata = {
  title: "Blog | Lotus Kidney & Andrology Center",
}

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h1 className="mb-6 text-3xl font-bold">Articles & Education</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <BlogCard key={p.id} post={p} />
        ))}
      </div>
    </div>
  )
}
