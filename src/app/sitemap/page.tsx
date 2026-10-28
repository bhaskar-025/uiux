import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";
import { CTASection } from "@/components/cta-section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/metadata";
import { JsonLd, getBreadcrumbSchema } from "@/lib/structured-data";
import {
  FileCode,
  FileText,
  Network,
  Bot,
  Layers,
  Sparkles,
  ArrowRight,
  Workflow,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = createMetadata({
  title: "HTML Sitemap — Page Architecture & Site Index | Nexora AI",
  description:
    "Explore the complete architectural directory and navigation index of Nexora AI, including embedded AI solutions, technical platform stack, enterprise use cases, and consultation booking.",
  path: "/sitemap",
});

const primaryRoutes = [
  {
    title: "Home",
    href: "/",
    description:
      "Overview of Nexora AI's embedded agent solutions, business positioning, core capabilities, implementation process, and live telemetry preview.",
    priority: "1.0",
    changeFreq: "Weekly",
    sublinks: [
      { label: "Embedded Agent Telemetry", href: "/#telemetry" },
      { label: "Core Service Capabilities", href: "/#services" },
      { label: "Implementation Process", href: "/#process" },
      { label: "Impact Highlights", href: "/#impact" },
      { label: "Governance by Design", href: "/#governance" },
    ],
  },
  {
    title: "Solutions Catalog",
    href: "/solutions",
    description:
      "Comprehensive catalog of 6 embedded AI agent solutions with business problems, workflows, target use cases, and integration mechanics.",
    priority: "0.9",
    changeFreq: "Monthly",
    sublinks: [
      { label: "Conversational AI Agents", href: "/solutions#conversational-ai" },
      { label: "Customer Support Triage", href: "/solutions#customer-support" },
      { label: "Enterprise Knowledge Assistants", href: "/solutions#knowledge-assistants" },
      { label: "Workflow Automation Agents", href: "/solutions#workflow-automation" },
      { label: "In-App AI for SaaS Products", href: "/solutions#saas-ai" },
      { label: "Custom Enterprise AI Integrations", href: "/solutions#custom-integrations" },
    ],
  },
  {
    title: "Platform Architecture",
    href: "/platform",
    description:
      "Deep dive into the 4-layer technical architecture of embedded AI agents, security principles, touchpoints, and technical FAQ.",
    priority: "0.8",
    changeFreq: "Monthly",
    sublinks: [
      { label: "Layer 01: User Interface Layer", href: "/platform#layer-ui" },
      { label: "Layer 02: Agent Orchestration Engine", href: "/platform#layer-orchestration" },
      { label: "Layer 03: Models & Tool Execution", href: "/platform#layer-tools" },
      { label: "Layer 04: Enterprise Systems Layer", href: "/platform#layer-systems" },
      { label: "Enterprise Security Principles", href: "/platform#security" },
    ],
  },
  {
    title: "Enterprise Use Cases",
    href: "/use-cases",
    description:
      "Detailed operational scenarios illustrating how embedded agents automate workflows, reduce resolution latency, and connect data silos.",
    priority: "0.8",
    changeFreq: "Monthly",
    sublinks: [
      { label: "Customer Support & Ticket Triage", href: "/use-cases#support-triage" },
      { label: "Internal Enterprise Knowledge Search", href: "/use-cases#knowledge-search" },
      { label: "Sales & Inbound Lead Qualification", href: "/use-cases#lead-qualification" },
      { label: "Operations & Repetitive Workflow Automation", href: "/use-cases#workflow-automation" },
      { label: "AI Assistants Embedded in SaaS Products", href: "/use-cases#saas-assistants" },
      { label: "Document-Based Question Answering", href: "/use-cases#document-analysis" },
    ],
  },
  {
    title: "Contact & Consultation",
    href: "/contact",
    description:
      "Direct technical consultation request form with multi-factor scope selection, preparation tips, and scoping FAQ.",
    priority: "0.7",
    changeFreq: "Monthly",
    sublinks: [
      { label: "Integration Inquiry Form", href: "/contact" },
      { label: "Technical Preparation Guide", href: "/contact#preparation" },
      { label: "Scoping & Discovery FAQ", href: "/contact#faq" },
    ],
  },
];

const technicalFeeds = [
  {
    title: "XML Sitemap Feed",
    href: "/sitemap.xml",
    icon: FileCode,
    description:
      "Standard XML Sitemap protocol endpoint generated dynamically for search engine web crawlers and indexers.",
    type: "Machine Protocol",
  },
  {
    title: "Robots Specification",
    href: "/robots.txt",
    icon: FileText,
    description:
      "Robots Exclusion Standard rules specifying crawling permissions and referencing the canonical XML sitemap location.",
    type: "Crawler Directives",
  },
  {
    title: "Open Graph Social Card",
    href: "/opengraph-image",
    icon: Sparkles,
    description:
      "Dynamic social preview card generated via Next.js Satori for social media rich link embedding.",
    type: "Rich Media Asset",
  },
];

export default function SitemapPage() {
  return (
    <div className="bg-black text-zinc-300 selection:bg-white selection:text-black">
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Sitemap", path: "/sitemap" },
        ])}
      />

      <Breadcrumbs items={[{ label: "Sitemap", href: "/sitemap" }]} />

      <PageHero
        title="HTML Sitemap — Site Architecture & Page Index"
        description="A complete architectural directory of all pages, embedded solutions, technical platform layers, and discovery feeds across the Nexora AI website."
        badge="On-Page SEO Navigation Index"
      />

      {/* SEO Information Architecture Note */}
      <div className="border-b border-zinc-900 bg-gradient-to-r from-black via-zinc-950 to-black py-4 text-center">
        <p className="mx-auto max-w-3xl px-4 text-sm text-zinc-400 font-normal">
          This HTML sitemap provides search engines and human visitors with a comprehensive view of all indexable URLs and information hierarchies.
        </p>
      </div>

      {/* Primary Routes Section */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035] bg-grid-pattern [mask-image:radial-gradient(ellipse_80%_70%_at_50%_40%,#000_60%,transparent_100%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Information Architecture"
            title="Primary Website Directory"
            description="Explore each primary section of the Nexora AI website, including child anchor topics, target crawl frequency, and crawl priority."
          />

          <div className="space-y-6">
            {primaryRoutes.map((route) => (
              <Card
                key={route.href}
                className="rounded-2xl border border-zinc-800/90 bg-gradient-to-b from-zinc-900/50 via-zinc-950/80 to-black p-0 shadow-lg shadow-black/40"
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-2xl">
                      <div className="flex items-center gap-3 mb-2">
                        <Link
                          href={route.href}
                          className="text-2xl font-medium text-white hover:text-zinc-200 transition-colors"
                        >
                          {route.title}
                        </Link>
                        <span className="rounded-full border border-zinc-800 bg-gradient-to-r from-zinc-900 to-zinc-950 px-3 py-0.5 text-sm text-zinc-300 font-normal">
                          {route.href}
                        </span>
                      </div>
                      <p className="text-base leading-relaxed text-zinc-400 font-normal">
                        {route.description}
                      </p>

                      <div className="mt-5 border-t border-zinc-900 pt-4">
                        <span className="text-sm font-medium text-zinc-300 block mb-3">
                          Section Anchors &amp; Topics:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {route.sublinks.map((sublink) => (
                            <Link
                              key={`${route.href}-${sublink.href}-${sublink.label}`}
                              href={sublink.href}
                              className="rounded-lg border border-zinc-800/90 bg-gradient-to-r from-zinc-900 to-zinc-950 px-3.5 py-1.5 text-sm text-zinc-300 hover:text-white transition-colors font-normal"
                            >
                              {sublink.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex shrink-0 flex-col gap-3 rounded-xl border border-zinc-800 bg-black/60 p-4 lg:w-56">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zinc-500 font-normal">Crawl Priority</span>
                        <span className="font-medium text-white">{route.priority}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zinc-500 font-normal">Change Frequency</span>
                        <span className="font-medium text-white">{route.changeFreq}</span>
                      </div>
                      <Button asChild size="sm" variant="outline" className="mt-2 w-full font-medium">
                        <Link href={route.href}>
                          <span>Visit Page</span>
                          <ArrowRight className="ml-1.5 size-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Machine-Readable Discovery Feeds Section */}
      <section className="relative overflow-hidden border-y border-zinc-900 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Technical SEO"
            title="Machine-Readable Discovery Feeds"
            description="Direct endpoints configured for search engine bots, web scrapers, and open web discovery."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {technicalFeeds.map((feed) => {
              const Icon = feed.icon;
              return (
                <Card
                  key={feed.title}
                  className="rounded-xl border border-zinc-800/90 bg-gradient-to-b from-zinc-900/50 via-zinc-950/80 to-black p-0 shadow-lg shadow-black/40"
                >
                  <CardContent className="p-6 sm:p-7">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex size-12 items-center justify-center rounded-xl border border-zinc-700/80 bg-gradient-to-b from-zinc-800 to-zinc-900 text-white shadow-sm">
                        <Icon className="size-6" aria-hidden="true" />
                      </div>
                      <span className="rounded-full border border-zinc-800 bg-gradient-to-r from-zinc-900 to-zinc-950 px-3 py-1 text-sm text-zinc-300 font-normal">
                        {feed.type}
                      </span>
                    </div>

                    <h3 className="mb-2 text-xl font-medium text-white">{feed.title}</h3>
                    <p className="text-base leading-relaxed text-zinc-400 font-normal mb-5">
                      {feed.description}
                    </p>

                    <Button asChild variant="outline" size="sm" className="font-medium">
                      <Link href={feed.href} target="_blank" rel="noopener noreferrer">
                        <span>Open {feed.href}</span>
                        <ExternalLink className="ml-1.5 size-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Structured SEO Benefits Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Technical Compliance"
            title="On-Page SEO Optimization Standards"
            description="Nexora AI adheres to comprehensive technical SEO guidelines ensuring indexability, discoverability, and accessibility."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Canonical URL Integrity",
                desc: "Every page declares an absolute canonical link tag via Next.js metadata to prevent duplicate content indexing.",
              },
              {
                title: "JSON-LD Semantic Schemas",
                desc: "Structured data conforming to Schema.org standards is embedded on all pages for Organization, WebSite, and BreadcrumbList.",
              },
              {
                title: "Semantic Headings Hierarchy",
                desc: "Strict logical structure with a single H1 per page, sequential H2 section headers, and descriptive H3 module titles.",
              },
              {
                title: "Dynamic XML Sitemap",
                desc: "Auto-generated XML sitemap generated at /sitemap.xml detailing change frequencies and priority scores.",
              },
              {
                title: "Robots Protocol Directives",
                desc: "Configured robots.txt referencing the sitemap index and giving explicit crawling directives to user agents.",
              },
              {
                title: "WCAG Accessible Navigation",
                desc: "Accessible landmark roles, keyboard navigation compliance, and high-contrast monochrome design.",
              },
            ].map(({ title, desc }) => (
              <Card
                key={title}
                className="rounded-xl border border-zinc-800/90 bg-gradient-to-b from-zinc-900/50 via-zinc-950/80 to-black p-0 shadow-lg shadow-black/40"
              >
                <CardContent className="p-6 sm:p-7">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <CheckCircle2 className="size-5 text-white shrink-0" />
                    <h3 className="text-lg font-medium text-white">{title}</h3>
                  </div>
                  <p className="text-base leading-relaxed text-zinc-400 font-normal">
                    {desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Embed AI Into Your Business?"
        description="Connect with our solutions architects to design an integration blueprint tailored to your systems."
        primaryLabel="Book a Consultation"
        primaryHref="/contact"
        secondaryLabel="Explore Solutions"
        secondaryHref="/solutions"
      />
    </div>
  );
}

