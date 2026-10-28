import { cn } from "cn";
import { BlackMoonRing } from "@/components/black-moon-ring";

interface PageHeroProps {
  title: string;
  description: string;
  badge?: string;
  children?: React.ReactNode;
  className?: string;
}

export function PageHero({
  title,
  description,
  badge,
  children,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-zinc-800/80 bg-gradient-to-b from-zinc-950 via-black to-black py-20 sm:py-28",
        className
      )}
    >
      {/* Dynamic monochrome grid background with radial mask */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] bg-grid-pattern [mask-image:radial-gradient(ellipse_75%_65%_at_50%_40%,#000_60%,transparent_100%)]"
        aria-hidden="true"
      />

      {/* Radial Black Moon Ring in background */}
      <BlackMoonRing
        className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40 sm:opacity-50"
        size={520}
      />

      {/* Subtle radial white bloom effect */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 size-96 rounded-full bg-white/[0.025] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
          {badge && (
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-zinc-950 px-3.5 py-1 text-sm font-normal text-zinc-300 backdrop-blur-sm">
              <span className="size-1.5 rounded-full bg-white animate-pulse" />
              <span>{badge}</span>
            </div>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent leading-tight">
            {title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg sm:leading-relaxed font-normal">
            {description}
          </p>
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
