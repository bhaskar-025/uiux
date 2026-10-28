import {
  Monitor,
  Bot,
  Brain,
  Database,
  Shield,
  ArrowDown,
  Layers,
  Settings,
  Users,
  Building2,
  CheckCircle2,
} from "lucide-react";

const layers = [
  {
    step: "01",
    label: "User Interface Layer",
    description: "Websites, customer portals, chat widgets, SaaS UI, and internal consoles",
    icon: Monitor,
  },
  {
    step: "02",
    label: "Agent Orchestration Layer",
    description: "Dynamic routing, multi-turn context memory, tool selection, and reasoning",
    icon: Bot,
  },
  {
    step: "03",
    label: "Models & Tool Execution",
    description: "Model-agnostic LLMs, vector search, API action callers, and knowledge retrieval",
    icon: Brain,
  },
  {
    step: "04",
    label: "Enterprise Systems Layer",
    description: "CRMs, ERPs, relational databases, cloud storage, and legacy backends",
    icon: Building2,
  },
];

const sideModules = [
  { label: "Security & Guardrails", icon: Shield, desc: "Data isolation & scoped tokens" },
  { label: "Config & Policies", icon: Settings, desc: "Custom instructions & prompts" },
  { label: "Monitoring & Audit", icon: Layers, desc: "Full latency & trace logging" },
  { label: "Human Approval Loop", icon: Users, desc: "Sensitive action escalation" },
];

export function ArchitectureDiagram() {
  return (
    <div
      className="mx-auto max-w-4xl animate-fade-in-up"
      role="img"
      aria-label="Nexora AI Platform Architecture: User Interface connects to Agent Orchestration, which connects to Models and Tools, which connects to Enterprise Systems. Security, Configuration, Monitoring, and Human Review modules operate across all layers."
    >
      <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900/60 via-zinc-950/90 to-black p-6 sm:p-8 backdrop-blur-md shadow-[0_0_50px_rgba(0,0,0,0.85)]">
        {/* Subtle grid background */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-grid-pattern" />

        {/* Header badge */}
        <div className="mb-6 flex items-center justify-between border-b border-zinc-900 pb-4">
          <div className="flex items-center gap-2.5">
            <span className="size-2 rounded-full bg-white animate-ping" />
            <span className="text-base font-normal tracking-wide text-zinc-200">
              Nexora Modular Agent Pipeline
            </span>
          </div>
          <span className="text-sm text-zinc-400 font-normal">v2.4 Conceptual Stack</span>
        </div>

        {/* Main layout */}
        <div className="grid gap-6 lg:grid-cols-4">
          {/* Main vertical pipeline */}
          <div className="space-y-3.5 lg:col-span-3">
            {layers.map((layer, index) => {
              const Icon = layer.icon;
              return (
                <div key={layer.label} className="relative">
                  <div className="flex items-center gap-4 rounded-xl border border-zinc-800 bg-gradient-to-r from-zinc-900/70 via-black to-black p-4 sm:p-5">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-zinc-700/80 bg-gradient-to-b from-zinc-800 to-zinc-900 text-white shadow-sm">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2.5">
                        <span className="text-sm font-medium text-zinc-400">{layer.step}</span>
                        <p className="text-base font-medium text-white tracking-tight">{layer.label}</p>
                      </div>
                      <p className="text-sm text-zinc-400 leading-relaxed mt-1 font-normal">{layer.description}</p>
                    </div>
                  </div>

                  {index < layers.length - 1 && (
                    <div className="flex justify-center py-1">
                      <ArrowDown
                        className="size-4 text-zinc-600"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Cross-Cutting modules */}
          <div className="flex flex-col justify-between gap-3.5 rounded-xl border border-zinc-800/80 bg-gradient-to-b from-zinc-900/40 to-black p-4 sm:p-5 lg:col-span-1">
            <div className="text-center">
              <span className="text-sm font-normal tracking-wide text-zinc-300 block border-b border-zinc-900 pb-2.5">
                Cross-Cutting Controls
              </span>
            </div>

            <div className="space-y-3">
              {sideModules.map((mod) => {
                const Icon = mod.icon;
                return (
                  <div
                    key={mod.label}
                    className="rounded-lg border border-zinc-800/80 bg-gradient-to-b from-zinc-900 to-zinc-950 p-3"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="size-4 text-zinc-300" aria-hidden="true" />
                      <span className="text-sm font-medium text-zinc-200">
                        {mod.label}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-400 leading-tight font-normal">
                      {mod.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 text-center border-t border-zinc-900">
              <span className="text-sm text-zinc-400 font-normal">End-to-End Governance</span>
            </div>
          </div>
        </div>

        {/* Bottom Legend */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-900 pt-4 text-sm text-zinc-400 font-normal">
          <div className="flex items-center gap-2">
            <Database className="size-4 text-zinc-400" aria-hidden="true" />
            <span>Bi-directional contextual data sync</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-white" aria-hidden="true" />
            <span>Zero proprietary data retention without consent</span>
          </div>
        </div>
      </div>
    </div>
  );
}
