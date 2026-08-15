export type ProductCategory = "footwear" | "apparel";

export interface SizeGuideRow {
  chest_cm?: number;
  length_cm?: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  subcategory: string;
  description: string;
  price: number;
  currency: string;
  images: string[];
  colors: string[];
  sizes: string[];
  sizeGuide?: Record<string, SizeGuideRow>;
  stock: number;
  featured: boolean;
  newArrival: boolean;
}
