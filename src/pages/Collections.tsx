import productsData from "../data/products.json";
import type { Product } from "../types/product";
import ProductCard from "../components/ProductCard";

const products = productsData as Product[];

export default function Collections() {
  const featured = products.filter((p) => p.featured);

  return (
    <div className="px-6 py-20 md:px-10 md:py-28">
      <div className="mb-14 max-w-xl">
        <span className="eyebrow text-xs text-champagne">Featured</span>
        <h1 className="mt-4 font-display text-4xl text-warmWhite md:text-5xl">
          Featured Selection
        </h1>
        <p className="mt-4 text-sm text-warmWhite/50">
          Discover the Top Quality pieces defining the JOST aesthetic.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-8 lg:grid-cols-4">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
