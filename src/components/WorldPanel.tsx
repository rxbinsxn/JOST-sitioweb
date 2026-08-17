import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface WorldPanelProps {
  category: "footwear" | "apparel";
  image: string;
  label: string;
  to: string;
}

/**
 * Editorial hero product block for the landing page. No card, no frame —
 * the product photo floats directly on the black background with:
 *  - a soft, constantly "breathing" champagne aura behind it
 *  - a thin champagne rim-light pulsing around the product's own edges
 *  - a slow diagonal light sweep ("shimmer") that passes over it periodically,
 *    like a studio light reflection — not a game-y shine effect
 *
 * Orientation is controlled purely by container sizing so the photo itself
 * is never rotated or forced into a shape:
 *  - footwear: wide box (photo stays horizontal, as shot)
 *  - apparel: tall box (photo stays vertical, as shot)
 *
 * Sized to sit side-by-side at every breakpoint, including mobile.
 */
export default function WorldPanel({ category, image, label, to }: WorldPanelProps) {
  const [hovered, setHovered] = useState(false);
  const [errored, setErrored] = useState(false);

  const boxClass =
    category === "footwear"
      ? "w-32 sm:w-40 md:w-56"
      : "h-32 sm:h-40 md:h-56 w-auto";

  return (
    <Link
      to={to}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group flex flex-col items-center"
    >
      <div className="relative flex items-center justify-center py-6 sm:py-8">
        {/* Base aura: constant breathing, brighter now */}
        <motion.div
          className="absolute h-full w-full rounded-full bg-champagne-radial blur-2xl"
          animate={{
            opacity: [0.42, 0.75, 0.42],
            scale: [1, 1.02, 1],
            filter: ["brightness(1)", "brightness(1.18)", "brightness(1)"],
          }}
          transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Hover boost: extra glow, desktop only, purely cosmetic */}
        <motion.div
          className="absolute h-full w-full rounded-full bg-champagne-radial blur-2xl"
          animate={{ opacity: hovered ? 0.45 : 0, scale: hovered ? 1.1 : 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />

        {errored ? (
          <div
            className={`relative z-10 flex ${boxClass} aspect-square items-center justify-center border border-dashed border-champagne/20 px-4 text-center text-[10px] leading-relaxed text-warmWhite/30`}
          >
            Añade tu foto real aquí
          </div>
        ) : (
          <div className="relative overflow-hidden">
            {/* Rim light: thin pulsing champagne glow that hugs the product's silhouette */}
            <motion.img
              src={image}
              alt={label}
              onError={() => setErrored(true)}
              className={`relative z-10 ${boxClass} object-contain`}
              animate={{
                scale: hovered ? 1.04 : 1,
                filter: [
                  "drop-shadow(0 0 8px rgba(200,169,107,0.35)) drop-shadow(0 14px 24px rgba(0,0,0,0.55))",
                  "drop-shadow(0 0 20px rgba(230,211,163,0.65)) drop-shadow(0 14px 24px rgba(0,0,0,0.55))",
                  "drop-shadow(0 0 8px rgba(200,169,107,0.35)) drop-shadow(0 14px 24px rgba(0,0,0,0.55))",
                ],
              }}
              transition={{
                scale: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                filter: { duration: 3.6, repeat: Infinity, ease: "easeInOut" },
              }}
            />
            {/* Shimmer sweep: a soft diagonal light pass, like a studio reflection */}
            <motion.div
              className="pointer-events-none absolute inset-0 z-20 -skew-x-12"
              style={{
                background:
                  "linear-gradient(100deg, transparent 40%, rgba(245,242,234,0.35) 50%, transparent 60%)",
              }}
              animate={{ x: ["-140%", "140%"] }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 3.4,
              }}
            />
          </div>
        )}
      </div>

      <span
        className={`eyebrow text-xs transition-colors duration-300 ${
          hovered ? "text-champagne" : "text-warmWhite"
        }`}
      >
        {label}
      </span>
      <motion.span
        className="mt-1 eyebrow text-[9px] text-champagne"
        animate={{ opacity: hovered ? 1 : 0.35 }}
        transition={{ duration: 0.3 }}
      >
        Ver catálogo →
      </motion.span>
    </Link>
  );
}
