import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { SEO, createOrganizationSchema } from "@/components/SEO";
import { usePageView } from "@/hooks/useAnalytics";

const Maison = () => {
  const { t } = useLanguage();
  usePageView();
  
  return (
    <div className="min-h-screen">
      <SEO
        title={`${t("maison.title")} | Salma Dey Jewellery`}
        description={t("maison.description")}
        schema={createOrganizationSchema()}
      />
      <Header />
      <main className="pt-32 pb-20 min-h-screen">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-serif mb-8 text-center">
            {t("maison.title")}
          </h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            {t("maison.description")}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Maison;
