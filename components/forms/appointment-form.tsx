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
import { useI18n } from "@/components/providers/i18n-provider"

export function AppointmentForm() {
  const { t } = useI18n()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()

  const doctor = doctors[0]

  async function onSubmit(formData: FormData) {
    setLoading(true)
    try {
      // Here you could POST to an API route. For demo, we just toast.
      const name = formData.get("name")
      const appointmentTime = selectedDate ? format(selectedDate, "PPP 'at' p") : t('Forms.notSelected')
      toast({
        title: t('Forms.appointmentRequested'),
        description: `${t('Forms.thankYou')} ${name}. ${t('Forms.appointmentConfirmation')} ${appointmentTime} ${t('Forms.withDoctor')} ${doctor.name} ${t('Forms.pendingConfirmation')}.`,
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form action={onSubmit} className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="name">{t('Forms.fullName')}</Label>
        <Input id="name" name="name" required placeholder={t('Forms.namePlaceholder')} />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">{t('Forms.email')}</Label>
        <Input id="email" name="email" type="email" required placeholder={t('Forms.emailPlaceholder')} />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="phone">{t('Forms.phone')}</Label>
        <Input id="phone" name="phone" type="tel" required placeholder="+91 70930 70434" />
      </div>
      <input type="hidden" name="type" value="clinic" />
      <div className="grid gap-2">
        <Label>{t('Forms.preferredDateTime')}</Label>
        <DateTimePicker
          date={selectedDate}
          setDate={setSelectedDate}
          placeholder={t('Forms.selectDateTime')}
        />
        <input
          type="hidden"
          name="slot"
          value={selectedDate ? format(selectedDate, "yyyy-MM-dd HH:mm") : ""}
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="notes">{t('Forms.notes')}</Label>
        <Textarea id="notes" name="notes" placeholder={t('Forms.notesPlaceholder')} />
      </div>
      <div className="flex items-center gap-3">
        <Button type="submit" disabled={loading}>
          {loading ? t('Forms.submitting') : t('Forms.submitRequest')}
        </Button>
        <Button asChild variant="outline">
          <a
            href="https://wa.me/917093070434?text=Hello%2C%20I%27d%20like%20to%20book%20an%20appointment"
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
