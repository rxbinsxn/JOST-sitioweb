import { storeConfig } from "../config/store";

/**
 * Single source of truth for how prices are displayed across the site.
 * The currency symbol always comes from storeConfig.currencySymbol — change
 * it there (e.g. "zł" → "$") and every price on the site updates, no other
 * file needs to change.
 */
export function formatPrice(value: number): string {
  const formatted = new Intl.NumberFormat(storeConfig.locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
  return `${formatted} ${storeConfig.currencySymbol}`;
}
