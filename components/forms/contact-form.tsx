"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { useI18n } from "@/components/providers/i18n-provider"

export function ContactForm() {
  const { t } = useI18n()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  async function onSubmit(formData: FormData) {
    setLoading(true)
    try {
      const name = formData.get("name")
      toast({ 
        title: t('Forms.messageSent'), 
        description: `${t('Forms.thanks')} ${name}, ${t('Forms.getBackSoon')}.` 
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
      <div className="grid gap-2">
        <Label htmlFor="email">{t('Forms.email')}</Label>
        <Input id="email" name="email" type="email" required placeholder={t('Forms.emailPlaceholder')} />
      </div>
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
