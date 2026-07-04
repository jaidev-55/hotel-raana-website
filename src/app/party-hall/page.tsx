import { PartyHall } from "@/components/sections/PartyHall";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Party Hall in Thanjavur",
  description:
    "Host birthdays, corporate events, and family functions at Hotel Raana's party hall in Thanjavur, with catering from our veg & non-veg kitchen. Enquire to book your date.",
};

export default function PartyHallPage() {
  return (
    <main>
      <PartyHall />
    </main>
  );
}
