import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useWhatsAppTracking } from "@/hooks/useAnalytics";

export const WhatsAppBanner = () => {
  const { t, language } = useLanguage();
  const trackWhatsApp = useWhatsAppTracking();
  const whatsappNumber = "22226314595";
  
  const message = language === "ar"
    ? "مرحباً مجوهرات السلامة الدي، أود الاستفسار عن مجموعتكم."
    : "Hello Salma Dey Jewellery, I'd like to inquire about your collection.";
  
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  const handleClick = () => {
    trackWhatsApp("banner");
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-16 lg:py-20 bg-secondary"
    >
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-2xl lg:text-3xl font-serif mb-4">
          {t("banner.title")}
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          {t("banner.description")}
        </p>
        <Button
          asChild
          size="lg"
          className="bg-gold hover:bg-gold-dark text-background font-medium focus:ring-2 focus:ring-gold"
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="inline-flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            {t("banner.cta")}
          </a>
        </Button>
      </div>
    </motion.section>
  );
};
