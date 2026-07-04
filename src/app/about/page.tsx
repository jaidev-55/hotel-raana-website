import type { Metadata } from "next";
import About from "@/components/sections/About";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story behind Hotel Raana in Thanjavur — slow-cooked biryani, veg & non-veg dishes made with care, and a warm welcome every time.",
};

export default function AboutPage() {
  return (
    <main className="pt-20">
      <About />
    </main>
  );
}
