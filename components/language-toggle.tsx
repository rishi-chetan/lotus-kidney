"use client"

import { Button } from "@/components/ui/button"
import { Languages } from "lucide-react"
import { useI18n } from "@/components/providers/i18n-provider"

export function LanguageToggle() {
  const { locale, setLocale, t } = useI18n()

  const toggleLanguage = () => {
    setLocale(locale === 'en' ? 'te' : 'en')
  }

  return (
    <Button
      variant="ghost"
      aria-label="Toggle language"
      onClick={toggleLanguage}
      className="px-2"
    >
      <Languages className="h-5 w-5" />
      <span className="ml-2 text-sm font-medium">{t('LanguageToggle.switchTo')}</span>
    </Button>
  )
}

