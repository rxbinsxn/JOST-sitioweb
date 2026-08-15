# JOST — Premium Streetwear

A dark, editorial storefront for JOST: a cinematic two-world landing
(Footwear / Apparel), premium catalog and product pages, a WhatsApp-based
checkout, and a JSON product catalog that's ready to grow without touching
component code.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Set your WhatsApp number

Open `src/config/store.ts` and replace `whatsappNumber` with your real
number in international format, no spaces, no plus sign:

```ts
whatsappNumber: "48123456789",
```

Nothing else in the codebase needs to change — every "Order via WhatsApp"
button reads from this single file.

## Add a product

1. Open `src/data/products.json`.
2. Copy an existing product object and change its `id`, `name`, `slug`,
   `category` (`"footwear"` or `"apparel"`), `subcategory`, `description`,
   `price`, `images`, `colors`, `sizes`, `sizeGuide` (apparel only), `stock`,
   `featured`, and `newArrival`.
3. Drop the product photography into:
   - `public/assets/products/footwear/` for sneakers
   - `public/assets/products/apparel/` for clothing
4. Make sure the filenames in `images` match exactly what you uploaded.
   Recommended naming: `product-name-01.webp`, `product-name-02.webp`.
5. Save. No component needs to be touched — the catalog, product page, and
   size guide all read from this file automatically.

If a listed image is missing, the site falls back to a stylized JOST
silhouette rather than a broken image, so the catalog never looks unfinished
while photography is still being shot.

## Project structure

```
src/
  components/   Reusable UI (header, footer, product card, bag drawer, ...)
  pages/        Route-level views (landing, catalog, product page, ...)
  context/      Cart / bag state
  config/       store.ts — brand-wide settings (WhatsApp number, currency, theme)
  data/         products.json — the single source of truth for the catalog
  types/        Shared TypeScript types
  utils/        WhatsApp message builder
public/
  assets/products/footwear/   Footwear photography
  assets/products/apparel/    Apparel photography
  assets/brand/                Logo
```

## Built for future scalability

The current build intentionally ships without a database, admin panel,
online payments, or accounts — WhatsApp is the checkout for now. The
product data, cart, and config layers are already separated so a database,
Polish-language support, PLN pricing, and online payments can be added later
without rewriting the storefront itself.
