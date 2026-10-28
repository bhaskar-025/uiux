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
  ArrowRight,
  MessageSquare,
  Headphones,
  BookOpen,
  Workflow,
  Sparkles,
  Puzzle,
  CheckCircle2,
  Minus,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = createMetadata({
  title: "Solutions — Embedded AI Services for Enterprise",
  description:
    "Explore Nexora AI solutions: embedded conversational AI, AI customer support, enterprise knowledge assistants, workflow automation, SaaS AI agents, and custom AI integrations.",
  path: "/solutions",
});

interface Solution {
  id: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  problem: string;
  howItWorks: string;
  useCases: string[];
  benefits: string[];
  integration: string;
}

const solutions: Solution[] = [
  {
    id: "conversational-ai",
    icon: MessageSquare,
    title: "Embedded Conversational AI Agents",
    tagline: "Natural multi-turn dialogues, natively embedded where your users already work.",
    problem:
      "Customers and employees lose time switching between tools to find answers. Generic chatbots frustrate users with rigid scripted responses that fail to comprehend context.",
    howItWorks:
      "Nexora deploys conversational agents that embed directly into your website, application, or internal portal. These agents use large language models combined with your domain knowledge to hold natural, multi-turn conversations. They understand context, remember prior interactions within a session, and provide specific answers grounded in your data.",
    useCases: [
      "Website visitor engagement and pre-sales queries",
      "In-app user guidance and onboarding assistance",
      "Employee self-service for HR, IT, and policy questions",
    ],
    benefits: [
      "Reduced response times for common inquiries",
      "Consistent, accurate answers drawn from your knowledge base",
      "Lower support volume for repetitive questions",
      "24/7 availability without staffing overhead",
    ],
    integration:
      "Agents embed via a lightweight JavaScript widget, API endpoint, or native component within your React, Vue, or mobile application. They connect to your existing knowledge sources and authentication systems.",
  },
  {
    id: "customer-support",
    icon: Headphones,
    title: "AI-Powered Customer Support",
    tagline: "Faster triage. Smarter routing. Human judgment reserved for high-stakes tickets.",
    problem:
      "Support teams spend significant time on repetitive tickets — password resets, status inquiries, basic troubleshooting — while complex issues wait in queue. Manual ticket classification is slow and inconsistent.",
    howItWorks:
      "Nexora AI agents sit at the front of your support workflow. They automatically classify incoming tickets, resolve straightforward requests, and route complex issues to the right human agent with full context. Agents can query order systems, knowledge bases, and account records to provide personalized responses.",
    useCases: [
      "Automated ticket triage and classification",
      "Self-service resolution for common support requests",
      "Intelligent routing to specialized support teams",
      "Post-resolution follow-ups and satisfaction checks",
    ],
    benefits: [
      "Faster first-response and resolution times",
      "More consistent ticket classification",
      "Human agents focus on complex, high-value interactions",
      "Better customer experience through contextual responses",
    ],
    integration:
      "Integrates with existing helpdesk platforms (Zendesk, Freshdesk, Intercom, or custom systems) via APIs. Agents access your CRM, order management, and knowledge base through secure connectors.",
  },
  {
    id: "knowledge-assistants",
    icon: BookOpen,
    title: "Enterprise Knowledge Assistants",
    tagline: "Turn your scattered documentation into an instant, searchable intelligence layer.",
    problem:
      "Employees spend hours searching through wikis, shared drives, and document repositories. Important information is scattered across systems, and keyword search often fails to surface the right answer.",
    howItWorks:
      "Nexora builds AI-powered knowledge assistants that index and understand your internal documentation — policies, procedures, technical guides, product specs, and training materials. Employees ask questions in natural language and receive direct answers with citations pointing to the source documents.",
    useCases: [
      "Internal policy and procedure lookup",
      "Technical documentation search for engineering teams",
      "New employee onboarding and training support",
      "Cross-departmental knowledge sharing",
    ],
    benefits: [
      "Dramatically reduced time spent searching for information",
      "Improved accuracy through source-attributed answers",
      "Better knowledge retention across the organization",
      "Reduced dependency on specific individuals for institutional knowledge",
    ],
    integration:
      "Connects to Confluence, SharePoint, Notion, Google Drive, internal wikis, and custom document repositories. Supports incremental indexing as documents are updated.",
  },
  {
    id: "workflow-automation",
    icon: Workflow,
    title: "Workflow Automation Agents",
    tagline: "Autonomous multi-step execution across CRMs, ERPs, and databases.",
    problem:
      "Many business workflows involve repetitive, rule-based steps spread across multiple systems — data entry, report compilation, approval routing, status updates. These tasks consume time and introduce human error.",
    howItWorks:
      "Nexora workflow agents orchestrate multi-step processes by connecting to your business systems. They can extract data, apply conditional logic, trigger actions in connected tools, and request human approval when needed. Agents follow defined process templates while adapting to variations in input data.",
    useCases: [
      "Automated report generation from multiple data sources",
      "Invoice processing and approval routing",
      "Employee onboarding task orchestration",
      "Compliance monitoring and alerting",
    ],
    benefits: [
      "Significant time savings on repetitive operational tasks",
      "Reduced manual errors in multi-step processes",
      "Faster cycle times for approvals and hand-offs",
      "Consistent process execution with audit trails",
    ],
    integration:
      "Connects to ERP systems, databases, spreadsheets, email, messaging platforms, and internal APIs. Supports human-in-the-loop approval steps for sensitive operations.",
  },
  {
    id: "saas-agents",
    icon: Sparkles,
    title: "AI Agents for SaaS Products",
    tagline: "Native in-app copilot layers that accelerate adoption and minimize churn.",
    problem:
      "SaaS products with complex features suffer from low adoption rates, high support costs, and user churn. Users struggle to discover features, configure settings, or understand how to accomplish their goals.",
    howItWorks:
      "Nexora embeds AI assistants directly into your SaaS product that understand your feature set, user data model, and common workflows. These assistants guide users through tasks, explain features, troubleshoot issues, and surface relevant capabilities based on what the user is trying to accomplish.",
    useCases: [
      "In-product onboarding and feature discovery",
      "Contextual help and troubleshooting",
      "Natural language interfaces for complex configuration",
      "Proactive suggestions based on usage patterns",
    ],
    benefits: [
      "Higher feature adoption and product engagement",
      "Reduced support ticket volume from product users",
      "Improved user retention through better onboarding",
      "Differentiation through intelligent user experiences",
    ],
    integration:
      "Delivered as a React component, API, or embeddable widget that integrates with your product's UI and data layer. Agents access user context, feature state, and product documentation.",
  },
  {
    id: "custom-integrations",
    icon: Puzzle,
    title: "Custom AI Integrations & Orchestration",
    tagline: "Purpose-built multi-agent architectures tailored to proprietary enterprise stacks.",
    problem:
      "Standard AI solutions don't address every business requirement. Some organizations need agent architectures that span multiple systems, handle domain-specific logic, or coordinate several AI capabilities together.",
    howItWorks:
      "Nexora designs and implements custom AI agent architectures tailored to your specific requirements. This includes multi-agent orchestration, domain-specific tool creation, custom retrieval pipelines, and integration with proprietary systems. We work with your engineering team to build agents that precisely fit your technical and business constraints.",
    useCases: [
      "Multi-agent systems coordinating across departments",
      "Domain-specific AI tools for specialized industries",
      "Custom retrieval and reasoning pipelines",
      "Legacy system integration and modernization",
    ],
    benefits: [
      "Precisely tailored AI capabilities for your use case",
      "Integration with proprietary or legacy systems",
      "Scalable architecture designed for your growth",
      "Full ownership and control of the solution",
    ],
    integration:
      "Custom architecture designed around your existing infrastructure. Supports cloud, on-premises, and hybrid deployment models. Full technical handoff and documentation provided.",
  },
];

const comparisonRows = [
  { label: "Conversational Interface", conversational: true, support: true, knowledge: true, workflow: false, saas: true, custom: true },
  { label: "Ticket Management", conversational: false, support: true, knowledge: false, workflow: false, saas: false, custom: true },
  { label: "Document Retrieval (RAG)", conversational: false, support: false, knowledge: true, workflow: false, saas: true, custom: true },
  { label: "Multi-Step Action Orchestration", conversational: false, support: false, knowledge: false, workflow: true, saas: false, custom: true },
  { label: "Native Product Embedding", conversational: true, support: false, knowledge: false, workflow: false, saas: true, custom: true },
  { label: "Human Approval Loop", conversational: false, support: true, knowledge: false, workflow: true, saas: false, custom: true },
  { label: "Custom Domain Architecture", conversational: false, support: false, knowledge: false, workflow: false, saas: false, custom: true },
];

const solutionShortNames = ["Conversational", "Support", "Knowledge", "Workflow", "SaaS", "Custom"];

export default function SolutionsPage() {
  return (
    <div className="bg-black text-zinc-300 selection:bg-white selection:text-black">
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions" },
        ])}
      />

      <Breadcrumbs items={[{ label: "Solutions", href: "/solutions" }]} />

      <PageHero
        title="Solutions — Embedded AI Services for Enterprise"
        description="From customer-facing conversational agents to internal workflow automation, Nexora AI delivers purpose-built solutions that integrate directly into your existing systems."
        badge="Enterprise Solutions Catalog"
      />

      {/* Solutions Detailed List */}
      <div className="divide-y divide-zinc-900">
        {solutions.map((solution, index) => (
          <section
            key={solution.id}
            id={solution.id}
            className={`relative overflow-hidden py-20 sm:py-28 ${index % 2 === 1 ? "bg-zinc-950/50" : "bg-black"}`}
          >
            {index % 2 === 1 && (
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.03] bg-grid-pattern [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,#000_60%,transparent_100%)]"
                aria-hidden="true"
              />
            )}
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid gap-12 lg:grid-cols-5 items-start">
                {/* Left: Title & Descriptions */}
                <div className="lg:col-span-2">
                  <div className="mb-5 inline-flex size-14 items-center justify-center rounded-xl border border-zinc-700/80 bg-gradient-to-b from-zinc-800 to-zinc-900 text-white shadow-sm">
                    <solution.icon className="size-7" aria-hidden="true" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-medium tracking-tight bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                    {solution.title}
                  </h2>
                  <p className="mt-3 text-base sm:text-lg font-normal text-zinc-300">
                    {solution.tagline}
                  </p>

                  <div className="mt-8 space-y-6 border-t border-zinc-900 pt-6">
                    <div>
                      <h3 className="text-base font-medium tracking-wide text-zinc-300">
                        The Business Problem
                      </h3>
                      <p className="mt-2 text-base leading-relaxed text-zinc-300 font-normal">
                        {solution.problem}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-base font-medium tracking-wide text-zinc-300">
                        How the Solution Works
                      </h3>
                      <p className="mt-2 text-base leading-relaxed text-zinc-400 font-normal">
                        {solution.howItWorks}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right: Cards for Use Cases, Benefits, and Integration */}
                <div className="space-y-6 lg:col-span-3">
                  <Card className="rounded-xl border border-zinc-800/90 bg-gradient-to-b from-zinc-900/50 via-zinc-950/80 to-black p-0 shadow-lg shadow-black/40">
                    <CardContent className="p-6 sm:p-7">
                      <h3 className="mb-4 text-base font-medium tracking-wide text-white flex items-center gap-2.5">
                        <span className="size-2 rounded-full bg-white" />
                        Suitable Use Cases
                      </h3>
                      <ul className="space-y-3" role="list">
                        {solution.useCases.map((uc) => (
                          <li key={uc} className="flex items-start gap-3 text-base text-zinc-300 font-normal">
                            <CheckCircle2 className="mt-1 size-5 shrink-0 text-white" aria-hidden="true" />
                            <span>{uc}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-xl border border-zinc-800/90 bg-gradient-to-b from-zinc-900/50 via-zinc-950/80 to-black p-0 shadow-lg shadow-black/40">
                    <CardContent className="p-6 sm:p-7">
                      <h3 className="mb-4 text-base font-medium tracking-wide text-white flex items-center gap-2.5">
                        <span className="size-2 rounded-full bg-white" />
                        Potential Business Benefits
                      </h3>
                      <ul className="space-y-3" role="list">
                        {solution.benefits.map((b) => (
                          <li key={b} className="flex items-start gap-3 text-base text-zinc-300 font-normal">
                            <span className="mt-2 size-2 shrink-0 rounded-full bg-white" aria-hidden="true" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="rounded-xl border border-zinc-800/90 bg-gradient-to-b from-zinc-900/40 via-zinc-950/70 to-black p-0 shadow-lg shadow-black/40">
                    <CardContent className="p-6 sm:p-7">
                      <h3 className="mb-2.5 text-base font-medium tracking-wide text-zinc-200">
                        Integration Mechanics
                      </h3>
                      <p className="text-base leading-relaxed text-zinc-400 font-normal">
                        {solution.integration}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Comparison Matrix Section */}
      <section className="relative overflow-hidden border-t border-zinc-900 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Decision Matrix"
            title="Which Solution Fits Your Needs?"
            description="Compare capabilities across our embedded AI solutions to select the right approach for your operational goals."
          />
          <div className="mx-auto max-w-5xl overflow-hidden rounded-xl border border-zinc-800 bg-gradient-to-b from-zinc-950 to-black shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-base">
                <thead>
                  <tr className="border-b border-zinc-800 bg-gradient-to-r from-zinc-900 via-zinc-900/80 to-zinc-950 text-sm text-zinc-300">
                    <th className="py-4 px-5 font-medium text-white">Platform Capability</th>
                    {solutionShortNames.map((name) => (
                      <th key={name} className="py-4 px-3 text-center font-normal">
                        {name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-900">
                  {comparisonRows.map((row) => (
                    <tr key={row.label}>
                      <td className="py-4 px-5 font-normal text-white text-base">
                        {row.label}
                      </td>
                      {[row.conversational, row.support, row.knowledge, row.workflow, row.saas, row.custom].map(
                        (val, i) => (
                          <td key={i} className="py-4 px-3 text-center">
                            {val ? (
                              <div className="inline-flex size-7 items-center justify-center rounded-full bg-white/10 text-white">
                                <CheckCircle2 className="size-4 text-white" aria-label="Included" />
                              </div>
                            ) : (
                              <Minus className="mx-auto size-4 text-zinc-700" aria-label="Not applicable" />
                            )}
                          </td>
                        )
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-linking shortcuts */}
      <section className="border-t border-zinc-900 bg-black py-12">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-4 text-base sm:px-6 lg:px-8">
          <span className="text-zinc-400 font-normal">Architectural Exploration:</span>
          <Button asChild variant="outline" size="sm" className="font-normal">
            <Link href="/platform">
              <span>Explore Platform Architecture</span>
              <ArrowRight className="ml-1 size-3.5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="font-normal">
            <Link href="/use-cases">
              <span>View Applied Use Cases</span>
              <ArrowRight className="ml-1 size-3.5" />
            </Link>
          </Button>
        </div>
      </section>

      <CTASection
        title="Unsure Which Solution Suits Your Current Stack?"
        description="Share your workflows and existing systems, and our team will recommend an embedded architecture tailored to your scope."
        primaryLabel="Book a Technical Consultation"
        primaryHref="/contact"
      />
    </div>
  );
}
