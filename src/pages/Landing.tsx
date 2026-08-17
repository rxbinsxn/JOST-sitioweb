import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/brand/JOST-logo.png";
import WorldPanel from "../components/WorldPanel";
import { FOOTWEAR_IMAGE, APPAREL_IMAGE } from "../config/heroImages";

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
        <img src={logo} alt="JOST" className="h-20 w-auto opacity-95 sm:h-24 md:h-28" />
        <h1 className="mt-6 max-w-xs font-display text-2xl leading-snug text-warmWhite md:max-w-md md:text-3xl">
          What's missing from your style?
        </h1>
        <p className="mt-3 eyebrow text-[10px] text-champagne">Welcome to JOST</p>
        <p className="mt-2 max-w-xs text-xs text-warmWhite/40 md:max-w-sm">
          Discover our catalog and find your next look.
        </p>
      </motion.div>

      {/* Products: identical footprint for both, so the row reads as perfectly
          balanced and centered regardless of each photo's aspect ratio */}
      <motion.div
        className="relative z-10 mt-12 grid w-full max-w-xs grid-cols-2 gap-6 sm:mt-16 sm:max-w-sm sm:gap-10 md:mt-20 md:max-w-xl md:gap-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        <div className="flex justify-center">
          <WorldPanel category="footwear" image={FOOTWEAR_IMAGE} label="Sneakers" to="/footwear" />
        </div>
        <div className="flex justify-center">
          <WorldPanel category="apparel" image={APPAREL_IMAGE} label="Clothing" to="/apparel" />
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
    </div>
  );
}
