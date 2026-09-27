import Link from "next/link";
import { Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export function SkipNav() {
  return (
    <a
      href="#main"
      className="focus-ring sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[var(--ink)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
    >
      Skip to content
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer className="px-5 pb-10 md:px-10">
      <div className="surface-dark mx-auto flex max-w-6xl flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-10">
        <div>
          <p className="text-2xl font-semibold tracking-tight md:text-3xl">
            Let&apos;s build something real.
          </p>
          <p className="mt-2 text-sm text-white/70">
            Tejaswini Uppu · Full-Stack Engineer · Hyderabad, India
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile (opens in a new tab)"
            className="focus-ring inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-4 text-sm font-medium text-white transition hover:bg-white hover:text-black"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile (opens in a new tab)"
            className="focus-ring inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-4 text-sm font-medium text-white transition hover:bg-white hover:text-black"
          >
            GitHub
          </a>
          <Link
            href={"mailto:" + profile.email}
            className="cta-secondary focus-ring !min-h-12 !min-w-44 !border-white !bg-white !px-6 !py-3 !text-sm !text-black hover:!bg-transparent hover:!text-white"
            style={{ color: "#0a0a0a" }}
          >
            <Mail size={16} aria-hidden="true" />
            <span>Send an email</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
