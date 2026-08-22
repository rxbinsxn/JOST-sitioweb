// Central JOST store configuration.
// Keep brand-wide values here so nothing is hardcoded inside components.
// To go live: replace whatsappNumber with the real number, international
// format, no spaces, no plus sign (e.g. "48123456789" for Poland).

export const storeConfig = {
  brandName: "JOST",
  tagline: "Where style becomes legacy.",
  // currencySymbol drives every displayed price across the site (see
  // src/utils/formatPrice.ts) — change it here and the whole site updates.
  // currency (ISO code) is kept for reference/data purposes only.
  currency: "PLN",
  currencySymbol: "zł",
  whatsappNumber: "YOUR_WHATSAPP_NUMBER_WITH_COUNTRY_CODE",
  locale: "pl-PL",
  country: "Poland",
  shippingNote:
    "Shipped from Poland to all EU destinations. Estimated delivery is 15–20 days from order confirmation.",
  shippingPolicy: {
    minDays: 15,
    maxDays: 20,
    delayThresholdDays: 25,
    delayCompensation: "10% off your next order",
  },
  social: {
    instagram: "https://instagram.com/jost",
    tiktok: "https://tiktok.com/@jost",
  },
  theme: {
    background: "#050505",
    charcoal: "#111111",
    champagne: "#C8A96B",
    champagneLight: "#E6D3A3",
    warmWhite: "#F5F2EA",
    burgundy: "#3A0D18",
  },
} as const;

export type StoreConfig = typeof storeConfig;
