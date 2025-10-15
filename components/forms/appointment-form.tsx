"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import schedule from "@/data/schedule.json"
import doctors from "@/data/doctors.json"

export function AppointmentForm() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [type, setType] = useState<"clinic" | "teleconsult" | "">("")

  const docOptions = doctors.map((d) => ({ id: d.id, name: d.name }))
  const slots = schedule.flatMap((s) => s.slots)

  async function onSubmit(formData: FormData) {
    setLoading(true)
    try {
      // Here you could POST to an API route. For demo, we just toast.
      const name = formData.get("name")
      const doctor = formData.get("doctor")
      toast({
        title: "Appointment requested",
        description: `Thank you ${name}. Doctor: ${doctor}. We will contact you shortly.`,
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form action={onSubmit} className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Full name</Label>
        <Input id="name" name="name" required placeholder="John Doe" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required placeholder="you@example.com" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" name="phone" type="tel" required placeholder="+1 234 567 8900" />
      </div>
      <div className="grid gap-2">
        <Label>Appointment type</Label>
        <Select onValueChange={(v) => setType(v as any)} required>
          <SelectTrigger>
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="clinic">In-Clinic</SelectItem>
            <SelectItem value="teleconsult">Teleconsultation</SelectItem>
          </SelectContent>
        </Select>
        <input type="hidden" name="type" value={type} />
      </div>
      <div className="grid gap-2">
        <Label>Doctor</Label>
        <Select name="doctor" required>
          <SelectTrigger>
            <SelectValue placeholder="Select doctor" />
          </SelectTrigger>
          <SelectContent>
            {docOptions.map((d) => (
              <SelectItem key={d.id} value={d.name}>
                {d.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label>Preferred slot</Label>
        <Select name="slot" required>
          <SelectTrigger>
            <SelectValue placeholder="Select date & time" />
          </SelectTrigger>
          <SelectContent>
            {slots.slice(0, 20).map((s, i) => (
              <SelectItem key={i} value={s}>
                {s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="notes">Notes</Label>
        <Textarea id="notes" name="notes" placeholder="Tell us briefly about your concern" />
      </div>
      <div className="flex items-center gap-3">
        <Button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Request"}
        </Button>
        <Button asChild variant="outline">
          <a
            href="https://wa.me/1234567890?text=Hello%2C%20I%27d%20like%20to%20book%20an%20appointment"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </Button>
      </div>
    </form>
  )
}
