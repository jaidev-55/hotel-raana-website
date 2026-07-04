import type { Metadata } from "next";
import { Gallery } from "@/components/sections/Gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A look inside Hotel Raana, Thanjavur — our biryani and dishes, the dining space, and celebrations at our party hall.",
};

export default function GalleryPage() {
  return (
    <main>
      <Gallery />
    </main>
  );
}
