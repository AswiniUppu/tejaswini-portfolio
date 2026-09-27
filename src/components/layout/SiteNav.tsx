"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navDesktop, navMobile } from "@/data/portfolio";

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled || open ?
          "border-b border-[var(--border)] bg-white/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link
          href="/#core"
          className="focus-ring text-lg font-semibold tracking-tight"
          onClick={() => setOpen(false)}
        >
          tejaswini<span className="text-[var(--ink-faint)]">.</span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          {navDesktop.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={`focus-ring rounded-full px-3 py-2 text-sm font-medium transition hover:text-[var(--ink)] ${pathname === item.href ? "bg-[var(--bg-soft)] text-[var(--ink)]" : "text-[var(--ink-soft)]"}`}
            >
              {item.label.charAt(0) + item.label.slice(1).toLowerCase()}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="cta-primary focus-ring !min-h-10 !px-5 !text-sm"
            data-cursor="interactive"
          >
            Contact
            <ArrowUpRight size={16} aria-hidden />
          </Link>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white p-2 lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
        </button>
      </div>

    </header>
    {open ? (
      <div
        id={menuId}
        className="fixed inset-x-0 bottom-0 top-[69px] z-[60] overflow-y-auto overscroll-contain bg-white lg:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <nav className="flex min-h-full flex-col justify-center gap-1 px-6 py-5 sm:px-8">
          {navMobile.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={`focus-ring border-b border-[var(--border)] py-3 text-xl font-semibold tracking-tight sm:text-2xl ${pathname === item.href ? "text-[var(--ink)]" : "text-[var(--ink-soft)]"}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="cta-primary focus-ring mt-4"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    ) : null}
    </>
  );
}
