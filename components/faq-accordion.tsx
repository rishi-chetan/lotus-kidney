"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useI18n } from "@/components/providers/i18n-provider"

type FAQ = { question: string; answer: string; category?: string }

export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const { t } = useI18n()
  
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((_, idx) => (
        <AccordionItem key={idx} value={`faq-${idx}`}>
          <AccordionTrigger className="text-left">{t(`FAQs.q${idx + 1}`)}</AccordionTrigger>
          <AccordionContent>{t(`FAQs.a${idx + 1}`)}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
