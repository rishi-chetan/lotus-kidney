"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { DateTimePicker } from "@/components/ui/date-time-picker"
import { useToast } from "@/hooks/use-toast"
import doctors from "@/data/doctors.json"
import { useI18n } from "@/components/providers/i18n-provider"
import { siteConfig } from "@/lib/seo-config"

export function AppointmentForm() {
  const { t } = useI18n()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()

  const doctor = doctors[0]

  // Helper function to format date
  const formatDateTime = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    }
    return date.toLocaleString('en-US', options)
  }

  // Helper function to format date for form submission
  const formatDateTimeForSubmit = (date: Date) => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    return `${year}-${month}-${day} ${hours}:${minutes}`
  }

  async function onSubmit(formData: FormData) {
    setLoading(true)
    try {
      // Validate form fields
      const name = formData.get("name") as string
      // const email = formData.get("email") as string
      // const phone = formData.get("phone") as string
      const notes = formData.get("notes") as string

      // Validation
      if (!name || name.trim() === "") {
        toast({
          title: "Validation Error",
          description: "Please enter your full name.",
          variant: "destructive",
        })
        return
      }

      if (!selectedDate) {
        toast({
          title: "Validation Error",
          description: "Please select a preferred date and time.",
          variant: "destructive",
        })
        return
      }

      // Create WhatsApp message
      const appointmentTime = formatDateTime(selectedDate)
      const message = `Hello, I would like to book an appointment.

*Name:* ${name}
*Preferred Date & Time:* ${appointmentTime}
${notes ? `*Additional Notes:* ${notes}` : ''}

Looking forward to your confirmation.`

      // URL encode the message
      const encodedMessage = encodeURIComponent(message)
      const whatsappUrl = `${siteConfig.links.whatsapp}?text=${encodedMessage}`

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer')

      // Show success toast
      toast({
        title: t('Forms.appointmentRequested'),
        description: `${t('Forms.thankYou')} ${name}. Redirecting you to WhatsApp to confirm your appointment.`,
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
      {/* <div className="grid gap-2">
        <Label htmlFor="email">{t('Forms.email')}</Label>
        <Input id="email" name="email" type="email" required placeholder={t('Forms.emailPlaceholder')} />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="phone">{t('Forms.phone')}</Label>
        <Input id="phone" name="phone" type="tel" required placeholder="+91 70930 70434" />
      </div> */}
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
          value={selectedDate ? formatDateTimeForSubmit(selectedDate) : ""}
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
        {/* <Button asChild variant="outline">
          <a
            href="https://wa.me/917093070434?text=Hello%2C%20I%27d%20like%20to%20book%20an%20appointment"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </Button> */}
      </div>
    </form>
  )
}
