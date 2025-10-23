import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { SEO, createCollectionPageSchema } from "@/components/SEO";
import { usePageView } from "@/hooks/useAnalytics";
import { useEffect, useState } from "react";

const Jewellery = () => {
  const { t } = useLanguage();
  usePageView();

  const [categoryImages, setCategoryImages] = useState([]);
  const [popupImage, setPopupImage] = useState(null);

  useEffect(() => {
    const images = [
      {
        category: "sets",
        title: "Sets",
        image: "http://localhost:3000/images/ensembles/IMG-20251016-WA0049.jpg",
        link: "/jewellery/sets",
      },
      {
        category: "earrings_and_rings",
        title: "Earrings and Rings",
        image:
          "http://localhost:3000/images/boucles%20d'oreille%20et%20bagues/IMG-20251016-WA0058.jpg",
        link: "/jewellery/earrings-and-rings",
      },
      {
        category: "others",
        title: "Others",
        image: "http://localhost:3000/images/autres/IMG-20251016-WA0020.jpg",
        link: "/jewellery/others",
      },
    ];
    setCategoryImages(images);
  }, []);

  return (
    <div className="min-h-screen">
      <SEO
        title={`${t("jewellery.title")} | Salma Dey Jewellery`}
        description={t("jewellery.description")}
        schema={createCollectionPageSchema()}
      />
      <Header />
      <main className="pt-32 pb-20 min-h-screen">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-serif mb-8 text-center">
            {t("jewellery.title")}
          </h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            {t("jewellery.description")}
          </p>

          {/* Section des images */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryImages.map((category) => (
              <div key={category.category} className="card">
                <a href={category.link} className="block text-center">
                  <h2 className="text-3xl font-extrabold text-black mb-4">
                    {category.title}
                  </h2>
                  <img
                    src={category.image}
                    alt={`${category.category} category`}
                    className="w-[80vw] sm:w-[50vw] md:w-[31vw] aspect-[450/620] object-cover rounded-lg shadow-md border border-gold cursor-pointer rounded-[20px] m-auto"
                    onClick={() => setPopupImage(category.image)}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
      {popupImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setPopupImage(null)}
        >
          <img
            src={popupImage}
            alt="Popup"
            className="max-w-full max-h-full rounded-lg"
          />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Jewellery;
