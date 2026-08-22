import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import productsData from "../data/products.json";
import type { Product } from "../types/product";
import { formatPrice } from "../utils/formatPrice";
import { buildProductWhatsappLink } from "../utils/whatsapp";
import ProductImage from "../components/ProductImage";
import SizeGuideModal from "../components/SizeGuideModal";

const products = productsData as Product[];

export default function ProductPage() {
  const { slug } = useParams();
  const product = useMemo(() => products.find((p) => p.slug === slug), [slug]);

  const [activeImage, setActiveImage] = useState(0);
  const [color, setColor] = useState(product?.colors[0] ?? "");
  const [size, setSize] = useState(""); // no size pre-selected — must be chosen explicitly
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [sizeError, setSizeError] = useState(false);

  if (!product) {
    return (
      <div className="px-6 py-32 text-center">
        <p className="text-warmWhite/60">This product could not be found.</p>
        <Link to="/" className="mt-4 inline-block eyebrow text-xs text-champagne">
          Return home
        </Link>
      </div>
    );
  }

  const handleOrderClick = () => {
    if (!size) {
      setSizeError(true);
      return;
    }
    setSizeError(false);
    const link = buildProductWhatsappLink(product.name, size, color || undefined);
    window.open(link, "_blank", "noreferrer");
  };

  return (
    <div className="px-6 py-14 md:px-10 md:py-20">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
        {/* Gallery */}
        <div>
          <div className="aspect-[4/5] overflow-hidden bg-charcoal">
            <ProductImage
              src={product.images[activeImage]}
              alt={product.name}
              category={product.category}
              className="h-full w-full object-cover"
            />
          </div>
          {product.images.length > 1 && (
            <div className="mt-4 flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setActiveImage(i)}
                  className={`h-20 w-16 overflow-hidden border ${
                    activeImage === i ? "border-champagne" : "border-champagne/10"
                  }`}
                >
                  <ProductImage
                    src={img}
                    alt={`${product.name} thumbnail ${i + 1}`}
                    category={product.category}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow text-xs text-champagne">Top Quality Edition</span>
          <h1 className="mt-3 font-display text-3xl text-warmWhite md:text-4xl">
            {product.name}
          </h1>
          <p className="mt-3 text-xl text-warmWhite/80">{formatPrice(product.price)}</p>
          <p className="mt-6 text-sm leading-relaxed text-warmWhite/50">
            {product.description}
          </p>

          <div className="hairline my-8" />

          {product.colors.length > 0 && (
            <div className="mb-6">
              <div className="mb-3 eyebrow text-[11px] text-warmWhite/60">Color</div>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={`border px-4 py-2 text-xs transition-colors ${
                      color === c
                        ? "border-champagne text-champagne"
                        : "border-champagne/20 text-warmWhite/60 hover:border-champagne/50"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mb-8">
            <div className="mb-3 flex items-center justify-between">
              <span className="eyebrow text-[11px] text-warmWhite/60">
                Size {product.category === "footwear" ? "(EU)" : ""}
              </span>
              <button
                onClick={() => setSizeGuideOpen(true)}
                className="eyebrow text-[10px] text-champagne underline underline-offset-4"
              >
                Size Guide
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => {
                    setSize(s);
                    setSizeError(false);
                  }}
                  className={`border px-4 py-2 text-xs transition-colors ${
                    size === s
                      ? "border-champagne text-champagne"
                      : "border-champagne/20 text-warmWhite/60 hover:border-champagne/50"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
            {sizeError && (
              <p className="mt-3 text-xs text-[#D98B94]">Please select a size.</p>
            )}
          </div>

          <button
            onClick={handleOrderClick}
            className="w-full border border-champagne bg-champagne py-4 eyebrow text-[11px] text-obsidian transition-all hover:bg-transparent hover:text-champagne"
          >
            Order on WhatsApp
          </button>
        </motion.div>
      </div>

      <SizeGuideModal product={product} open={sizeGuideOpen} onClose={() => setSizeGuideOpen(false)} />
    </div>
  );
}
