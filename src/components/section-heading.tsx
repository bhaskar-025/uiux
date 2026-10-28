import { cn } from "cn";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" && "mx-auto max-w-2xl text-center",
        className
      )}
    >
      {label && (
        <div className={cn("inline-flex items-center gap-2 mb-3.5 rounded-full border border-zinc-800 bg-gradient-to-r from-zinc-900 via-zinc-900/80 to-zinc-950 px-3.5 py-1", align === "center" && "justify-center")}>
          <span className="size-1.5 rounded-full bg-white" />
          <p className="text-sm font-normal tracking-wide text-zinc-300">
            {label}
          </p>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg font-normal">
          {description}
        </p>
      )}
    </div>
  );
}
