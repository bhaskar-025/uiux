"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, BrainCircuit, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { navLinks } from "@/lib/navigation";
import { cn } from "cn";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-black/85 backdrop-blur-md border-b border-zinc-800/80 shadow-[0_4px_30px_rgba(0,0,0,0.9)]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-white transition-opacity hover:opacity-90"
          aria-label="Nexora AI — Home"
        >
          <div className="flex size-8 items-center justify-center rounded-lg bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            <BrainCircuit className="size-5" aria-hidden="true" />
          </div>
          <span className="text-lg font-medium tracking-tight text-white">Nexora AI</span>
        </Link>

        {/* Live Status indicator */}
        <div className="hidden lg:flex items-center gap-2.5 px-3.5 py-1 rounded-full text-sm font-normal bg-gradient-to-r from-zinc-900 to-zinc-950 border border-zinc-800 text-zinc-300">
          <span className="relative flex size-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full size-2 bg-white" />
          </span>
          <span>Embedded Agents</span>
        </div>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex" role="list">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative rounded-md px-4 py-2 text-base font-normal transition-all duration-200",
                    isActive
                      ? "text-white font-medium"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900/60"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute inset-x-4 bottom-0 h-[2px] bg-white rounded-full transition-all" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button asChild size="sm" className="font-medium shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all">
            <Link href="/contact">
              <span>Book a Consultation</span>
              <ArrowUpRight className="ml-1 size-3.5" aria-hidden="true" />
            </Link>
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden border-zinc-800 bg-zinc-950 text-white hover:border-zinc-500"
              aria-label="Open navigation menu"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 border-l border-zinc-800 bg-black p-6 text-white">
            <SheetTitle className="flex items-center gap-2.5 pt-2">
              <div className="flex size-7 items-center justify-center rounded-md bg-white text-black">
                <BrainCircuit className="size-4" aria-hidden="true" />
              </div>
              <span className="font-medium text-white text-lg tracking-tight">Nexora AI</span>
            </SheetTitle>
            <nav aria-label="Mobile navigation" className="mt-8 flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center justify-between rounded-lg px-3.5 py-3 text-sm font-normal transition-colors",
                        isActive
                          ? "bg-zinc-900 text-white font-medium border border-zinc-700"
                          : "text-zinc-400 hover:bg-zinc-900/60 hover:text-white"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="size-3.5 text-zinc-500" />
                    </Link>
                  </SheetClose>
                );
              })}
              <div className="mt-6 pt-4 border-t border-zinc-900">
                <SheetClose asChild>
                  <Button asChild className="w-full justify-center font-medium">
                    <Link href="/contact">Book a Consultation</Link>
                  </Button>
                </SheetClose>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
