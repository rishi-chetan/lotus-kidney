"use client"

import services from "@/data/services.json"
import { ServiceCard } from "@/components/cards/service-card"
import { useMemo, useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function ServicesPageClient() {
  const [query, setQuery] = useState("")
  const categories = Array.from(new Set(services.map((s) => s.category)))
  const [category, setCategory] = useState<string>("All")

  const filtered = useMemo(() => {
    return services.filter((s) => {
      const q = query.toLowerCase()
      const matchesQuery =
        s.title.toLowerCase().includes(q) ||
        s.shortDescription.toLowerCase().includes(q) ||
        s.tags?.some((t) => t.toLowerCase().includes(q))
      const matchesCategory = category === "All" || s.category === category
      return matchesQuery && matchesCategory
    })
  }, [query, category])

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h1 className="mb-6 text-3xl font-bold">Services</h1>
      <div className="mb-6 grid gap-4 md:grid-cols-3">
        <div className="grid gap-2 md:col-span-2">
          <Label htmlFor="search">Search</Label>
          <Input
            id="search"
            placeholder="e.g. kidney stones"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="category">Category</Label>
          <select
            id="category"
            className="rounded-md border bg-background px-3 py-2 text-sm"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            aria-label="Filter services by category"
          >
            <option>All</option>
            {categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((s) => (
          <ServiceCard key={s.id} service={s} />
        ))}
      </div>
    </div>
  )
}

export default ServicesPageClient
export { ServicesPageClient }
