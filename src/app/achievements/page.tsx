import type { Metadata } from "next";
import Link from "next/link";
import { ImpactAwards } from "@/components/worlds/ImpactAwards";

export const metadata: Metadata = {
  title: "Achievements",
  description: "Recognition earned by Tejaswini Uppu through engineering, teamwork, and project delivery.",
};

export default function AchievementsPage() {
  return (
    <main id="main" className="pt-16">
      <ImpactAwards />
      <div className="mx-auto flex max-w-6xl flex-wrap gap-3 px-5 pb-20 md:px-10">
        <Link href="/experience" className="cta-primary focus-ring">See the work behind them</Link>
        <Link href="/contact" className="cta-secondary focus-ring">Get in touch</Link>
      </div>
    </main>
  );
}
