"use client"

import posts from "@/data/blog.json"
import { BlogCard } from "@/components/blog/blog-card"
import { siteConfig } from "@/lib/seo-config"
import { BreadcrumbSchema } from "@/components/structured-data"
import { useI18n } from "@/components/providers/i18n-provider"

export default function BlogPage() {
  const { t } = useI18n()
  
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Blog", url: `${siteConfig.url}/blog` },
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h1 className="mb-6 text-3xl font-bold">{t('Blog.heading')}</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <BlogCard key={p.id} post={p} />
          ))}
        </div>
      </div>
    </>
  )
}
