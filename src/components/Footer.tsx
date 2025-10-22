import { Instagram, MapPin, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();
  const whatsappNumber = "22226314595";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className="bg-foreground text-background py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Boutique Info */}
          <div>
            <h3 className="text-lg font-serif mb-4 text-gold">
              {t("footer.boutique")}
            </h3>
            <div className="space-y-2 text-sm">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-gold" />
                <span>
                  {t("footer.address")}
                  <br />
                  {t("footer.city")}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 flex-shrink-0 text-gold" />
                <a
                  href={whatsappLink}
                  className="hover:text-gold transition-fast"
                >
                  +222 26 31 45 95 (WhatsApp)
                </a>
              </p>
            </div>
            <div className="mt-4 text-xs text-background/70">
              <p>{t("footer.appointment")}</p>
              <p>{t("footer.delivery")}</p>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-serif mb-4 text-gold">
              {t("footer.follow")}
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/salmadeybijoux/?utm_source=ig_web_button_share_sheet"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-fast focus:outline-none focus:ring-2 focus:ring-gold p-1"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.snapchat.com/@salma.dey"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-fast focus:outline-none focus:ring-2 focus:ring-gold p-1"
                aria-label="Add us on Snapchat"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12.206 2.175a9.86 9.86 0 0 0-1.635.156c-2.045.36-3.686 1.702-4.716 3.863-.33.69-.495 1.372-.495 2.042 0 .36.03.72.09 1.08.06.36.09.72.09 1.08 0 .33-.06.66-.18.99-.12.33-.18.66-.18.99 0 .36.09.69.27.99.18.3.27.63.27.99 0 .33-.09.66-.27.99-.18.33-.27.66-.27.99 0 .66.33 1.26.99 1.8.66.54 1.47.81 2.43.81.36 0 .72-.06 1.08-.18.36-.12.72-.18 1.08-.18.33 0 .66.06.99.18.33.12.66.18.99.18.96 0 1.77-.27 2.43-.81.66-.54.99-1.14.99-1.8 0-.33-.09-.66-.27-.99-.18-.33-.27-.66-.27-.99 0-.36.09-.69.27-.99.18-.3.27-.63.27-.99 0-.33-.06-.66-.18-.99-.12-.33-.18-.66-.18-.99 0-.36.03-.72.09-1.08.06-.36.09-.72.09-1.08 0-.67-.165-1.352-.495-2.042-1.03-2.161-2.671-3.503-4.716-3.863a9.86 9.86 0 0 0-1.635-.156z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-serif mb-4 text-gold">
              {t("footer.info")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/faq" className="hover:text-gold transition-fast">
                  {t("footer.faq")}
                </a>
              </li>
              <li>
                <a
                  href="/authenticity"
                  className="hover:text-gold transition-fast"
                >
                  {t("footer.authenticity")}
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-gold transition-fast"
                >
                  {t("footer.privacy")}
                </a>
              </li>
              <li>
                <a href="/cookies" className="hover:text-gold transition-fast">
                  {t("footer.cookies")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20 text-center text-sm text-background/70">
          <p>
            © {new Date().getFullYear()} Salma Dey Jewellery.{" "}
            {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};
