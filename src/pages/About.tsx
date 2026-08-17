import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="relative overflow-hidden px-6 py-24 md:px-10 md:py-32">
      <div className="grain-overlay" />
      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 bg-champagne-radial opacity-20" />
      <motion.div
        className="relative z-10 mx-auto max-w-2xl text-center"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="eyebrow text-xs text-champagne">About JOST</span>
        <h1 className="mt-5 font-display text-4xl text-warmWhite md:text-5xl">
          Made to be remembered.
        </h1>
        <p className="mt-8 text-sm leading-relaxed text-warmWhite/50">
          JOST is a premium streetwear curator based in Poland, serving a European
          audience that values restraint over noise. We don't manufacture — we select.
          Every product in our catalog is sourced directly from established, trusted
          brands and chosen against a single question: does this earn its place in a
          considered wardrobe.
        </p>
        <p className="mt-6 text-sm leading-relaxed text-warmWhite/50">
          Footwear and apparel are curated as two disciplines under one identity,
          shipped from Poland across the European Union.
        </p>
        <p className="mt-6 text-sm leading-relaxed text-warmWhite/50">
          We deal only in the best quality the market has to offer — nothing less
          earns a place in our catalog. That same standard carries through the
          entire experience: attentive, considered, fast to respond, from your
          first message to the moment your order arrives. It's what makes JOST
          the best in Poland for premium streetwear.
        </p>
      </motion.div>
    </div>
  );
}
