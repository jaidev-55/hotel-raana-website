import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact & Location",
  description:
    "Find Hotel Raana in Thanjavur — address, phone, opening hours, and directions. Call or message us to book a table or the party hall.",
};

export default function ContactPage() {
  return (
    <main>
      <Contact />
    </main>
  );
}
