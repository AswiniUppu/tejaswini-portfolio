import type { Metadata } from "next";
import { ConnectionContact } from "@/components/worlds/ConnectionContact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Tejaswini Uppu at aswinitej27@gmail.com — let's build something.",
};

export default function ContactPage() {
  return (
    <main id="main" className="pt-16">
      <ConnectionContact />
    </main>
  );
}
