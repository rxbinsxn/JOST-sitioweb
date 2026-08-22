import { storeConfig } from "../config/store";

/**
 * JOST is a WhatsApp-order catalog, not a shopping-cart e-commerce site.
 * Every "Order on WhatsApp" button builds its message from the single
 * product being viewed — name, size, and (if applicable) color — and reads
 * the destination number from storeConfig.whatsappNumber, the one place
 * that number is ever defined.
 */
export function buildProductWhatsappMessage(
  productName: string,
  size: string,
  color?: string
): string {
  const colorPart = color ? `, color ${color}` : "";
  return `Hi JOST, I'm interested in the ${productName} in ${size}${colorPart}.`;
}

export function buildProductWhatsappLink(
  productName: string,
  size: string,
  color?: string
): string {
  const message = buildProductWhatsappMessage(productName, size, color);
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${storeConfig.whatsappNumber}?text=${encoded}`;
}

/** General-purpose WhatsApp link with no product context (e.g. footer, contact page). */
export function buildGeneralWhatsappLink(): string {
  return `https://wa.me/${storeConfig.whatsappNumber}`;
}
