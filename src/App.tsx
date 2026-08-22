import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Catalog from "./pages/Catalog";
import ProductPage from "./pages/ProductPage";
import About from "./pages/About";
import NewArrivals from "./pages/NewArrivals";
import Collections from "./pages/Collections";
import {
  ShippingPage,
  ContactPage,
  PrivacyPage,
  TermsPage,
} from "./pages/StaticPage";

export default function App() {
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <div className="flex min-h-screen flex-col bg-obsidian">
      {!isLanding && <Header />}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Landing />} />
            <Route path="/footwear" element={<Catalog category="footwear" />} />
            <Route path="/apparel" element={<Catalog category="apparel" />} />
            <Route path="/new-arrivals" element={<NewArrivals />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/about" element={<About />} />
            <Route path="/product/:slug" element={<ProductPage />} />
            <Route path="/shipping" element={<ShippingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      {!isLanding && <Footer />}
    </div>
  );
}
