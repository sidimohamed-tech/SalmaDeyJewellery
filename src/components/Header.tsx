import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  return (
    <>
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-gold focus:text-background focus:ring-2 focus:ring-gold focus:outline-none"
      >
        Skip to main content
      </a>

      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link
              to="/"
              className="flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <img
                src="/logo.jpg"
                alt="Salma Dey Jewellery"
                className="h-16 lg:h-20 w-auto object-contain"
                width="120"
                height="80"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-12">
              <Link
                to="/"
                className="text-sm lg:text-base font-medium text-foreground hover:text-primary transition-fast focus:outline-none focus:ring-2 focus:ring-gold px-2 py-1"
              >
                {t("nav.home")}
              </Link>
              <Link
                to="/jewellery"
                className="text-sm lg:text-base font-medium text-foreground hover:text-primary transition-fast focus:outline-none focus:ring-2 focus:ring-gold px-2 py-1"
              >
                {t("nav.jewellery")}
              </Link>
              {/* <Link
                to="/maison"
                className="text-sm lg:text-base font-medium text-foreground hover:text-primary transition-fast focus:outline-none focus:ring-2 focus:ring-gold px-2 py-1"
              >
                {t("nav.maison")}
              </Link> */}
              <Link
                to="/appointments"
                className="text-sm lg:text-base font-medium text-foreground hover:text-primary transition-fast focus:outline-none focus:ring-2 focus:ring-gold px-2 py-1"
              >
                {t("nav.appointments")}
              </Link>
              <Link
                to="/contact"
                className="text-sm lg:text-base font-medium text-foreground hover:text-primary transition-fast focus:outline-none focus:ring-2 focus:ring-gold px-2 py-1"
              >
                {t("nav.contact")}
              </Link>
            </nav>

            {/* Right Side - Language & Social */}
            <div className="flex items-center gap-4 lg:gap-6">
              {/* Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="text-sm font-medium text-foreground hover:text-primary transition-fast focus:outline-none focus:ring-2 focus:ring-gold px-2 py-1 hidden md:block"
                aria-label={`Switch to ${
                  language === "en" ? "Arabic" : "English"
                }`}
              >
                {language === "en" ? "EN" : "AR"} |{" "}
                <span className="text-muted-foreground">
                  {language === "en" ? "AR" : "EN"}
                </span>
              </button>

              {/* Social Icons - Desktop only */}
              <div className="hidden md:flex items-center gap-3">
                <a
                  href="https://www.instagram.com/salmadeybijoux/?utm_source=ig_web_button_share_sheet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-fast focus:outline-none focus:ring-2 focus:ring-gold p-1"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.snapchat.com/@salma.dey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-fast focus:outline-none focus:ring-2 focus:ring-gold p-1"
                  aria-label="Add us on Snapchat"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12.206 2.175a9.86 9.86 0 0 0-1.635.156c-2.045.36-3.686 1.702-4.716 3.863-.33.69-.495 1.372-.495 2.042 0 .36.03.72.09 1.08.06.36.09.72.09 1.08 0 .33-.06.66-.18.99-.12.33-.18.66-.18.99 0 .36.09.69.27.99.18.3.27.63.27.99 0 .33-.09.66-.27.99-.18.33-.27.66-.27.99 0 .66.33 1.26.99 1.8.66.54 1.47.81 2.43.81.36 0 .72-.06 1.08-.18.36-.12.72-.18 1.08-.18.33 0 .66.06.99.18.33.12.66.18.99.18.96 0 1.77-.27 2.43-.81.66-.54.99-1.14.99-1.8 0-.33-.09-.66-.27-.99-.18-.33-.27-.66-.27-.99 0-.36.09-.69.27-.99.18-.3.27-.63.27-.99 0-.33-.06-.66-.18-.99-.12-.33-.18-.66-.18-.99 0-.36.03-.72.09-1.08.06-.36.09-.72.09-1.08 0-.67-.165-1.352-.495-2.042-1.03-2.161-2.671-3.503-4.716-3.863a9.86 9.86 0 0 0-1.635-.156z" />
                  </svg>
                </a>
              </div>

              {/* Mobile Menu */}
              <MobileMenu />
            </div>
          </div>
        </div>
      </motion.header>
    </>
  );
};
