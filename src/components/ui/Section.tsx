import type { ReactNode } from "react";

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return <p className="pill mb-5 w-fit">{children}</p>;
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">
      {children}
    </h2>
  );
}

export function SectionSupport({ children }: { children: ReactNode }) {
  return (
    <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--ink-soft)] md:text-lg">
      {children}
    </p>
  );
}

export function WorldFallback({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div
      className="flex h-full min-h-[280px] w-full flex-col items-center justify-center gap-3 rounded-[2rem] bg-[linear-gradient(160deg,#f4f4f5,#e4e4e7)] p-6 text-center"
      role="img"
      aria-label={title}
    >
      <div className="h-28 w-20 rounded-[2rem] bg-[radial-gradient(circle_at_30%_25%,#fff,#a1a1aa_55%,#0a0a0a)] shadow-[var(--shadow)]" />
      <p className="text-sm font-semibold">{title}</p>
      <p className="max-w-sm text-sm text-[var(--ink-faint)]">{description}</p>
    </div>
  );
}
