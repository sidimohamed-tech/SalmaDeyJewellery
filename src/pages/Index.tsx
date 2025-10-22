import { useState, useEffect, lazy, Suspense } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppBanner } from "@/components/WhatsAppBanner";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { SEO, createOrganizationSchema } from "@/components/SEO";
import { usePageView } from "@/hooks/useAnalytics";
import Collections from "../components/Collections";
import { motion, AnimatePresence } from "framer-motion"; // Import framer-motion

const MotionDiv = lazy(() =>
  import("framer-motion").then((mod) => ({ default: mod.motion.div }))
);

const Index = () => {
  const { t } = useLanguage();
  usePageView();

  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // État pour l'image active

  useEffect(() => {
    // Liste des images aléatoires
    const randomImages = [
      "http://localhost:3000/images/ensembles/IMG-20251016-WA0001.jpg",
      "http://localhost:3000/images/ensembles/IMG-20251016-WA0006.jpg",
      "http://localhost:3000/images/boucles%20d'oreille%20et%20bagues/IMG-20251016-WA0082.jpg",
      "http://localhost:3000/images/ensembles/IMG-20251016-WA0003.jpg",
      "http://localhost:3000/images/ensembles/IMG-20251016-WA0008.jpg",
    ];
    setImages(randomImages.sort(() => Math.random() - 0.5)); // Mélange aléatoire
  }, []);

  useEffect(() => {
    // Change l'image toutes les 4 secondes
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval); // Nettoie l'intervalle à la fin
  }, [images]);

  return (
    <div className="min-h-screen">
      <SEO
        title="Salma Dey Jewellery | Luxury Gold, Diamonds & Pearls"
        description="High jewellery crafted for women who value precision and restraint. Gold, diamonds and pearls — made to order in Mauritania."
        schema={createOrganizationSchema()}
      />
      <Header />

      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-20 lg:pt-24 min-h-screen flex items-center">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <Suspense fallback={<div className="space-y-8 animate-pulse" />}>
                <MotionDiv
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-8"
                >
                  <div className="space-y-4">
                    <h1 className="text-4xl lg:text-6xl xl:text-7xl font-serif leading-tight">
                      {t("hero.title")}
                      <br />
                      <span className="text-gold">{t("hero.subtitle")}</span>
                    </h1>
                    <p className="text-lg lg:text-xl text-muted-foreground max-w-xl">
                      {t("hero.description")}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-foreground text-foreground hover:bg-foreground hover:text-background"
                    >
                      <a href="/jewellery">{t("hero.catalogue")}</a>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      className="bg-gold hover:bg-gold-dark text-background"
                    >
                      <a href="/appointments">{t("hero.appointment")}</a>
                    </Button>
                  </div>
                </MotionDiv>
              </Suspense>

              {/* Right Image */}
              <Suspense
                fallback={
                  <div className="aspect-square bg-secondary animate-pulse" />
                }
              >
                <div
                  className="w-[80vw] sm:w-[50vw] md:w-[31vw] aspect-[450/620] object-cover rounded-lg shadow-md border border-gold rounded-[20px] p-0 m-0"
                  style={{ position: "relative", overflow: "hidden" }} // Conteneur fixe
                >
                  <AnimatePresence>
                    <motion.img
                      key={currentImageIndex} // Utilise l'index comme clé pour l'animation
                      src={images[currentImageIndex]}
                      alt="Carousel Image"
                      className="absolute top-0 left-0 w-full h-full object-cover rounded-lg" // Position absolue pour éviter le déplacement
                      initial={{ opacity: 0, x: 100 }} // Départ hors écran à droite
                      animate={{ opacity: 1, x: 0 }} // Animation vers le centre
                      exit={{ opacity: 0, x: -100 }} // Sortie vers la gauche
                      transition={{ duration: 0.8 }} // Durée de l'animation
                    />
                  </AnimatePresence>
                </div>
              </Suspense>
            </div>
          </div>
        </section>

        <Collections />

        {/* WhatsApp Lead Banner */}
        <WhatsAppBanner />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
