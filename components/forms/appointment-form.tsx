"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { DateTimePicker } from "@/components/ui/date-time-picker"
import { useToast } from "@/hooks/use-toast"
import { format } from "date-fns"
import doctors from "@/data/doctors.json"

export function AppointmentForm() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()

  const doctor = doctors[0]

  async function onSubmit(formData: FormData) {
    setLoading(true)
    try {
      // Here you could POST to an API route. For demo, we just toast.
      const name = formData.get("name")
      const appointmentTime = selectedDate ? format(selectedDate, "PPP 'at' p") : "Not selected"
      toast({
        title: "Appointment requested",
        description: `Thank you ${name}. Your in-clinic appointment on ${appointmentTime} with Dr. ${doctor.name} is pending confirmation.`,
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
      <input type="hidden" name="type" value="clinic" />
      <div className="grid gap-2">
        <Label>Preferred date & time</Label>
        <DateTimePicker
          date={selectedDate}
          setDate={setSelectedDate}
          placeholder="Select date and time"
        />
        <input
          type="hidden"
          name="slot"
          value={selectedDate ? format(selectedDate, "yyyy-MM-dd HH:mm") : ""}
          required
        />
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
