import links from "@/data/links.json"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Quick Links | Lotus Kidney & Andrology Center",
}

export default function LinksPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-12 md:py-16">
      <div className="mb-6 flex flex-col items-center gap-3">
        <div className="h-16 w-16 rounded-full bg-primary" aria-hidden />
        <h1 className="text-center text-2xl font-bold">Lotus Kidney & Andrology Links</h1>
      </div>
      <div className="grid gap-3">
        {links.map((l) => (
          <Button asChild key={l.id} variant={l.variant === "primary" ? "default" : "outline"} className="w-full">
            <a
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
            >
              {l.label}
            </a>
          </Button>
        ))}
      </div>
    </div>
  )
}
