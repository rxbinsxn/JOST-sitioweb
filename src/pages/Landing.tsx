import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/brand/JOST-logo.png";
import WorldPanel from "../components/WorldPanel";
import { FOOTWEAR_IMAGE, APPAREL_IMAGE } from "../config/heroImages";
import { buildGeneralWhatsappLink } from "../utils/whatsapp";

const whyJost = [
  {
    title: "Top Quality Selection",
    line: "Every piece is carefully selected to match the JOST aesthetic.",
    icon: (
      <path
        d="M12 3l2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "WhatsApp Orders",
    line: "Choose your pair and place your order directly through WhatsApp.",
    icon: (
      <path
        d="M4 20l1.4-4A8 8 0 1112 20a8 8 0 01-4-1.1z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Curated Style",
    line: "Modern silhouettes selected for a clean, confident look.",
    icon: (
      <path
        d="M12 3l1.8 5.6H19l-4.6 3.4 1.8 5.6-4.2-3.4-4.2 3.4 1.8-5.6L5 8.6h5.2z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Direct Support",
    line: "Have a question? Our team is ready to assist you.",
    icon: (
      <path
        d="M12 3v0a9 9 0 019 9v5a2 2 0 01-2 2h-1v-7a6 6 0 00-12 0v7H5a2 2 0 01-2-2v-5a9 9 0 019-9z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function Landing() {
  return (
    <div className="relative flex min-h-[calc(100vh-0px)] flex-col items-center overflow-hidden px-6 pb-16 pt-10 md:pt-14">
      <div className="grain-overlay" />

      {/* Hero: big logo + headline */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <img src={logo} alt="JOST" className="h-28 w-auto opacity-95 sm:h-32 md:h-36" />
        <h1 className="mt-6 max-w-xs font-display text-2xl leading-snug text-warmWhite md:max-w-md md:text-3xl">
          Wear the Legacy.
        </h1>
        <p className="mt-3 max-w-xs text-xs text-warmWhite/40 md:max-w-sm">
          Top Quality sneakers and streetwear. Choose your pair and order
          instantly through WhatsApp.
        </p>
        <p className="mt-4 eyebrow text-[9px] text-warmWhite/30">
          Top Quality • Fast replies • WhatsApp orders
        </p>
      </motion.div>

      {/* Explore the Collection: small heading above the two category panels */}
      <motion.div
        className="relative z-10 mt-14 text-center md:mt-20"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="font-display text-xl text-warmWhite md:text-2xl">
          Explore the Collection
        </h2>
        <p className="mt-2 max-w-xs text-xs text-warmWhite/40 md:max-w-sm">
          Top Quality pieces selected for your everyday statement.
        </p>
      </motion.div>

      {/* Products: identical footprint for both, so the row reads as perfectly
          balanced and centered regardless of each photo's aspect ratio */}
      <motion.div
        className="relative z-10 mt-8 grid w-full max-w-xs grid-cols-2 gap-6 sm:mt-10 sm:max-w-sm sm:gap-10 md:mt-12 md:max-w-xl md:gap-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.25 }}
      >
        <div className="flex justify-center">
          <WorldPanel
            category="footwear"
            image={FOOTWEAR_IMAGE}
            label="Sneakers"
            line="Top Quality pairs selected for everyday wear."
            ctaLabel="Explore Sneakers"
            to="/footwear"
          />
        </div>
        <div className="flex justify-center">
          <WorldPanel
            category="apparel"
            image={APPAREL_IMAGE}
            label="Clothing"
            line="Top Quality essentials with a clean silhouette."
            ctaLabel="Explore Clothing"
            to="/apparel"
          />
        </div>
      </motion.div>

      {/* Search — visual only for now, ready to wire to real search later */}
      <motion.div
        className="relative z-10 mt-16 w-full max-w-sm md:mt-20"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="flex items-center gap-3 border border-champagne/15 bg-white/[0.02] px-4 py-3 backdrop-blur-sm transition-colors focus-within:border-champagne/40">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0 text-warmWhite/40">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.4" />
            <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            placeholder="Search products..."
            className="w-full bg-transparent text-xs text-warmWhite placeholder:text-warmWhite/30 focus:outline-none"
          />
        </div>
      </motion.div>

      {/* Quick links: minimal line icons, lots of negative space */}
      <motion.div
        className="relative z-10 mt-8 flex items-center gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.55 }}
      >
        <Link
          to="/new-arrivals"
          className="flex flex-col items-center gap-2 text-warmWhite/40 transition-colors hover:text-champagne"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 3l1.8 5.6H19l-4.6 3.4 1.8 5.6-4.2-3.4-4.2 3.4 1.8-5.6L5 8.6h5.2z"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
          </svg>
          <span className="eyebrow text-[9px]">New Arrivals</span>
        </Link>
        <Link
          to="/footwear"
          className="flex flex-col items-center gap-2 text-warmWhite/40 transition-colors hover:text-champagne"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M4 17l4-8 4 5 3-4 5 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="eyebrow text-[9px]">Best Sellers</span>
        </Link>
        <Link
          to="/collections"
          className="flex flex-col items-center gap-2 text-warmWhite/40 transition-colors hover:text-champagne"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 3l2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5z"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
          </svg>
          <span className="eyebrow text-[9px]">Exclusives</span>
        </Link>
      </motion.div>

      {/* Why JOST */}
      <motion.div
        className="relative z-10 mt-24 w-full max-w-3xl text-center md:mt-32"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="eyebrow text-xs text-champagne">Why JOST</span>
        <h2 className="mt-3 font-display text-2xl text-warmWhite md:text-3xl">
          More than a look. It's a statement.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
          {whyJost.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-champagne">
                {item.icon}
              </svg>
              <h3 className="mt-4 eyebrow text-[11px] text-warmWhite">{item.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-warmWhite/40">{item.line}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Final CTA */}
      <motion.div
        className="relative z-10 mt-24 w-full max-w-md text-center md:mt-32"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="font-display text-2xl text-warmWhite md:text-3xl">Find Your Pair.</h2>
        <p className="mt-3 text-xs text-warmWhite/40">
          Explore the Top Quality collection and find the piece that fits your style.
        </p>
        <a
          href={buildGeneralWhatsappLink()}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block border border-champagne px-8 py-3 eyebrow text-[11px] text-champagne transition-all hover:bg-champagne hover:text-obsidian"
        >
          Chat on WhatsApp
        </a>
      </motion.div>
    </div>
  );
}
