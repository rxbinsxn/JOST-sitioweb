import { Link } from "react-router-dom";
import type { Product } from "../types/product";
import { storeConfig } from "../config/store";
import ProductImage from "./ProductImage";

function formatPrice(value: number, currency: string) {
  return new Intl.NumberFormat(storeConfig.locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(value);
}

export default function ProductCard({ product }: { product: Product }) {
  const [primary, secondary] = product.images;

  return (
    <Link to={`/product/${product.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-charcoal">
        <ProductImage
          src={primary}
          alt={product.name}
          category={product.category}
          className="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-editorial group-hover:scale-105 group-hover:opacity-0"
        />
        {secondary && (
          <ProductImage
            src={secondary}
            alt={`${product.name} — alternate view`}
            category={product.category}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-700 ease-editorial group-hover:scale-105 group-hover:opacity-100"
          />
        )}
        {product.newArrival && (
          <span className="absolute left-3 top-3 eyebrow bg-obsidian/70 px-2 py-1 text-[9px] text-champagne backdrop-blur-sm">
            New
          </span>
        )}
      </div>
      <div className="mt-4 flex items-start justify-between">
        <div>
          <h3 className="text-sm text-warmWhite transition-colors group-hover:text-champagne">
            {product.name}
          </h3>
          <p className="mt-1 text-xs capitalize text-warmWhite/40">{product.subcategory}</p>
        </div>
        <span className="text-sm text-warmWhite/70">
          {formatPrice(product.price, product.currency)}
        </span>
      </div>
    </Link>
  );
}
