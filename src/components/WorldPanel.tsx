import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SilhouetteArt from "./SilhouetteArt";

interface WorldPanelProps {
  world: "footwear" | "apparel";
  isHovered: boolean;
  isDimmed: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const copy = {
  footwear: {
    title: "Footwear",
    line: "Explore the collection.",
    to: "/footwear",
  },
  apparel: {
    title: "Apparel",
    line: "Explore the collection.",
    to: "/apparel",
  },
};

export default function WorldPanel({ world, isHovered, isDimmed, onHover, onLeave }: WorldPanelProps) {
  const { title, line, to } = copy[world];

  return (
    <Link
      to={to}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-obsidian px-6 py-24 md:py-0"
    >
      <div className="grain-overlay" />

      {/* Champagne backlight */}
      <motion.div
        className="absolute h-[70%] w-[70%] bg-champagne-radial"
        animate={{
          opacity: isHovered ? 0.9 : isDimmed ? 0.25 : 0.5,
          scale: isHovered ? 1.08 : 1,
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Silhouette */}
      <motion.div
        className="relative z-10"
        animate={{
          scale: isHovered ? 1.04 : 1,
          opacity: isDimmed ? 0.45 : 1,
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <SilhouetteArt
          variant={world}
          className={world === "footwear" ? "h-40 w-auto md:h-56" : "h-56 w-auto md:h-80"}
        />
      </motion.div>

      {/* Label */}
      <motion.div
        className="relative z-10 mt-10 text-center"
        animate={{ opacity: isDimmed ? 0.5 : 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2
          className={`font-display text-3xl tracking-[0.15em] transition-colors duration-500 md:text-4xl ${
            isHovered ? "text-champagne" : "text-warmWhite"
          }`}
        >
          {title.toUpperCase()}
        </h2>
        <p className="mt-3 text-xs text-warmWhite/50">{line}</p>
        <motion.span
          className="mt-5 inline-block eyebrow text-[11px] text-champagne"
          animate={{ opacity: isHovered ? 1 : 0.4, x: isHovered ? 4 : 0 }}
          transition={{ duration: 0.4 }}
        >
          Explore →
        </motion.span>
      </motion.div>
    </Link>
  );
}
