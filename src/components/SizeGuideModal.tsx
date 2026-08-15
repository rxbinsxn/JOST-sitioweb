import { AnimatePresence, motion } from "framer-motion";
import type { Product } from "../types/product";

interface SizeGuideModalProps {
  product: Product;
  open: boolean;
  onClose: () => void;
}

export default function SizeGuideModal({ product, open, onClose }: SizeGuideModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed left-1/2 top-1/2 z-50 w-[92%] max-w-lg -translate-x-1/2 -translate-y-1/2 border border-champagne/20 bg-charcoal p-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6 flex items-center justify-between">
              <span className="eyebrow text-xs text-champagne">Size Guide</span>
              <button onClick={onClose} className="text-warmWhite/60 hover:text-champagne">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.4" />
                </svg>
              </button>
            </div>

            {product.category === "footwear" ? (
              <div>
                <p className="mb-4 text-xs text-warmWhite/50">
                  All measurements in EU sizing. Runs true to size.
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {product.sizes.map((size) => (
                    <div
                      key={size}
                      className="border border-champagne/10 py-3 text-center text-sm text-warmWhite/70"
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="eyebrow text-[10px] text-champagne">
                    <th className="pb-3">Size</th>
                    <th className="pb-3">Chest (cm)</th>
                    <th className="pb-3">Length (cm)</th>
                  </tr>
                </thead>
                <tbody>
                  {product.sizes.map((size) => {
                    const row = product.sizeGuide?.[size];
                    return (
                      <tr key={size} className="border-t border-champagne/10 text-warmWhite/70">
                        <td className="py-3">{size}</td>
                        <td className="py-3">{row?.chest_cm ?? "—"}</td>
                        <td className="py-3">{row?.length_cm ?? "—"}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
