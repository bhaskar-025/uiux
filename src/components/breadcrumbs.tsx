import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "cn";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <div
      className={cn(
        "border-b border-zinc-900 bg-zinc-950/70 backdrop-blur-sm relative z-20",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
        <nav aria-label="Breadcrumb">
          <ol
            className="flex flex-wrap items-center gap-2 text-sm font-normal text-zinc-400"
            role="list"
          >
            <li className="flex items-center">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
              >
                <Home className="size-3.5" aria-hidden="true" />
                <span>Home</span>
              </Link>
            </li>
            {items.map((item, index) => (
              <li key={item.href} className="flex items-center gap-2">
                <ChevronRight className="size-3.5 text-zinc-600" aria-hidden="true" />
                {index === items.length - 1 ? (
                  <span className="text-zinc-200" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}
