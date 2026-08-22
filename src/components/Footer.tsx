import { Link } from "react-router-dom";
import { storeConfig } from "../config/store";
import { buildGeneralWhatsappLink } from "../utils/whatsapp";

export default function Footer() {
  return (
    <footer className="border-t border-champagne/10 bg-obsidian">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3">
          <div className="col-span-2 md:col-span-1">
            <div className="font-display text-xl tracking-[0.3em] text-warmWhite">
              {storeConfig.brandName}
            </div>
            <p className="mt-3 text-xs leading-relaxed text-warmWhite/50">
              {storeConfig.tagline}
            </p>
          </div>

          <div>
            <div className="eyebrow mb-4 text-[10px] text-champagne">Links</div>
            <ul className="space-y-2 text-sm text-warmWhite/60">
              <li><Link to="/" className="hover:text-champagne">Home</Link></li>
              <li><Link to="/footwear" className="hover:text-champagne">Sneakers</Link></li>
              <li><Link to="/apparel" className="hover:text-champagne">Clothing</Link></li>
              <li><Link to="/contact" className="hover:text-champagne">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="eyebrow mb-4 text-[10px] text-champagne">Social</div>
            <ul className="space-y-2 text-sm text-warmWhite/60">
              <li>
                <a href={storeConfig.social.instagram} target="_blank" rel="noreferrer" className="hover:text-champagne">
                  Instagram
                </a>
              </li>
              <li>
                <a href={buildGeneralWhatsappLink()} target="_blank" rel="noreferrer" className="hover:text-champagne">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-champagne/10 pt-8 text-xs text-warmWhite/40">
          © {new Date().getFullYear()} {storeConfig.brandName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
