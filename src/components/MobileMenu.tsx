import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const menuItems = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.jewellery"), href: "/jewellery" },
    { label: t("nav.maison"), href: "/maison" },
    { label: t("nav.appointments"), href: "/appointments" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-foreground hover:text-primary transition-fast focus:outline-none focus:ring-2 focus:ring-gold"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-20 right-0 bottom-0 w-64 bg-background border-l border-border shadow-xl z-50 overflow-y-auto"
            >
              <div className="p-6 space-y-6">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-lg font-medium text-foreground hover:text-gold transition-fast focus:outline-none focus:ring-2 focus:ring-gold px-2 py-1"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
