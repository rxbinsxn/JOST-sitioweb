import { storeConfig } from "../config/store";
import type { CartItem } from "../context/CartContext";

function formatPrice(value: number, currency: string) {
  return new Intl.NumberFormat(storeConfig.locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(value);
}

export function buildWhatsappMessage(items: CartItem[]): string {
  const lines: string[] = ["Hello! I'd like to place an order:", ""];

  items.forEach((item, index) => {
    lines.push(`${index + 1}. JOST ${item.name}`);
    lines.push(`Color: ${item.color}`);
    lines.push(`Size: ${item.size}`);
    lines.push(`Quantity: ${item.quantity}`);
    lines.push(`Price: ${formatPrice(item.price, item.currency)}`);
    lines.push("");
  });

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const currency = items[0]?.currency ?? storeConfig.currency;

  lines.push(`Estimated total: ${formatPrice(total, currency)}`);
  lines.push("");
  lines.push("Please let me know the next steps.");

  return lines.join("\n");
}

export function buildWhatsappLink(items: CartItem[]): string {
  const message = buildWhatsappMessage(items);
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${storeConfig.whatsappNumber}?text=${encoded}`;
}
