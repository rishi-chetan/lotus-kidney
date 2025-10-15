import posts from "@/data/blog.json"

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug)
  return {
    title: `${post?.title || "Post"} | Lotus Kidney & Andrology Center`,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-2xl font-bold">Post not found</h1>
      </div>
    )
  }
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 md:py-16">
      <h1 className="mb-2 text-3xl font-bold">{post.title}</h1>
      <p className="mb-6 text-sm text-muted-foreground">
        {new Date(post.date).toLocaleDateString()} • {post.tags?.join(", ")}
      </p>
      {post.cover && (
        <img src={post.cover || "/placeholder.svg"} alt="" className="mb-6 w-full rounded-md border object-cover" />
      )}
      <div className="prose max-w-none dark:prose-invert">
        <p>{post.content}</p>
      </div>
    </article>
  )
}
