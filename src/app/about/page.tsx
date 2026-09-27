import type { Metadata } from "next";
import Link from "next/link";
import { about, profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Tejaswini Uppu — full-stack engineer focused on React, TypeScript, AI interfaces, and production systems.",
};

export default function AboutPage() {
  return (
    <main id="main" className="world-section mx-auto max-w-3xl pt-28">
      <p className="pill w-fit">About</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
        {about.heading}
      </h1>
      <p className="mt-4 text-[var(--ink-soft)]">
        {profile.name} · {profile.role} · {profile.location}
      </p>
      <div className="mt-10 space-y-5">
        {about.paragraphs.map((p) => (
          <p key={p} className="text-lg leading-relaxed text-[var(--ink-soft)]">
            {p}
          </p>
        ))}
      </div>
      <Link href="/#contact" className="cta-primary focus-ring mt-10 inline-flex">
        Let&apos;s connect
      </Link>
    </main>
  );
}
