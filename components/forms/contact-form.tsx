"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { useI18n } from "@/components/providers/i18n-provider"
import { siteConfig } from "@/lib/seo-config"

export function ContactForm() {
  const { t } = useI18n()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  async function onSubmit(formData: FormData) {
    setLoading(true)
    try {
      // Validate form fields
      const name = formData.get("name") as string
      // const email = formData.get("email") as string
      const message = formData.get("message") as string

      // Validation
      if (!name || name.trim() === "") {
        toast({
          title: "Validation Error",
          description: "Please enter your name.",
          variant: "destructive",
        })
        return
      }

      if (!message || message.trim() === "") {
        toast({
          title: "Validation Error",
          description: "Please enter your message.",
          variant: "destructive",
        })
        return
      }

      // Create WhatsApp message
      const whatsappMessage = `Hello, I have a question.

*Name:* ${name}
*Message:* ${message}

Looking forward to your response.`

      // URL encode the message
      const encodedMessage = encodeURIComponent(whatsappMessage)
      const whatsappUrl = `${siteConfig.links.whatsapp}?text=${encodedMessage}`

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer')

      // Show success toast
      toast({ 
        title: t('Forms.messageSent'), 
        description: `${t('Forms.thanks')} ${name}. Redirecting you to WhatsApp to send your message.` 
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form action={onSubmit} className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="name">{t('Forms.name')}</Label>
        <Input id="name" name="name" required placeholder={t('Forms.namePlaceholder')} />
      </div>
      {/* <div className="grid gap-2">
        <Label htmlFor="email">{t('Forms.email')}</Label>
        <Input id="email" name="email" type="email" required placeholder={t('Forms.emailPlaceholder')} />
      </div> */}
      <div className="grid gap-2">
        <Label htmlFor="message">{t('Forms.message')}</Label>
        <Textarea id="message" name="message" required rows={5} placeholder={t('Forms.messagePlaceholder')} />
      </div>
      <Button type="submit" disabled={loading}>
        {loading ? t('Forms.sending') : t('Forms.send')}
      </Button>
    </form>
  )
}
