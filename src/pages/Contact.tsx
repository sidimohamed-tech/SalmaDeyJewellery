import { MapPin, MessageCircle, Clock, Info } from "lucide-react";
import { lazy, Suspense } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { SEO, createOrganizationSchema } from "@/components/SEO";
import { usePageView, useWhatsAppTracking } from "@/hooks/useAnalytics";

const MotionDiv = lazy(() =>
  import("framer-motion").then((mod) => ({ default: mod.motion.div }))
);

const Contact = () => {
  const { t, language } = useLanguage();
  usePageView();
  const trackWhatsApp = useWhatsAppTracking();
  const whatsappNumber = "22226314595";

  const whatsappMessage =
    language === "ar"
      ? "مرحباً، أود حجز موعد لزيارة متجركم."
      : "Hello, I'd like to book an appointment to visit your boutique.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  // Coordinates for Dey Mall, Nouakchott
  const mapsLink = "https://maps.app.goo.gl/2eg3WDJ88WGeQgWq6";

  return (
    <div className="min-h-screen">
      <SEO
        title={`${t("contact.title")} | Salma Dey Jewellery`}
        description={t("contact.subtitle")}
        schema={createOrganizationSchema()}
      />
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <Suspense fallback={<div className="text-center mb-16" />}>
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl lg:text-6xl font-serif mb-6">
                {t("contact.title")}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("contact.subtitle")}
              </p>
            </MotionDiv>
          </Suspense>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Left Column - Contact Info */}
            <Suspense fallback={<div className="space-y-8 animate-pulse" />}>
              <MotionDiv
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                {/* Boutique Info Card */}
                <div className="bg-secondary p-8 border border-gold/20">
                  <h2 className="text-2xl font-serif mb-6 text-gold">
                    {t("contact.boutique.title")}
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium mb-1">
                          {t("contact.boutique.name")}
                        </p>
                        <p className="text-muted-foreground">
                          {t("contact.boutique.address")}
                        </p>
                        <p className="text-muted-foreground">
                          {t("contact.boutique.city")}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium mb-1">{t("contact.hours")}</p>
                        <p className="text-muted-foreground">
                          {t("contact.hours.appointment")}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {t("contact.hours.note")}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <MessageCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium mb-1">
                          {t("contact.whatsapp")}
                        </p>
                        <a
                          href={whatsappLink}
                          className="text-gold hover:text-gold-dark transition-fast"
                        >
                          +222 26 31 45 95
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4">
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-gold hover:bg-gold-dark text-background font-medium"
                  >
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3"
                      onClick={() => trackWhatsApp("contact_page")}
                    >
                      <MessageCircle className="w-5 h-5" />
                      {t("contact.whatsapp.cta")}
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full border-foreground text-foreground hover:bg-foreground hover:text-background"
                  >
                    <a
                      href={mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3"
                    >
                      <MapPin className="w-5 h-5" />
                      {t("contact.location.cta")}
                    </a>
                  </Button>
                </div>

                {/* Important Info */}
                <div className="bg-foreground text-background p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Info className="w-5 h-5 text-gold" />
                    <h3 className="font-serif text-lg">
                      {t("contact.important")}
                    </h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1">•</span>
                      <span>{t("contact.important.1")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1">•</span>
                      <span>{t("contact.important.2")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1">•</span>
                      <span>{t("contact.important.3")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold mt-1">•</span>
                      <span>{t("contact.important.4")}</span>
                    </li>
                  </ul>
                </div>
              </MotionDiv>
            </Suspense>

            {/* Right Column - Map */}
            <Suspense
              fallback={
                <div className="h-full min-h-[600px] bg-secondary animate-pulse" />
              }
            >
              <MotionDiv
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="h-full min-h-[600px]"
              >
                <div className="w-full h-full border-2 border-gold/20 shadow-gold overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d474.0286256392367!2d-15.97428001108435!3d18.107212903367564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe964d7def237189%3A0x5359172f11e91803!2sDey%20Super%20Mall!5e0!3m2!1sfr!2sfr!4v1760547587217!5m2!1sfr!2sfr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Salma Dey Jewellery Location"
                    className="w-full h-full"
                  />
                </div>
              </MotionDiv>
            </Suspense>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
