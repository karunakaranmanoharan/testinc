"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Container from "./Container";
import { cn } from "../lib/cn";

const links = [
  { href: "/", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#insights", label: "Insights" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn(
      "fixed inset-x-0 top-0 z-50 transition-shadow",
      elevated ? "shadow-sm bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:bg-black/40" : "bg-transparent"
    )}>
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="font-semibold tracking-tight text-xl">Donyati</Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        <button aria-label="Toggle menu" className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-zinc-200 dark:border-zinc-800" onClick={() => setOpen((v) => !v)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-black/60 backdrop-blur">
          <Container className="py-4 grid gap-2">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="py-2 text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}
