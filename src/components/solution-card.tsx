import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "cn";

interface SolutionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits?: string[];
  className?: string;
  id?: string;
}

export function SolutionCard({
  icon: Icon,
  title,
  description,
  benefits,
  className,
  id,
}: SolutionCardProps) {
  return (
    <Card
      id={id}
      className={cn(
        "relative overflow-hidden rounded-xl border border-zinc-800/90 bg-gradient-to-b from-zinc-900/50 via-zinc-950/80 to-black backdrop-blur-sm p-0 shadow-lg shadow-black/40",
        className
      )}
    >
      {/* Top subtle highlight line with monochrome gradient */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <CardContent className="p-6 sm:p-7">
        <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl border border-zinc-700/80 bg-gradient-to-b from-zinc-800 to-zinc-900 text-white shadow-sm">
          <Icon className="size-5" aria-hidden="true" />
        </div>
        <h3 className="mb-2.5 text-xl font-medium text-white">
          {title}
        </h3>
        <p className="text-base leading-relaxed text-zinc-400 font-normal">
          {description}
        </p>
        {benefits && benefits.length > 0 && (
          <ul className="mt-5 space-y-2.5 border-t border-zinc-900 pt-4" role="list">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-2.5 text-sm text-zinc-300 font-normal"
              >
                <span className="mt-1.5 inline-block size-1.5 shrink-0 rounded-full bg-white" aria-hidden="true" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
