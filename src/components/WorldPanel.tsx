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
 * the product photo floats directly on the black background with a soft,
 * slowly "breathing" champagne/chrome aura behind it. Tap navigates on
 * mobile regardless of hover state; hover only adds a cosmetic boost on
 * desktop.
 *
 * Orientation is controlled purely by container sizing so the photo itself
 * is never rotated or forced into a shape:
 *  - footwear: wide box (photo stays horizontal, as shot)
 *  - apparel: tall box (photo stays vertical, as shot)
 */
export default function WorldPanel({ category, image, label, to }: WorldPanelProps) {
  const [hovered, setHovered] = useState(false);
  const [errored, setErrored] = useState(false);

  const boxClass =
    category === "footwear"
      ? "w-40 sm:w-48 md:w-56"
      : "h-40 sm:h-48 md:h-56 w-auto";

  return (
    <Link
      to={to}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group flex flex-col items-center"
    >
      <div className="relative flex items-center justify-center py-8">
        {/* Base aura: slow constant breathing, always on */}
        <motion.div
          className="absolute h-full w-full rounded-full bg-champagne-radial blur-2xl"
          animate={{
            opacity: [0.32, 0.58, 0.32],
            scale: [1, 1.015, 1],
            filter: ["brightness(1)", "brightness(1.1)", "brightness(1)"],
          }}
          transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Hover boost: extra glow, desktop only, purely cosmetic */}
        <motion.div
          className="absolute h-full w-full rounded-full bg-champagne-radial blur-2xl"
          animate={{ opacity: hovered ? 0.35 : 0, scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />

        {errored ? (
          <div
            className={`relative z-10 flex ${boxClass} aspect-square items-center justify-center border border-dashed border-champagne/20 px-4 text-center text-[10px] leading-relaxed text-warmWhite/30`}
          >
            Añade tu foto real aquí
          </div>
        ) : (
          <motion.img
            src={image}
            alt={label}
            onError={() => setErrored(true)}
            className={`relative z-10 ${boxClass} object-contain drop-shadow-[0_14px_28px_rgba(0,0,0,0.55)]`}
            animate={{ scale: hovered ? 1.035 : 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
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
