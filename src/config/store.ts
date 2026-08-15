// Central JOST store configuration.
// Keep brand-wide values here so nothing is hardcoded inside components.
// To go live: replace whatsappNumber with the real number, international
// format, no spaces, no plus sign (e.g. "48123456789" for Poland).

export const storeConfig = {
  brandName: "JOST",
  tagline: "Premium Streetwear",
  currency: "EUR",
  currencySymbol: "€",
  whatsappNumber: "YOUR_WHATSAPP_NUMBER_WITH_COUNTRY_CODE",
  locale: "en-GB",
  country: "Poland",
  shippingNote:
    "Shipped from Poland to all EU destinations. Orders are processed within 1–2 business days.",
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
