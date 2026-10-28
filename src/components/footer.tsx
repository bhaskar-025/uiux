import Link from "next/link";
import { BrainCircuit, Mail, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/lib/site-config";
import { navLinks } from "@/lib/navigation";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-zinc-900 bg-gradient-to-b from-black via-zinc-950 to-black text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label="Nexora AI — Home">
              <div className="flex size-9 items-center justify-center rounded-xl bg-white text-black shadow-md">
                <BrainCircuit className="size-5" aria-hidden="true" />
              </div>
              <span className="text-xl font-medium tracking-tight text-white">Nexora AI</span>
            </Link>
            <p className="mt-4 max-w-xs text-base leading-relaxed text-zinc-400 font-normal">
              {siteConfig.description}
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-zinc-400 font-normal">
              <span className="size-1.5 rounded-full bg-white" />
              <span>Intelligent Agents. Seamlessly Embedded.</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-base font-medium tracking-wide text-white">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1 text-base text-zinc-400 transition-colors hover:text-white font-normal"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/sitemap"
                  className="inline-flex items-center gap-1 text-base text-zinc-400 transition-colors hover:text-white font-normal"
                >
                  <span>HTML Sitemap</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-base font-medium tracking-wide text-white">
              Embedded Services
            </h3>
            <ul className="mt-4 space-y-3" role="list">
              <li>
                <Link
                  href="/solutions#conversational-ai"
                  className="text-base text-zinc-400 transition-colors hover:text-white font-normal"
                >
                  Conversational AI
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions#customer-support"
                  className="text-base text-zinc-400 transition-colors hover:text-white font-normal"
                >
                  Customer Support Triage
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions#knowledge-assistants"
                  className="text-base text-zinc-400 transition-colors hover:text-white font-normal"
                >
                  Enterprise Knowledge
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions#workflow-automation"
                  className="text-base text-zinc-400 transition-colors hover:text-white font-normal"
                >
                  Workflow Orchestration
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-medium tracking-wide text-white">
              Contact & Inquiry
            </h3>
            <ul className="mt-4 space-y-3" role="list">
              <li className="flex items-center gap-2.5 text-base text-zinc-400 font-normal">
                <Mail className="size-4 shrink-0 text-zinc-400" aria-hidden="true" />
                <span>{siteConfig.contact.email}</span>
              </li>
              <li className="flex items-center gap-2.5 text-base text-zinc-400 font-normal">
                <Phone className="size-4 shrink-0 text-zinc-400" aria-hidden="true" />
                <span>{siteConfig.contact.phone}</span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-zinc-500 italic font-normal">
              {siteConfig.contact.note}
            </p>
          </div>
        </div>

        <div className="my-10 h-[1px] w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        <div className="flex flex-col items-center justify-between gap-3 text-sm text-zinc-500 sm:flex-row font-normal">
          <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <Link href="/sitemap" className="transition-colors hover:text-white">
              Sitemap
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/sitemap.xml" className="transition-colors hover:text-white" target="_blank" rel="noopener noreferrer">
              XML Feed
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/robots.txt" className="transition-colors hover:text-white" target="_blank" rel="noopener noreferrer">
              Robots.txt
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
