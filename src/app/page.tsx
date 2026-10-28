import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { SolutionCard } from "@/components/solution-card";
import { CTASection } from "@/components/cta-section";
import { AgentNetworkSvg } from "@/components/agent-network-svg";
import { IntegrationsMarquee } from "@/components/integrations-marquee";
import { BlackMoonRing } from "@/components/black-moon-ring";
import { createMetadata } from "@/lib/metadata";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  MessageSquare,
  Workflow,
  Search,
  Shield,
  Zap,
  Settings,
  BarChart3,
  Headphones,
  BookOpen,
  Cog,
  Sparkles,
  Eye,
  Lock,
  ArrowUpRight,
} from "lucide-react";

export const metadata: Metadata = createMetadata({
  title: "Nexora AI — AI Agents That Work Where Your Business Works",
  description:
    "Nexora AI embeds intelligent AI agents into your websites, applications, customer support systems, and enterprise workflows. Conversational AI, knowledge assistants, and workflow automation — seamlessly integrated.",
  path: "/",
});

const coreServices = [
  {
    icon: MessageSquare,
    title: "Conversational AI Agents",
    description:
      "Deploy context-aware conversational agents directly into your websites and applications. Handle customer inquiries, guide users, and provide instant support with natural language understanding.",
    benefits: ["Natural language understanding", "Multi-turn conversations", "Contextual responses"],
  },
  {
    icon: Headphones,
    title: "AI Customer Support",
    description:
      "Automate ticket triage, route issues to the right teams, and resolve common inquiries — while keeping human agents available for complex cases that require judgment.",
    benefits: ["Ticket classification", "Smart routing", "Escalation workflows"],
  },
  {
    icon: BookOpen,
    title: "Knowledge Assistants",
    description:
      "Transform your internal documentation, wikis, and knowledge bases into searchable AI assistants that help employees find answers quickly and accurately.",
    benefits: ["Document retrieval", "Semantic search", "Source attribution"],
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Let AI agents handle repetitive operational tasks — from data entry and report compilation to approval routing — so your teams can focus on strategic work.",
    benefits: ["Process orchestration", "Conditional logic", "System integration"],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discover",
    description:
      "We map your existing workflows, identify high-impact automation opportunities, and define clear objectives for AI agent integration.",
    icon: Search,
  },
  {
    step: "02",
    title: "Design",
    description:
      "We architect agent behaviors, conversation flows, tool integrations, and escalation paths tailored to your business context and user needs.",
    icon: Settings,
  },
  {
    step: "03",
    title: "Integrate",
    description:
      "We embed AI agents into your existing systems — websites, SaaS products, support platforms, internal tools — with minimal disruption to current workflows.",
    icon: Zap,
  },
  {
    step: "04",
    title: "Optimize",
    description:
      "We monitor agent performance, refine responses based on real usage patterns, and continuously improve accuracy, relevance, and user satisfaction.",
    icon: BarChart3,
  },
];

const useCaseHighlights = [
  {
    icon: Headphones,
    title: "Customer Support",
    description: "Triage tickets, answer FAQs, and route complex issues to human agents with full context.",
    href: "/use-cases",
  },
  {
    icon: Search,
    title: "Internal Knowledge",
    description: "Help employees find policies, procedures, and technical documentation instantly.",
    href: "/use-cases",
  },
  {
    icon: Cog,
    title: "Operations",
    description: "Automate data processing, report compilation, and multi-step approval workflows.",
    href: "/use-cases",
  },
  {
    icon: Sparkles,
    title: "Product Experiences",
    description: "Embed intelligent assistants into your SaaS product to guide users and reduce churn.",
    href: "/use-cases",
  },
];

export default function HomePage() {
  return (
    <div className="bg-black text-zinc-300 selection:bg-white selection:text-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-zinc-800/80 bg-gradient-to-b from-zinc-950 via-black to-black py-20 sm:py-28 lg:py-36">
        {/* Subtle grid pattern with radial fade mask */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06] bg-grid-pattern [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,#000_60%,transparent_100%)]"
          aria-hidden="true"
        />

        {/* Radial Black Moon Ring in background */}
        <BlackMoonRing
          className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-75 sm:opacity-90"
          size={780}
        />

        {/* Ambient radial white bloom effect */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 size-[650px] rounded-full bg-white/[0.02] blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Copy */}
            <div className="animate-fade-in-up">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-zinc-950 px-4 py-1.5 text-sm font-normal text-zinc-300 backdrop-blur-sm">
                <span className="relative flex size-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex rounded-full size-2 bg-white" />
                </span>
                <span>Intelligent Agents. Seamlessly Embedded.</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent leading-[1.12]">
                AI Agents That Work Where Your Business Works.
              </h1>

              <p className="mt-6 max-w-xl text-lg sm:text-xl leading-relaxed text-zinc-300 font-normal">
                Nexora AI embeds intelligent agents into your existing websites, applications,
                customer support systems, and enterprise workflows — delivering automation
                that feels native to your product, not bolted on.
              </p>

              <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
                <Button asChild size="lg" className="font-medium shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] transition-all">
                  <Link href="/solutions">
                    <span>Explore Solutions</span>
                    <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="font-medium">
                  <Link href="/contact">Book a Consultation</Link>
                </Button>
              </div>

              {/* Trust micro-stats */}
              <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-zinc-900 pt-6 text-base text-zinc-400 font-normal">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-white" />
                  <span>Zero Disruption Rollout</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-white" />
                  <span>Human-in-the-Loop Safeguards</span>
                </div>
              </div>
            </div>

            {/* Custom Embedded AI Agent SVG Visualizer */}
            <div className="animate-float">
              <AgentNetworkSvg />
            </div>
          </div>
        </div>
      </section>

      {/* Auto-scrolling enterprise integrations ticker */}
      <IntegrationsMarquee />

      {/* Core Services Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Service Capabilities"
            title="Embedded AI Solutions for the Modern Enterprise"
            description="From customer-facing support to internal operations, Nexora AI delivers purpose-built agents that integrate with the tools your teams already use."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreServices.map((service) => (
              <SolutionCard key={service.title} {...service} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="font-medium">
              <Link href="/solutions">
                <span>View All 6 Solutions</span>
                <ArrowRight className="ml-2 size-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How Embedded AI Works Section */}
      <section className="relative overflow-hidden border-y border-zinc-900 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Seamless Architecture"
            title="AI Agents That Fit Into Your Existing Stack"
            description="Unlike standalone AI tools that require users to switch contexts, Nexora agents operate inside your products and workflows — delivering intelligence exactly where decisions are made."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Bot,
                title: "Native In-Product Embedding",
                text: "Agents embed directly into your website, web app, or internal portal — appearing as a natural extension of the interface, not a disconnected chatbot.",
              },
              {
                icon: BrainCircuit,
                title: "Deep Contextual Awareness",
                text: "Agents access relevant business data, session history, and proprietary domain knowledge to provide responses that are specific, accurate, and actionable.",
              },
              {
                icon: Workflow,
                title: "Autonomous Action Orchestration",
                text: "Agents don't just answer questions — they trigger actions, route tickets, update records, and coordinate multi-step processes across systems.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-zinc-800/90 bg-gradient-to-b from-zinc-900/50 via-zinc-950/80 to-black p-7 sm:p-8 shadow-lg shadow-black/40"
              >
                <div className="mb-5 inline-flex size-12 items-center justify-center rounded-xl border border-zinc-700/80 bg-gradient-to-b from-zinc-800 to-zinc-900 text-white shadow-sm">
                  <Icon className="size-6" aria-hidden="true" />
                </div>
                <h3 className="mb-3 text-xl font-medium text-white">{title}</h3>
                <p className="text-base leading-relaxed text-zinc-400 font-normal">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="font-medium">
              <Link href="/platform">
                <span>Explore the Platform Architecture</span>
                <ArrowRight className="ml-2 size-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Integration Lifecycle"
            title="From Discovery to Production Deployment"
            description="A structured, collaborative approach to embedding AI agents into your business — designed to minimize risk and deliver measurable value."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map(({ step, title, description, icon: Icon }) => (
              <Card
                key={step}
                className="relative rounded-xl border border-zinc-800/90 bg-gradient-to-b from-zinc-900/50 via-zinc-950/80 to-black p-0 shadow-lg shadow-black/40"
              >
                <CardContent className="p-6 sm:p-7">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-normal text-zinc-400">
                      {step}
                    </span>
                    <div className="flex size-11 items-center justify-center rounded-lg border border-zinc-700/80 bg-gradient-to-b from-zinc-800 to-zinc-900 text-white shadow-sm">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="mb-2.5 text-xl font-medium text-white">{title}</h3>
                  <p className="text-base leading-relaxed text-zinc-400 font-normal">
                    {description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case Highlights Section */}
      <section className="relative overflow-hidden border-y border-zinc-900 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Applied AI"
            title="Where Embedded AI Agents Make an Impact"
            description="AI agents are most effective when they operate inside the workflows where problems occur — reducing friction, accelerating decisions, and improving outcomes."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {useCaseHighlights.map(({ icon: Icon, title, description, href }) => (
              <Link href={href} key={title} className="block">
                <Card className="h-full rounded-xl border border-zinc-800/90 bg-gradient-to-b from-zinc-900/50 via-zinc-950/80 to-black p-0 shadow-lg shadow-black/40">
                  <CardContent className="p-6 sm:p-7">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex size-11 items-center justify-center rounded-lg border border-zinc-700/80 bg-gradient-to-b from-zinc-800 to-zinc-900 text-white shadow-sm">
                        <Icon className="size-5" aria-hidden="true" />
                      </div>
                      <ArrowUpRight className="size-5 text-zinc-500" />
                    </div>
                    <h3 className="mb-2 text-lg font-medium text-white">{title}</h3>
                    <p className="text-base leading-relaxed text-zinc-400 font-normal">
                      {description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="font-medium">
              <Link href="/use-cases">
                <span>See All Detailed Use Cases</span>
                <ArrowRight className="ml-2 size-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Security & Responsible AI Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Security & Governance"
            title="Responsible AI Integration by Design"
            description="Embedding AI into business-critical workflows requires careful attention to security, transparency, and human oversight. Our approach prioritizes these principles at every stage."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Shield,
                title: "Security-Conscious Integration",
                text: "AI agents operate within your existing security perimeter. We design integrations to respect your data governance policies, access controls, and infrastructure boundaries.",
              },
              {
                icon: Eye,
                title: "Human Oversight & Approvals",
                text: "For sensitive operations, agents can require human approval before executing actions. Escalation paths ensure that critical decisions always involve a person.",
              },
              {
                icon: Lock,
                title: "Transparent & Auditable Tracing",
                text: "Agent actions are logged and traceable. We build systems where you can review what an agent did, why it did it, and how it arrived at its response.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <Card key={title} className="rounded-xl border border-zinc-800/90 bg-gradient-to-b from-zinc-900/50 via-zinc-950/80 to-black p-0 shadow-lg shadow-black/40">
                <CardContent className="p-7">
                  <div className="mb-4 inline-flex size-11 items-center justify-center rounded-lg border border-zinc-700/80 bg-gradient-to-b from-zinc-800 to-zinc-900 text-white">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2.5 text-xl font-medium text-white">{title}</h3>
                  <p className="text-base leading-relaxed text-zinc-400 font-normal">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-zinc-400 font-normal">
            These represent architectural design principles guiding our integration approach, not verified compliance certifications. Specific security requirements are evaluated during scoping.
          </p>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <CTASection
        title="Ready to Embed AI Into Your Business?"
        description="Tell us about your workflows, systems, and goals — and we'll design an AI agent integration strategy tailored to your needs."
        primaryLabel="Book a Consultation"
        primaryHref="/contact"
        secondaryLabel="Explore Solutions"
        secondaryHref="/solutions"
      />
    </div>
  );
}
