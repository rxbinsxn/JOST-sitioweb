import { useState } from "react";
import { motion } from "framer-motion";
import WorldPanel from "../components/WorldPanel";
import logo from "../assets/brand/JOST-logo.png";

type Hovered = "footwear" | "apparel" | null;

export default function Landing() {
  const [hovered, setHovered] = useState<Hovered>(null);

  return (
    <div className="relative flex min-h-[calc(100vh-0px)] flex-col">
      {/* Intro: logo + prompt */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-4 px-6 pb-10 pt-16 text-center md:pb-14 md:pt-20"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      >
        <img src={logo} alt="JOST" className="h-16 w-auto opacity-95 md:h-20" />
        <motion.h1
          className="mt-2 eyebrow text-sm text-warmWhite md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          Choose Your World
        </motion.h1>
        <motion.p
          className="text-xs text-warmWhite/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.7 }}
        >
          Discover JOST.
        </motion.p>
      </motion.div>

      {/* Two worlds */}
      <motion.div
        className="relative flex flex-1 flex-col md:flex-row"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="hidden w-px bg-champagne/10 md:block" />
        <div className="min-h-[70vh] flex-1 md:min-h-[75vh]">
          <WorldPanel
            world="footwear"
            isHovered={hovered === "footwear"}
            isDimmed={hovered === "apparel"}
            onHover={() => setHovered("footwear")}
            onLeave={() => setHovered(null)}
          />
        </div>
        <div className="min-h-[70vh] flex-1 border-t border-champagne/10 md:min-h-[75vh] md:border-l md:border-t-0">
          <WorldPanel
            world="apparel"
            isHovered={hovered === "apparel"}
            isDimmed={hovered === "footwear"}
            onHover={() => setHovered("apparel")}
            onLeave={() => setHovered(null)}
          />
        </div>
      </motion.div>
    </div>
  );
}
