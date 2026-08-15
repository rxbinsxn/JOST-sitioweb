import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { storeConfig } from "../config/store";
import { buildWhatsappLink } from "../utils/whatsapp";
import ProductImage from "./ProductImage";

function formatPrice(value: number, currency: string) {
  return new Intl.NumberFormat(storeConfig.locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(value);
}

export default function BagDrawer() {
  const { items, isOpen, closeBag, updateQuantity, removeItem, total } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeBag}
          />
          <motion.aside
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-charcoal shadow-gold"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between border-b border-champagne/10 px-6 py-5">
              <span className="eyebrow text-xs text-champagne">Your Bag</span>
              <button
                onClick={closeBag}
                aria-label="Close bag"
                className="text-warmWhite/60 hover:text-champagne"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.4" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              {items.length === 0 ? (
                <p className="mt-10 text-center text-sm text-warmWhite/40">
                  Your bag is empty.
                </p>
              ) : (
                <ul className="space-y-6">
                  {items.map((item) => (
                    <li key={item.key} className="flex gap-4">
                      <div className="h-24 w-20 shrink-0 overflow-hidden bg-obsidian">
                        <ProductImage
                          src={item.image}
                          alt={item.name}
                          category={item.image.includes("footwear") ? "footwear" : "apparel"}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="text-sm text-warmWhite">{item.name}</p>
                            <p className="mt-1 text-xs text-warmWhite/40">
                              {item.color} · {item.size}
                            </p>
                          </div>
                          <button
                            onClick={() => removeItem(item.key)}
                            aria-label="Remove item"
                            className="text-warmWhite/30 hover:text-burgundy"
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.4" />
                            </svg>
                          </button>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center border border-champagne/20">
                            <button
                              className="px-2 py-1 text-warmWhite/60 hover:text-champagne"
                              onClick={() => updateQuantity(item.key, item.quantity - 1)}
                              aria-label="Decrease quantity"
                            >
                              −
                            </button>
                            <span className="w-8 text-center text-xs text-warmWhite">
                              {item.quantity}
                            </span>
                            <button
                              className="px-2 py-1 text-warmWhite/60 hover:text-champagne"
                              onClick={() => updateQuantity(item.key, item.quantity + 1)}
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>
                          <span className="text-sm text-champagne">
                            {formatPrice(item.price * item.quantity, item.currency)}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-champagne/10 px-6 py-6">
                <div className="mb-5 flex items-center justify-between text-sm">
                  <span className="text-warmWhite/50">Estimated total</span>
                  <span className="text-lg text-champagne">
                    {formatPrice(total, items[0]?.currency ?? storeConfig.currency)}
                  </span>
                </div>
                <a
                  href={buildWhatsappLink(items)}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full border border-champagne bg-champagne py-3 text-center eyebrow text-[11px] text-obsidian transition-all hover:bg-transparent hover:text-champagne"
                >
                  Order via WhatsApp
                </a>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
