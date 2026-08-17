import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import productsData from "../data/products.json";
import type { Product, ProductCategory } from "../types/product";
import ProductCard from "../components/ProductCard";

const products = productsData as Product[];

const filterConfig: Record<ProductCategory, { label: string; value: string | null }[]> = {
  footwear: [
    { label: "All", value: null },
    { label: "New Arrivals", value: "new" },
    { label: "Sneakers", value: "sneakers" },
    { label: "Best Sellers", value: "best-sellers" },
  ],
  apparel: [
    { label: "All", value: null },
    { label: "T-Shirts", value: "t-shirts" },
    { label: "Hoodies", value: "hoodies" },
    { label: "Sweatshirts", value: "sweatshirts" },
    { label: "Jackets", value: "jackets" },
    { label: "Pants", value: "pants" },
    { label: "New Arrivals", value: "new" },
  ],
};

const heroCopy: Record<ProductCategory, { eyebrow: string; title: string; line: string }> = {
  footwear: {
    eyebrow: "Footwear",
    title: "The best brands are here.",
    line: "A curated edit of premium sneakers, sourced from names you already trust.",
  },
  apparel: {
    eyebrow: "Apparel",
    title: "Only the labels worth wearing.",
    line: "Premium apparel from established brands, curated for a considered wardrobe.",
  },
};

export default function Catalog({ category }: { category: ProductCategory }) {
  const [active, setActive] = useState<string | null>(null);
  const filters = filterConfig[category];
  const hero = heroCopy[category];

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (p.category !== category) return false;
      if (active === null) return true;
      if (active === "new") return p.newArrival;
      return p.subcategory === active;
    });
  }, [category, active]);

  return (
    <div>
      <section className="relative overflow-hidden border-b border-champagne/10 px-6 py-20 md:px-10 md:py-28">
        <div className="grain-overlay" />
        <div className="absolute -right-20 top-1/2 h-64 w-64 -translate-y-1/2 bg-champagne-radial opacity-30" />
        <motion.div
          className="relative z-10 max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow text-xs text-champagne">{hero.eyebrow}</span>
          <h1 className="mt-4 font-display text-4xl text-warmWhite md:text-5xl">{hero.title}</h1>
          <p className="mt-4 text-sm text-warmWhite/50">{hero.line}</p>
        </motion.div>
      </section>

      <section className="px-6 py-12 md:px-10">
        <div className="mb-10 flex flex-wrap gap-6">
          {filters.map((f) => (
            <button
              key={f.label}
              onClick={() => setActive(f.value)}
              className={`eyebrow text-[11px] transition-colors ${
                active === f.value ? "text-champagne" : "text-warmWhite/40 hover:text-warmWhite/70"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="py-20 text-center text-sm text-warmWhite/40">
            No products in this selection yet.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-8 lg:grid-cols-4">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
