import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Blog = {
  id: string
  slug: string
  title: string
  excerpt: string
  date: string
  tags?: string[]
  cover?: string
}

export function BlogCard({ post }: { post: Blog }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg">
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </CardTitle>
        <p className="text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString()}</p>
      </CardHeader>
      <CardContent className="space-y-3">
        {post.cover && (
          <img src={post.cover || "/placeholder.svg"} alt="" className="w-full rounded-md border object-cover" />
        )}
        <p className="text-sm">{post.excerpt}</p>
        <div className="flex flex-wrap gap-2">
          {post.tags?.map((t) => (
            <span key={t} className="rounded-full bg-secondary px-2 py-1 text-xs">
              {t}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
