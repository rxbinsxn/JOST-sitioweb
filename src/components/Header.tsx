import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { storeConfig } from "../config/store";

const navLinks = [
  { label: "Footwear", to: "/footwear" },
  { label: "Apparel", to: "/apparel" },
  { label: "New Arrivals", to: "/new-arrivals" },
  { label: "Collections", to: "/collections" },
  { label: "About", to: "/about" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-500 ${
        scrolled ? "bg-obsidian/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="hairline" />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link
          to="/"
          className="font-display text-2xl tracking-[0.3em] text-warmWhite hover:text-champagne transition-colors"
        >
          {storeConfig.brandName}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `eyebrow text-[11px] transition-colors hover:text-champagne ${
                  isActive ? "text-champagne" : "text-warmWhite/70"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <button
            className="hidden eyebrow text-[11px] text-warmWhite/70 transition-colors hover:text-champagne md:block"
            aria-label="Search"
          >
            Search
          </button>
          <button
            className="text-warmWhite/70 hover:text-champagne md:hidden"
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-champagne/10 bg-obsidian px-6 pb-6 pt-2 md:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `eyebrow py-3 text-[12px] transition-colors ${
                  isActive ? "text-champagne" : "text-warmWhite/70"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
