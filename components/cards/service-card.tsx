"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export type Service = {
  id: string
  title: string
  category: string
  shortDescription: string
  fullDescription: string
  tags?: string[]
}

export function ServiceCard({ service }: { service: Service }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg">{service.title}</CardTitle>
        <p className="text-xs text-muted-foreground">{service.category}</p>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm">{expanded ? service.fullDescription : service.shortDescription}</p>
        <div className="flex flex-wrap gap-2">
          {service.tags?.map((t) => (
            <span key={t} className="rounded-full bg-secondary px-2 py-1 text-xs text-secondary-foreground">
              {t}
            </span>
          ))}
        </div>
        <Button variant="outline" size="sm" onClick={() => setExpanded((v) => !v)} aria-expanded={expanded}>
          {expanded ? "Show less" : "Read more"}
        </Button>
      </CardContent>
    </Card>
  )
}
