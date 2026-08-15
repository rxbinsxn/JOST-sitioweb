import { useState } from "react";
import SilhouetteArt from "./SilhouetteArt";
import type { ProductCategory } from "../types/product";

interface ProductImageProps {
  src: string;
  alt: string;
  category: ProductCategory;
  className?: string;
}

export default function ProductImage({ src, alt, category, className = "" }: ProductImageProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className={`relative flex items-center justify-center bg-charcoal ${className}`}
      >
        <div className="absolute inset-0 bg-champagne-radial opacity-40" />
        <SilhouetteArt
          variant={category}
          className="relative h-2/3 w-2/3 drop-shadow-[0_0_25px_rgba(200,169,107,0.25)]"
        />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setErrored(true)}
      className={className}
    />
  );
}
