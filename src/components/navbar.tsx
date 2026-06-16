"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/schedule", label: "Schedule" },
  { href: "/roster", label: "Roster" },
  { href: "/stats", label: "Stats" },
  { href: "/standings", label: "Standings" },
  { href: "/news", label: "News" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-[#5A1414] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-8 h-16">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight shrink-0">
          <span className="text-[#FFB612] text-2xl">⚔️</span>
          <span>Commanders</span>
          <span className="text-[#FFB612]">Hub</span>
        </Link>
        <div className="flex items-center gap-1 overflow-x-auto">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-3 py-1.5 rounded text-sm font-medium whitespace-nowrap transition-colors ${
                pathname === href
                  ? "bg-[#FFB612] text-[#5A1414]"
                  : "hover:bg-white/10"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
