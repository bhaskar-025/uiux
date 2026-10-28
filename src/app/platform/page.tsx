import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";
import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { FAQSection } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/metadata";
import { JsonLd, getBreadcrumbSchema } from "@/lib/structured-data";
import {
  Bot,
  Brain,
  Wrench,
  Database,
  Shield,
  Users,
  BarChart3,
  AlertTriangle,
  Globe,
  Monitor,
  Server,
  ArrowRight,
  Layers,
  RefreshCw,
  Lock,
  Eye,
} from "lucide-react";

export const metadata: Metadata = createMetadata({
  title: "Platform — AI Agent Architecture & Integration Framework",
  description:
    "Explore the Nexora AI platform architecture: agent orchestration, knowledge retrieval, tool integrations, context management, human oversight, and enterprise-grade security for embedded AI agents.",
  path: "/platform",
});

const platformCapabilities = [
  {
    icon: Bot,
    title: "Agent Orchestration Engine",
    description:
      "The orchestration layer manages agent lifecycle, multi-turn state, and task routing. It dynamically determines which tools, knowledge bases, and action endpoints to invoke based on user intent and real-time context.",
  },
  {
    icon: Brain,
    title: "Hybrid Knowledge Retrieval (RAG)",
    description:
      "Agents query structured databases and unstructured documentation through semantic vector search and exact keyword retrieval. Responses cite verified sources with page or document-level attribution.",
  },
  {
    icon: Wrench,
    title: "Standardized Tool Integrations",
    description:
      "Agents execute operational tasks via strongly typed API connectors. Tools declare strict validation schemas, authorization requirements, and structured output formatting across business software.",
  },
  {
    icon: Database,
    title: "Dynamic Context Management",
    description:
      "Session history, tenant configurations, and active user attributes are compressed and prioritized to maximize prompt token efficiency while preserving long-term conversational memory across channels.",
  },
  {
    icon: Users,
    title: "Human Approval & Escalation",
    description:
      "For financial transactions, data alterations, or high-risk communications, agents enforce explicit approval gates. Complex inquiries cleanly escalate to human operators with full summary context.",
  },
  {
    icon: BarChart3,
    title: "Observability & Latency Tracing",
    description:
      "Every query, tool execution, model prompt, and response token is recorded for telemetry, quality audit, and anomaly detection. Latency benchmarks and hallucination rate metrics are tracked continuously.",
  },
  {
    icon: AlertTriangle,
    title: "Graceful Fallbacks & Guardrails",
    description:
      "When models face contradictory knowledge, system timeouts, or low confidence thresholds, deterministic fallbacks trigger clear user explanations instead of cryptic errors or fabricated output.",
  },
];

const integrationPoints = [
  {
    icon: Globe,
    title: "Websites & Digital Portals",
    description:
      "Lightweight JavaScript SDKs and native React components for customer-facing web experiences and support hubs.",
  },
  {
    icon: Monitor,
    title: "SaaS Product Interfaces",
    description:
      "Native in-app copilots communicating with internal product state to guide users and automate complex workflows.",
  },
  {
    icon: Server,
    title: "Internal Operations Consoles",
    description:
      "Deployments embedded directly into backoffice tooling, IT ticketing boards, and operations dashboards.",
  },
  {
    icon: Layers,
    title: "Enterprise Core Systems",
    description:
      "Direct bidirectional integrations with ERPs (SAP, NetSuite), CRMs (Salesforce, HubSpot), and data warehouses.",
  },
];

const securityPrinciples = [
  {
    icon: Lock,
    title: "Logical Data Isolation",
    description:
      "Client vector stores, prompts, and memory caches are strictly tenant-isolated to prevent cross-account contamination.",
  },
  {
    icon: Shield,
    title: "Granular Scope Control",
    description:
      "Agents only possess credentials to execute pre-approved tool actions matching the authenticated user's permissions.",
  },
  {
    icon: Eye,
    title: "Comprehensive Audit Logs",
    description:
      "Immutable, timestamped event traces record every data retrieval call, model parameter, and user interaction.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Evaluation",
    description:
      "Evaluation pipelines periodically benchmark outputs against domain accuracy ground truths to detect drift.",
  },
];

const platformFAQ = [
  {
    question: "What foundation models does the platform support?",
    answer:
      "The Nexora platform is completely model-agnostic. We architect agent workflows to work with leading frontier models, open-weights models, or self-hosted enterprise models depending on your latency, privacy, and cost objectives.",
  },
  {
    question: "How do agents query real-time enterprise data?",
    answer:
      "Agents connect via secure REST, GraphQL, or database connectors. When a user request requires live information, the orchestrator triggers tool calls to fetch fresh records, respecting data governance and row-level access controls.",
  },
  {
    question: "How is sensitive customer and employee data protected?",
    answer:
      "We apply client-side and proxy-level PII masking before prompts reach language models. Sensitive fields are redacted, and zero client data is used for model retraining or external index sharing.",
  },
  {
    question: "What happens when an agent experiences tool timeouts or API failures?",
    answer:
      "The platform incorporates circuit breakers and deterministic fallbacks. If an external API is unresponsive, the agent alerts the user transparently and routes the task to a queue or human specialist.",
  },
  {
    question: "Is this platform a live standalone SaaS product?",
    answer:
      "No. This website articulates the conceptual architecture of Nexora AI's enterprise integration consultancy. It describes the proven patterns, modules, and workflows we engineer for clients.",
  },
];

export default function PlatformPage() {
  return (
    <div className="bg-black text-zinc-300 selection:bg-white selection:text-black">
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Platform", path: "/platform" },
        ])}
      />

      <Breadcrumbs items={[{ label: "Platform", href: "/platform" }]} />

      <PageHero
        title="Platform — AI Agent Architecture"
        description="A modular, extensible architecture for deploying intelligent agents that integrate with your existing systems, respect your security requirements, and scale with your business."
        badge="Conceptual Platform Stack"
      />

      {/* Visual Architecture Diagram Section */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        {/* Architectural subtle grid pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04] bg-grid-pattern [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,#000_60%,transparent_100%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="System Architecture"
            title="How Embedded AI Agents Work"
            description="Nexora's platform follows a layered pipeline — starting at the user interface, moving through context-aware orchestration, down to enterprise data sources."
          />
          <ArchitectureDiagram />
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-zinc-400 font-normal">
            Conceptual architectural schematic. Production integrations adapt to each enterprise&apos;s custom infrastructure.
          </p>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="relative overflow-hidden border-y border-zinc-900 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Platform Modules"
            title="What the Architecture Provides"
            description="Each layer of the architecture addresses a critical aspect of deploying reliable, useful AI agents in enterprise environments."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {platformCapabilities.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="rounded-xl border border-zinc-800/90 bg-gradient-to-b from-zinc-900/50 via-zinc-950/80 to-black p-0 shadow-lg shadow-black/40">
                <CardContent className="p-6 sm:p-7">
                  <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl border border-zinc-700/80 bg-gradient-to-b from-zinc-800 to-zinc-900 text-white shadow-sm">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-xl font-medium text-white">{title}</h3>
                  <p className="text-base leading-relaxed text-zinc-400 font-normal">
                    {description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Touchpoints Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Integration Endpoints"
            title="Where AI Agents Can Be Embedded"
            description="Nexora agents are designed to integrate into any digital touchpoint — from public-facing websites to internal enterprise tools."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {integrationPoints.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="rounded-xl border border-zinc-800/90 bg-gradient-to-b from-zinc-900/50 via-zinc-950/80 to-black p-0 text-center shadow-lg shadow-black/40">
                <CardContent className="p-6 sm:p-7">
                  <div className="mx-auto mb-4 inline-flex size-12 items-center justify-center rounded-xl border border-zinc-700/80 bg-gradient-to-b from-zinc-800 to-zinc-900 text-white shadow-sm">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-lg font-medium text-white">{title}</h3>
                  <p className="text-base leading-relaxed text-zinc-400 font-normal">
                    {description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Principles Section */}
      <section className="relative overflow-hidden border-y border-zinc-900 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Security & Governance"
            title="Built With Enterprise Security in Mind"
            description="Security, privacy, and governance are architectural considerations — not afterthoughts. These principles guide how we design and deploy every agent integration."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {securityPrinciples.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="rounded-xl border border-zinc-800/90 bg-gradient-to-b from-zinc-900/50 via-zinc-950/80 to-black p-0 shadow-lg shadow-black/40">
                <CardContent className="p-6 sm:p-7">
                  <div className="mb-3.5 inline-flex size-11 items-center justify-center rounded-lg border border-zinc-700/80 bg-gradient-to-b from-zinc-800 to-zinc-900 text-white shadow-sm">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-lg font-medium text-white">{title}</h3>
                  <p className="text-base leading-relaxed text-zinc-400 font-normal">
                    {description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-zinc-400 font-normal">
            These are engineering principles that govern our integration designs, not formal compliance certifications.
          </p>
        </div>
      </section>

      {/* Technical FAQ */}
      <FAQSection
        title="Technical Platform FAQ"
        description="Detailed answers to common questions regarding architecture, runtime constraints, and security."
        items={platformFAQ}
      />

      <CTASection
        title="Want to See How This Architecture Fits Your Infrastructure?"
        description="Share your technical requirements and our engineering team will evaluate integration compatibility with your stack."
        primaryLabel="Book a Technical Consultation"
        primaryHref="/contact"
        secondaryLabel="Explore Solutions"
        secondaryHref="/solutions"
      />
    </div>
  );
}
