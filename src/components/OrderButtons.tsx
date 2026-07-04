import { siteConfig } from "@/lib/site-config";

export function OrderButtons({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "md" | "lg";
}) {
  const pad = size === "lg" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm";
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <a
        href={siteConfig.swiggy}
        target="_blank"
        rel="noopener noreferrer"
        className={`rounded-full bg-[#FC8019] text-center font-semibold text-white shadow-md transition-opacity hover:opacity-90 ${pad}`}
      >
        Order on Swiggy
      </a>
      <a
        href={siteConfig.zomato}
        target="_blank"
        rel="noopener noreferrer"
        className={`rounded-full bg-[#E23744] text-center font-semibold text-white shadow-md transition-opacity hover:opacity-90 ${pad}`}
      >
        Order on Zomato
      </a>
    </div>
  );
}