import { Card, CardContent, CardHeader } from "@/components/ui/card"

export type Testimonial = {
  id: string
  name: string
  content: string
  image?: string
}

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <Card className="h-full">
      <CardHeader className="flex items-center gap-3">
        <img
          src={t.image || "/placeholder.svg?height=48&width=48&query=patient%20avatar"}
          alt={t.image ? `Photo of ${t.name}` : ""}
          className="h-10 w-10 rounded-full border object-cover"
        />
        <div className="font-medium">{t.name}</div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-pretty">{t.content}</p>
      </CardContent>
    </Card>
  )
}
