import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { OrderButtons } from "../OrderButtons";
import Image from "next/image";

const explore = [
  { label: "Menu", href: "#menu" },
  { label: "Party Hall", href: "/party-hall" },
  // { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  siteConfig.address,
)}`;

const Footer = () => {
  const year = new Date().getFullYear();

  const socials = [
    { label: "Instagram", href: siteConfig.instagram, Icon: FaInstagram },
    { label: "Facebook", href: siteConfig.facebook, Icon: FaFacebookF },
    { label: "YouTube", href: siteConfig.youtube, Icon: FaYoutube },
  ];

  return (
    <footer className="bg-[#1B1F4B] text-[#E8E4DC]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:pr-6">
            <Image
              src="/images/raanna-logo.png"
              alt="Hotel Raana"
              width={1200}
              height={300}
              className="h-auto w-40 rounded-xl"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#B7B3AC]">
              A little corner of Thanjavur where good food and warm welcomes go
              together. Come as you are — you&apos;ll leave a regular.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-[#B7B3AC]">
              <span className="text-[#C9A24B]">★</span>
              <span className="font-semibold text-white">
                {siteConfig.rating}
              </span>
              <span>· loved by {siteConfig.reviewCount} diners</span>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#C9A24B]">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {explore.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-[#B7B3AC] transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit us */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#C9A24B]">
              Come see us
            </h3>
            <div className="mt-5 space-y-4 text-sm text-[#B7B3AC]">
              <p className="leading-relaxed">{siteConfig.address}</p>
              <p>
                Open every night till 11
                <br />
                <span className="text-[#8E8A83]">
                  Lunch &amp; dinner, all week
                </span>
              </p>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-medium text-white underline decoration-[#C9A24B] underline-offset-4 transition-colors hover:text-[#C9A24B]"
              >
                Get directions
              </a>
            </div>
          </div>

          {/* Order & reach us */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#C9A24B]">
              Hungry now?
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-[#B7B3AC]">
              Give us a call to book a table or the party hall — or order in and
              let the biryani come to you.
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="block font-semibold text-white transition-colors hover:text-[#C9A24B]"
              >
                {siteConfig.phone}
              </a>
              <a
                href={`tel:${siteConfig.landline.replace(/\s/g, "")}`}
                className="block text-[#B7B3AC] transition-colors hover:text-white"
              >
                {siteConfig.landline}
              </a>
            </div>
            <OrderButtons className="mt-6 flex-col! [&>a]:w-full" />

            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-[#C9A24B] hover:bg-[#C9A24B] hover:text-[#1B1F4B]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-[#8E8A83] sm:flex-row">
          <p>
            © {year} Hotel Raana, {siteConfig.city}. Made with care — and a lot
            of biryani.
          </p>
          <p>Veg &amp; Non-veg · Dine in · Takeaway · Party Hall</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
