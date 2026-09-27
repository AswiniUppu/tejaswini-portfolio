"use client";

import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import {
  SectionEyebrow,
  SectionHeading,
  SectionSupport,
} from "@/components/ui/Section";

export function ConnectionContact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    let ok = false;
    try {
      await navigator.clipboard.writeText(profile.email);
      ok = true;
    } catch {
      try {
        const el = document.createElement("textarea");
        el.value = profile.email;
        el.setAttribute("readonly", "");
        el.style.position = "fixed";
        el.style.left = "-9999px";
        document.body.appendChild(el);
        el.select();
        ok = document.execCommand("copy");
        document.body.removeChild(el);
      } catch {
        ok = false;
      }
    }
    if (ok) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section
      id="contact"
      className="world-section"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow>06 · Connection</SectionEyebrow>
        <SectionHeading>
          <span id="contact-heading">Let&apos;s build something</span>
        </SectionHeading>
        <SectionSupport>
          Reach out by email, or connect with me on LinkedIn and GitHub.
        </SectionSupport>

        <div className="surface-card mt-10 max-w-3xl p-6 md:p-8">
          <div className="mb-6 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--ink)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--ink-faint)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--bg-muted)]" />
            <span className="mono-label ml-3">contact.sh</span>
          </div>
          <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--ink-faint)]">
            $ whoami
          </p>
          <p className="mt-2 font-[family-name:var(--font-mono)] text-[var(--ink)]">
            {profile.name} — {profile.role}
          </p>
          <p className="mt-6 font-[family-name:var(--font-mono)] text-sm text-[var(--ink-faint)]">
            $ echo $EMAIL
          </p>
          <p className="mt-2 break-all font-[family-name:var(--font-mono)] text-lg">
            {profile.email}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="cta-primary focus-ring"
              data-cursor="interactive"
            >
              <Mail size={16} aria-hidden />
              Send email
            </a>
            <button
              type="button"
              className="cta-secondary focus-ring"
              data-cursor="interactive"
              onClick={copyEmail}
              aria-live="polite"
            >
              {copied ? (
                <>
                  <Check size={16} aria-hidden />
                  Email copied
                </>
              ) : (
                <>
                  <Copy size={16} aria-hidden />
                  Copy email
                </>
              )}
            </button>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 border-t border-[var(--border)] pt-5">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="cta-secondary focus-ring"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="cta-secondary focus-ring"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
