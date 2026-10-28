import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";
import { UseCaseCard } from "@/components/use-case-card";
import { FAQSection } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";
import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/metadata";
import { JsonLd, getBreadcrumbSchema } from "@/lib/structured-data";
import {
  Headphones,
  Search,
  TrendingUp,
  Cog,
  Sparkles,
  FileText,
  ArrowRight,
  ArrowDown,
} from "lucide-react";

export const metadata: Metadata = createMetadata({
  title: "Use Cases — How Businesses Apply Embedded AI Agents",
  description:
    "Explore detailed use cases for embedded AI agents: customer support triage, enterprise knowledge search, sales qualification, workflow automation, SaaS assistants, and document Q&A.",
  path: "/use-cases",
});

const useCases = [
  {
    id: "support-triage",
    icon: Headphones,
    title: "Customer Support & Ticket Triage",
    problem:
      "Support queues overflow with high ticket volumes daily. Manual classification is slow and inconsistent. Repetitive tier-1 inquiries consume agent hours while complex escalations sit idle, dragging down CSAT metrics.",
    workflow:
      "An embedded AI agent intercepts incoming tickets, categorizes intent and urgency, resolves routine queries autonomously (order status, reset procedures, billing FAQs), and transfers high-severity issues to specialists with full account summaries.",
    systems: ["Zendesk", "Salesforce Service Cloud", "Internal CRM", "Stripe Billing", "ERP Order Sync"],
    benefit:
      "Drastic reduction in first-response latency, standardized ticket tagging, and high-tier agents focused on complex issues requiring empathetic human judgment.",
    limitations:
      "Automated resolutions are restricted to verified policy playbooks. Refund issuance and account terminations require human sign-off.",
  },
  {
    id: "knowledge-search",
    icon: Search,
    title: "Internal Enterprise Knowledge Search",
    problem:
      "Engineers, operations, and HR teams waste hours locating internal policies, API docs, and runbooks scattered across wikis, Google Drives, and deprecated chat channels.",
    workflow:
      "A domain-trained knowledge assistant continuously indexes multi-source documentation. Staff ask natural-language questions within internal web consoles or Slack, receiving direct synthesized responses with exact document citations.",
    systems: ["Confluence", "SharePoint", "Notion", "Google Workspace", "Internal Engineering Git"],
    benefit:
      "Hours of search time reclaimed weekly per knowledge worker, reduced dependency on key individuals, and faster onboarding ramp-ups.",
    limitations:
      "Answers depend strictly on document freshness. Outdated or contradictory internal documents are highlighted for documentation owners.",
  },
  {
    id: "lead-qualification",
    icon: TrendingUp,
    title: "Sales & Inbound Lead Qualification",
    problem:
      "Inbound inquiries arrive 24/7 with varying buyer intent. Slow sales follow-ups result in missed deals, while representatives spend hours qualifying unqualified leads.",
    workflow:
      "An embedded conversational agent engages inbound prospects directly on the marketing website. It qualifies budget, timeline, team headcount, and technical constraints, automatically booking meetings on account executives' calendars.",
    systems: ["HubSpot CRM", "Marketo", "Calendly / Chili Piper", "Slack Alerts", "Segment"],
    benefit:
      "Immediate sub-minute response time to prospective buyers, higher conversion rates, and sales reps focusing exclusively on qualified opportunities.",
    limitations:
      "Lead scoring relies on prospect inputs; credit checks or contract approvals remain strictly under human representative oversight.",
  },
  {
    id: "workflow-automation",
    icon: Cog,
    title: "Operations & Repetitive Workflow Automation",
    problem:
      "Backoffice staff spend substantial time manually compiling multi-source spreadsheets, matching vendor invoices, and routing purchase requisitions.",
    workflow:
      "An autonomous workflow agent monitors inbox events, extracts structured invoice line items, compares them against purchase orders in the ERP, and queues validated payouts for accounting authorization.",
    systems: ["SAP ERP", "NetSuite", "DocuSign", "Workday HRIS", "PostgreSQL Data Warehouse"],
    benefit:
      "Elimination of manual double-entry, faster month-end close cycles, and comprehensive immutable audit logs for all transactions.",
    limitations:
      "Financial disbursals and discrepancies exceeding defined dollar thresholds enforce human supervisor authorization.",
  },
  {
    id: "saas-assistants",
    icon: Sparkles,
    title: "AI Assistants Embedded in SaaS Products",
    problem:
      "Complex SaaS software experiences high onboarding drop-offs and low feature discovery because users struggle to navigate multi-step configurations on their own.",
    workflow:
      "A contextual AI copilot embedded in the SaaS interface interprets what screen the user is viewing, explains complex settings, and executes multi-step setup wizards via user-confirmed natural language prompts.",
    systems: ["React Web App", "Product State Store", "Help Center CMS", "Product Analytics SDK"],
    benefit:
      "Accelerated time-to-value for new users, reduced product churn, and decreased in-app support ticket submission volume.",
    limitations:
      "The assistant suggests and previews actions; destructive configurations require explicit user confirmation buttons.",
  },
  {
    id: "document-analysis",
    icon: FileText,
    title: "Document-Based Question Answering",
    problem:
      "Legal, compliance, and research teams review 100+ page contracts and regulatory filings manually to answer specific compliance questions.",
    workflow:
      "An embedded document agent parses complex PDFs, tables, and clauses. Practitioners query the repository, receiving exact answers paired with interactive page-level highlights and source attribution.",
    systems: ["Secure S3 Cloud Storage", "Elasticsearch", "Document AI Parser", "Legal DMS"],
    benefit:
      "Immediate synthesis across complex multi-page files, reducing manual reading overhead while preserving complete verifiability.",
    limitations:
      "The agent accelerates clause extraction; certified legal interpretations and formal compliance sign-offs require human counsel.",
  },
];

const workflowSteps = [
  { step: "01", label: "Trigger Event", description: "Inbound user message, support ticket, webhook, or scheduled cron" },
  { step: "02", label: "Intent & Classification", description: "Orchestrator determines domain scope, urgency, and necessary permissions" },
  { step: "03", label: "Context & RAG Retrieval", description: "Fetches live user records, tenant configs, and semantic knowledge vectors" },
  { step: "04", label: "Reasoning & Plan Formulation", description: "LLM evaluates data against guardrails and plans tool actions" },
  { step: "05", label: "Action Execution / Gate", description: "Executes verified APIs or pauses for explicit human sign-off" },
  { step: "06", label: "Trace Logging & Feedback", description: "Interaction recorded to audit logs for continuous performance evaluation" },
];

const useCaseFAQ = [
  {
    question: "Are these use cases based on real client case studies?",
    answer:
      "These represent illustrative enterprise integration patterns engineered by Nexora AI. For client confidentiality and academic demonstrative integrity, specific company identities and metric claims are generalized.",
  },
  {
    question: "Can an integration span multiple use cases simultaneously?",
    answer:
      "Yes. Most enterprise deployments combine elements — for example, pairing customer support ticket triage with RAG document lookup and ERP order updates into a single orchestrator pipeline.",
  },
  {
    question: "What is the typical timeframe to validate an agent use case?",
    answer:
      "We typically execute a 3-week Proof-of-Concept for a single focused use case with real enterprise data to validate accuracy and latency before initiating broader deployment.",
  },
];

export default function UseCasesPage() {
  return (
    <div className="bg-black text-zinc-300 selection:bg-white selection:text-black">
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Use Cases", path: "/use-cases" },
        ])}
      />

      <Breadcrumbs items={[{ label: "Use Cases", href: "/use-cases" }]} />

      <PageHero
        title="Use Cases — Embedded AI Agents in Action"
        description="Explore how intelligent AI agents can be applied to real business challenges — from customer support triage to document-based question answering."
        badge="Applied Enterprise Scenarios"
      />

      {/* Illustrative Notice */}
      <div className="border-b border-zinc-900 bg-gradient-to-r from-black via-zinc-950 to-black py-4 text-center">
        <p className="mx-auto max-w-3xl px-4 text-sm text-zinc-400 font-normal">
          Illustrative operational models demonstrating integration workflows. Production parameters adapt to your stack.
        </p>
      </div>

      {/* Use Cases Grid */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035] bg-grid-pattern [mask-image:radial-gradient(ellipse_80%_70%_at_50%_40%,#000_60%,transparent_100%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {useCases.map((useCase) => (
              <UseCaseCard key={useCase.title} {...useCase} />
            ))}
          </div>
        </div>
      </section>

      {/* End-to-End Processing Flow Section */}
      <section className="relative overflow-hidden border-y border-zinc-900 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Execution Lifecycle"
            title="How an Embedded Agent Processes a Request"
            description="Regardless of the specific use case, Nexora AI agents execute through a disciplined, audited pipeline designed to guarantee accuracy and safety."
          />
          <div className="mx-auto max-w-2xl space-y-3.5">
            {workflowSteps.map((step, index) => (
              <div key={step.label}>
                <div className="flex items-center gap-4 rounded-xl border border-zinc-800 bg-gradient-to-r from-zinc-900/70 via-black to-black p-4 sm:p-5">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-zinc-700/80 bg-gradient-to-b from-zinc-800 to-zinc-900 text-base font-medium text-white shadow-sm">
                    {step.step}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-base font-medium text-white">{step.label}</p>
                    <p className="text-base text-zinc-400 mt-1 font-normal">{step.description}</p>
                  </div>
                </div>
                {index < workflowSteps.length - 1 && (
                  <div className="flex justify-center py-1.5">
                    <ArrowDown className="size-4 text-zinc-600" aria-hidden="true" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal linking */}
      <section className="border-b border-zinc-900 bg-black py-12">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-4 text-base sm:px-6 lg:px-8">
          <span className="text-zinc-400 font-normal">Further Reading:</span>
          <Button asChild variant="outline" size="sm" className="font-normal">
            <Link href="/solutions">
              <span>View Solutions Catalog</span>
              <ArrowRight className="ml-1 size-3.5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="font-normal">
            <Link href="/platform">
              <span>Explore Platform Architecture</span>
              <ArrowRight className="ml-1 size-3.5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Use Cases FAQ */}
      <FAQSection
        title="Use Case Exploration FAQ"
        description="Common scoping questions when planning an embedded AI agent integration."
        items={useCaseFAQ}
      />

      <CTASection
        title="Have a Specific Workflow in Mind?"
        description="Describe your enterprise requirements and we will draft a customized integration architecture blueprint."
        primaryLabel="Schedule a Scoping Call"
        primaryHref="/contact"
      />
    </div>
  );
}
