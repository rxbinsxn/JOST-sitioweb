import { storeConfig } from "../config/store";

interface StaticPageProps {
  eyebrow: string;
  title: string;
  paragraphs: string[];
}

export default function StaticPage({ eyebrow, title, paragraphs }: StaticPageProps) {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 md:px-10 md:py-32">
      <span className="eyebrow text-xs text-champagne">{eyebrow}</span>
      <h1 className="mt-4 font-display text-4xl text-warmWhite md:text-5xl">{title}</h1>
      <div className="mt-8 space-y-4 text-sm leading-relaxed text-warmWhite/50">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}

export function ShippingPage() {
  const { minDays, maxDays, delayThresholdDays, delayCompensation } = storeConfig.shippingPolicy;

  return (
    <StaticPage
      eyebrow="Information"
      title="Shipping"
      paragraphs={[
        storeConfig.shippingNote,
        "All orders are placed and confirmed via WhatsApp. Once your order is confirmed, you will receive tracking details as soon as your package ships.",
        `Currently shipping from ${storeConfig.country} to destinations across the European Union. Estimated delivery time is ${minDays}–${maxDays} days from order confirmation.`,
        `If your order has not arrived within ${delayThresholdDays} days of confirmation, contact us via WhatsApp — as an apology for the delay, you'll receive ${delayCompensation}.`,
      ]}
    />
  );
}

export function ContactPage() {
  return (
    <StaticPage
      eyebrow="Information"
      title="Contact"
      paragraphs={[
        "For orders, sizing questions, or anything else, reach us directly on WhatsApp — it's the fastest way to hear back.",
        "You can also find us on Instagram and TikTok for the latest drops.",
      ]}
    />
  );
}

export function PrivacyPage() {
  return (
    <StaticPage
      eyebrow="Legal"
      title="Privacy Policy"
      paragraphs={[
        "JOST collects only the information necessary to process and fulfil your order, shared directly with us via WhatsApp.",
        "We do not sell or share your personal information with third parties beyond what is required to deliver your order.",
      ]}
    />
  );
}

export function TermsPage() {
  const { minDays, maxDays, delayThresholdDays, delayCompensation } = storeConfig.shippingPolicy;

  return (
    <StaticPage
      eyebrow="Legal"
      title="Terms & Conditions"
      paragraphs={[
        "By placing an order with JOST, you agree to provide accurate sizing, colour, and delivery information via WhatsApp.",
        `Prices are listed in ${storeConfig.currency} (${storeConfig.currencySymbol}) and are subject to change without notice. Availability is confirmed at the time of order via WhatsApp.`,
        `Estimated delivery is ${minDays}–${maxDays} days from order confirmation. If delivery takes longer than ${delayThresholdDays} days, JOST will compensate the customer with ${delayCompensation} as an apology for the delay — simply reach out via WhatsApp with your order details.`,
      ]}
    />
  );
}
