import { FullMenu } from "@/components/sections/FullMenu";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore Hotel Raana's menu in Thanjavur — biryani cooked with seeraga samba rice, veg & non-veg dishes, and more. Dine in or order online.",
};

export default function MenuPage() {
  return (
    <main>
      <FullMenu />
    </main>
  );
}
