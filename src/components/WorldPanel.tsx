import { useState } from "react";
import type { CSSProperties } from "react";
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
 * the product photo floats directly on the black background.
 *
 * The glow is built two ways, both of which follow the PNG's own alpha
 * silhouette instead of a generic rectangle/circle behind it:
 *  1. A layered drop-shadow() filter animated on the <img> itself — since
 *     drop-shadow blurs the alpha channel, it naturally hugs the exact
 *     contour of the product, not a bounding box.
 *  2. A shimmer sweep clipped with a CSS mask built from that same image,
 *     so the light pass only shows inside the product's silhouette.
 *
 * IMPORTANT: this only reads as "hugging the product" if the source PNG has
 * a transparent background. With an opaque background the alpha channel is
 * a full rectangle, so the glow will still look square — remove the
 * background from footwear-hero.png / apparel-hero.png first.
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

  const boxClass = "h-32 w-32 sm:h-40 sm:w-40 md:h-56 md:w-56";

  const maskStyle: CSSProperties = {
    WebkitMaskImage: `url(${image})`,
    maskImage: `url(${image})`,
    WebkitMaskSize: "contain",
    maskSize: "contain",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    maskPosition: "center",
  };

  return (
    <Link
      to={to}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group flex flex-col items-center"
    >
      <div className="relative flex items-center justify-center py-6 sm:py-8">
        {errored ? (
          <div
            className={`relative z-10 flex ${boxClass} aspect-square items-center justify-center border border-dashed border-champagne/20 px-4 text-center text-[10px] leading-relaxed text-warmWhite/30`}
          >
            Add your real photo here
          </div>
        ) : (
          <div className={`relative ${boxClass}`}>
            {/* Glow: layered drop-shadow, hugs the PNG's own alpha silhouette */}
            <motion.img
              src={image}
              alt={label}
              onError={() => setErrored(true)}
              className="relative z-10 h-full w-full object-contain"
              animate={{
                scale: hovered ? 1.04 : 1,
                filter: hovered
                  ? [
                      "drop-shadow(0 0 10px rgba(200,169,107,0.7)) drop-shadow(0 0 26px rgba(230,211,163,0.55)) drop-shadow(0 14px 22px rgba(0,0,0,0.55))",
                      "drop-shadow(0 0 16px rgba(200,169,107,0.85)) drop-shadow(0 0 38px rgba(230,211,163,0.7)) drop-shadow(0 14px 22px rgba(0,0,0,0.55))",
                      "drop-shadow(0 0 10px rgba(200,169,107,0.7)) drop-shadow(0 0 26px rgba(230,211,163,0.55)) drop-shadow(0 14px 22px rgba(0,0,0,0.55))",
                    ]
                  : [
                      "drop-shadow(0 0 6px rgba(200,169,107,0.4)) drop-shadow(0 0 16px rgba(230,211,163,0.3)) drop-shadow(0 14px 22px rgba(0,0,0,0.55))",
                      "drop-shadow(0 0 12px rgba(200,169,107,0.65)) drop-shadow(0 0 28px rgba(230,211,163,0.5)) drop-shadow(0 14px 22px rgba(0,0,0,0.55))",
                      "drop-shadow(0 0 6px rgba(200,169,107,0.4)) drop-shadow(0 0 16px rgba(230,211,163,0.3)) drop-shadow(0 14px 22px rgba(0,0,0,0.55))",
                    ],
              }}
              transition={{
                scale: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                filter: { duration: 3.6, repeat: Infinity, ease: "easeInOut" },
              }}
            />

            {/* Shimmer sweep, masked to the same silhouette so it never reads as a rectangle */}
            <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden" style={maskStyle}>
              <motion.div
                className="absolute inset-0 -skew-x-12"
                style={{
                  background:
                    "linear-gradient(100deg, transparent 40%, rgba(245,242,234,0.45) 50%, transparent 60%)",
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
        View catalog →
      </motion.span>
    </Link>
  );
}
