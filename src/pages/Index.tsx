import { useState, useEffect, lazy, Suspense } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CategoryCard } from "@/components/CategoryCard";
import { WhatsAppBanner } from "@/components/WhatsAppBanner";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { SEO, createOrganizationSchema } from "@/components/SEO";
import { usePageView } from "@/hooks/useAnalytics";
import { Carousel } from "@/components/ui/carousel";
import { log } from "console";

const MotionDiv = lazy(() =>
  import("framer-motion").then((mod) => ({ default: mod.motion.div }))
);

const Index = () => {
  const { t } = useLanguage();
  usePageView();

  const [images, setImages] = useState([]);

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

  const categories = [
    {
      title: t("Sets"),
      subtitle: t(""),
      image: "http://localhost:3000/images/ensembles/IMG-20251016-WA0001.jpg", // Image pour la catégorie "sets"
      href: "/jewellery?category=sets",
    },
    {
      title: t("Earrings and Rings"),
      subtitle: t(""),
      image:
        "http://localhost:3000/images/boucles%20d'oreille%20et%20bagues/IMG-20251016-WA0053.jpg",
      href: "/jewellery?category=earrings_and_rings",
    },
    {
      title: t("Others"),
      subtitle: t(""),
      image:
        "http://localhost:3000/images/boucles%20d'oreille%20et%20bagues/IMG-20251016-WA0053.jpg",
      href: "/jewellery?category=others",
    },
  ];

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
                <MotionDiv
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="w-[80vw] sm:w-[50vw] md:w-[31vw] aspect-[450/620] object-cover rounded-lg shadow-md border border-gold rounded-[20px] p-0 m-0"
                >
                  <div className="w-[80vw] sm:w-[50vw] md:w-[31vw] aspect-[450/620] object-cover rounded-lg shadow-md border border-gold rounded-[20px] p-0 m-0">
                    <Carousel images={images} />
                  </div>
                  {/* Decorative border */}
                  {/* <div className="absolute -inset-4 border border-gold/30 -z-10" /> */}
                </MotionDiv>
              </Suspense>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <Suspense fallback={<div className="text-center mb-16" />}>
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl lg:text-5xl font-serif mb-4">
                  {t("collections.title")}
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {t("collections.description")}
                </p>
              </MotionDiv>
            </Suspense>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {categories.map((category, index) => (
                <CategoryCard
                  key={category.title}
                  {...category}
                  index={index}
                  image={category.image}
                />
              ))}
            </div>
          </div>
        </section>

        {/* WhatsApp Lead Banner */}
        <WhatsAppBanner />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
