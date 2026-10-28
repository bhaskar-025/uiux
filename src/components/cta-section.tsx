import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { BlackMoonRing } from "@/components/black-moon-ring";

interface CTASectionProps {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTASection({
  title,
  description,
  primaryLabel = "Book a Consultation",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden border-t border-zinc-800 bg-gradient-to-b from-zinc-950 via-black to-black py-20 sm:py-28">
      {/* Background grid and radial mask */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] bg-grid-pattern [mask-image:radial-gradient(ellipse_75%_65%_at_50%_50%,#000_60%,transparent_100%)]"
        aria-hidden="true"
      />

      {/* Radial Black Moon Ring */}
      <BlackMoonRing
        className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50 sm:opacity-60"
        size={580}
      />

      {/* Background glow bloom */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[450px] rounded-full bg-white/[0.025] blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-zinc-950 px-3.5 py-1 text-sm font-normal text-zinc-300">
            <Sparkles className="size-4 text-white" aria-hidden="true" />
            <span>Ready for Next-Gen Automation?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg font-normal">
            {description}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto font-medium shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:shadow-[0_0_35px_rgba(255,255,255,0.4)]">
              <Link href={primaryHref}>
                <span>{primaryLabel}</span>
                <ArrowRight className="ml-2 size-4" aria-hidden="true" />
              </Link>
            </Button>
            {secondaryLabel && secondaryHref && (
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto font-medium">
                <Link href={secondaryHref}>{secondaryLabel}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
