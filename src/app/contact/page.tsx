import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForm } from "@/components/contact-form";
import { FAQSection } from "@/components/faq-section";
import { createMetadata } from "@/lib/metadata";
import { JsonLd, getBreadcrumbSchema } from "@/lib/structured-data";
import {
  FileText,
  Layers,
  Target,
  Clock,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = createMetadata({
  title: "Contact — Book an AI Integration Consultation",
  description:
    "Get in touch with Nexora AI to discuss your AI integration requirements. Describe your business challenge, current systems, and goals — and we'll recommend an approach.",
  path: "/contact",
});

const planningTips = [
  {
    icon: Target,
    title: "Define the Primary Friction Point",
    description:
      "Clarify which workflow is sluggish, repetitive, or error-prone. Where do employees or customers lose the most productive hours?",
  },
  {
    icon: Layers,
    title: "Inventory Connected Systems",
    description:
      "List the software applications involved — CRMs, ticketing queues, ERP databases, or custom internal APIs. Clear schemas accelerate scoping.",
  },
  {
    icon: FileText,
    title: "Identify Knowledge Repositories",
    description:
      "Pinpoint where authoritative documentation resides (wikis, PDFs, FAQs, runbooks). Agent intelligence depends on clean, verifiable source data.",
  },
  {
    icon: Clock,
    title: "Outline Timeline Expectations",
    description:
      "Whether you are targeting a 3-week Proof-of-Concept or a multi-department enterprise rollout, explicit milestones guide the integration roadmap.",
  },
];

const contactFAQ = [
  {
    question: "What happens after I submit this consultation request?",
    answer:
      "This form demonstrates client-side form validation and demo submission handling. In a production environment, an engineering lead reviews your stack details within 24 business hours to arrange an exploratory architecture session.",
  },
  {
    question: "What details are most helpful to share initially?",
    answer:
      "Sharing your current software systems (e.g. Zendesk, Salesforce, PostgreSQL), the estimated monthly volume of tickets or interactions, and your security compliance requirements helps us provide a precise technical scoping.",
  },
  {
    question: "Do you offer Proof-of-Concept (PoC) validation sprints?",
    answer:
      "Yes. We recommend starting with a targeted 3-week Proof-of-Concept on a single workflow. This allows your team to evaluate accuracy, latency, and user satisfaction before committing to enterprise-wide deployment.",
  },
  {
    question: "Will our proprietary business data be secure?",
    answer:
      "All integrations are architected around strict data isolation, zero model retention, and role-based token gating. Sensitive data never leaves your defined security perimeter.",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-black text-zinc-300 selection:bg-white selection:text-black">
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />

      <PageHero
        title="Book an AI Integration Consultation"
        description="Tell us about your business challenge, existing systems, and goals. We'll review your requirements and recommend an approach for embedding AI agents into your workflows."
        badge="Direct Consultation & Scoping"
      />

      <section className="relative overflow-hidden py-20 sm:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035] bg-grid-pattern [mask-image:radial-gradient(ellipse_80%_70%_at_50%_35%,#000_60%,transparent_100%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 items-start">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <span className="text-sm font-normal tracking-wide text-zinc-300">
                  Step 1 of 2
                </span>
                <h2 className="mt-1.5 text-2xl sm:text-3xl font-medium tracking-tight bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                  Submit Your Integration Inquiry
                </h2>
                <p className="mt-2.5 text-base text-zinc-300 font-normal">
                  Complete the questionnaire below. All fields marked with an asterisk (*) are required for validation.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Preparation Tips */}
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900/60 via-zinc-950/80 to-black p-6 sm:p-7 shadow-xl shadow-black/40">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="size-5 text-white" />
                  <h3 className="text-lg font-medium tracking-wide text-white">
                    Preparing for Consultation
                  </h3>
                </div>
                <p className="text-base text-zinc-300 leading-relaxed mb-6 font-normal">
                  Having clarity on the following four dimensions guarantees an efficient, actionable initial technical review:
                </p>

                <div className="space-y-4">
                  {planningTips.map(({ icon: Icon, title, description }) => (
                    <div
                      key={title}
                      className="rounded-xl border border-zinc-900 bg-gradient-to-r from-zinc-900/50 to-black p-4"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-zinc-700/80 bg-gradient-to-b from-zinc-800 to-zinc-900 text-white shadow-sm">
                          <Icon className="size-4" aria-hidden="true" />
                        </div>
                        <h4 className="text-base font-medium text-white tracking-tight">{title}</h4>
                      </div>
                      <p className="text-sm leading-relaxed text-zinc-400 pl-11 font-normal">
                        {description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        title="Consultation & Scoping FAQ"
        description="What to expect during our technical discovery sessions and Proof-of-Concept planning."
        items={contactFAQ}
      />
    </div>
  );
}
