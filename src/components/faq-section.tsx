"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/section-heading";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  description?: string;
  items: FAQItem[];
}

export function FAQSection({
  title = "Frequently Asked Questions",
  description,
  items,
}: FAQSectionProps) {
  return (
    <section className="relative overflow-hidden border-t border-zinc-900 bg-gradient-to-b from-black via-zinc-950 to-black py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={title} description={description} />
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-zinc-800/80 bg-gradient-to-b from-zinc-900/60 via-zinc-950/80 to-black p-4 sm:p-8 shadow-xl shadow-black/40">
            <Accordion className="w-full space-y-3">
              {items.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="rounded-xl border border-zinc-800/80 bg-gradient-to-r from-zinc-900/40 to-black px-5"
                >
                  <AccordionTrigger className="text-left text-base font-medium text-white transition-colors hover:text-zinc-200 sm:text-lg py-4 sm:py-5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-zinc-300 pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
