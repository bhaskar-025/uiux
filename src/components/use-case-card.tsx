import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface UseCaseCardProps {
  id?: string;
  icon: LucideIcon;
  title: string;
  problem: string;
  workflow: string;
  systems: string[];
  benefit: string;
  limitations?: string;
}

export function UseCaseCard({
  id,
  icon: Icon,
  title,
  problem,
  workflow,
  systems,
  benefit,
  limitations,
}: UseCaseCardProps) {
  return (
    <Card id={id} className="relative overflow-hidden rounded-xl border border-zinc-800/90 bg-gradient-to-b from-zinc-900/50 via-zinc-950/80 to-black backdrop-blur-sm shadow-lg shadow-black/40">
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <CardContent className="p-6 sm:p-8">
        <div className="mb-6 flex items-center gap-3.5">
          <div className="flex size-12 items-center justify-center rounded-xl border border-zinc-700/80 bg-gradient-to-b from-zinc-800 to-zinc-900 text-white shadow-sm">
            <Icon className="size-6" aria-hidden="true" />
          </div>
          <h3 className="text-xl font-medium text-white tracking-tight">{title}</h3>
        </div>

        <div className="space-y-5">
          <div>
            <h4 className="text-sm font-normal tracking-wide text-zinc-400">
              Business Problem
            </h4>
            <p className="mt-1.5 text-base leading-relaxed text-zinc-300 font-normal">{problem}</p>
          </div>

          <div>
            <h4 className="text-sm font-normal tracking-wide text-zinc-400">
              AI Agent Workflow
            </h4>
            <p className="mt-1.5 text-base leading-relaxed text-zinc-400 font-normal">{workflow}</p>
          </div>

          <div>
            <h4 className="text-sm font-normal tracking-wide text-zinc-400">
              Connected Systems
            </h4>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {systems.map((system) => (
                <Badge
                  key={system}
                  variant="secondary"
                  className="rounded-md border border-zinc-800 bg-gradient-to-r from-zinc-900 to-zinc-950 px-3 py-1 text-sm text-zinc-300 font-normal"
                >
                  {system}
                </Badge>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-zinc-800/80 bg-gradient-to-r from-zinc-900/50 to-zinc-950/50 p-4">
            <h4 className="text-sm font-normal tracking-wide text-zinc-400">
              Expected Benefit
            </h4>
            <p className="mt-1 text-base font-medium leading-relaxed text-white">
              {benefit}
            </p>
          </div>

          {limitations && (
            <div className="rounded-md border border-zinc-900 bg-black/60 px-4 py-3">
              <span className="text-sm tracking-wide text-zinc-400 block mb-1">
                Oversight & Guardrails
              </span>
              <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                {limitations}
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
