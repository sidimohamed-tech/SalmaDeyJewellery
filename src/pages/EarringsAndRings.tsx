import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const EarringsAndRings = () => {
  const images = [
    "https://storage.cloud.google.com/ghrini-images-prod/produits/boucles%20d'oreille%20et%20bagues/IMG-20251016-WA0053.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/boucles%20d'oreille%20et%20bagues/IMG-20251016-WA0054.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/boucles%20d'oreille%20et%20bagues/IMG-20251016-WA0055.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/boucles%20d'oreille%20et%20bagues/IMG-20251016-WA0056.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/boucles%20d'oreille%20et%20bagues/IMG-20251016-WA0057.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/boucles%20d'oreille%20et%20bagues/IMG-20251016-WA0058.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/boucles%20d'oreille%20et%20bagues/IMG-20251016-WA0059.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/boucles%20d'oreille%20et%20bagues/IMG-20251016-WA0060.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/boucles%20d'oreille%20et%20bagues/IMG-20251016-WA0062.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/boucles%20d'oreille%20et%20bagues/IMG-20251016-WA0063.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/boucles%20d'oreille%20et%20bagues/IMG-20251016-WA0064.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/boucles%20d'oreille%20et%20bagues/IMG-20251016-WA0065.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/boucles%20d'oreille%20et%20bagues/IMG-20251016-WA0066.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/boucles%20d'oreille%20et%20bagues/IMG-20251016-WA0067.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/boucles%20d'oreille%20et%20bagues/IMG-20251016-WA0068.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/boucles%20d'oreille%20et%20bagues/IMG-20251016-WA0069.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/boucles%20d'oreille%20et%20bagues/IMG-20251016-WA0070.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/boucles%20d'oreille%20et%20bagues/IMG-20251016-WA0071.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/boucles%20d'oreille%20et%20bagues/IMG-20251016-WA0072.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/boucles%20d'oreille%20et%20bagues/IMG-20251016-WA0073.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/boucles%20d'oreille%20et%20bagues/IMG-20251016-WA0074.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/boucles%20d'oreille%20et%20bagues/IMG-20251016-WA0075.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/boucles%20d'oreille%20et%20bagues/IMG-20251016-WA0076.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/boucles%20d'oreille%20et%20bagues/IMG-20251016-WA0077.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/boucles%20d'oreille%20et%20bagues/IMG-20251016-WA0078.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/boucles%20d'oreille%20et%20bagues/IMG-20251016-WA0079.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/boucles%20d'oreille%20et%20bagues/IMG-20251016-WA0080.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/boucles%20d'oreille%20et%20bagues/IMG-20251016-WA0082.jpg",
  ];

  const [popupImage, setPopupImage] = useState<string | null>(null);

  const handleInquiry = (src: string) => {
    const message = `Hello, I would like more information about this product: ${src}`;
    window.open(
      `https://wa.me/22226314595?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Boucles d'oreilles et bagues | Salma Dey Jewellery"
        description="Découvrez nos boucles d'oreilles et bagues."
      />
      <Header />
      <main className="pt-32 pb-20 min-h-screen">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-serif mb-8 text-center">
            Earrings And Rings
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((src, index) => (
              <div key={index} className="relative overflow-hidden">
                <img
                  src={src}
                  alt={`Product ${index + 1}`}
                  className="w-full aspect-[450/620] object-cover block shadow-md border border-gold cursor-pointer"
                  onClick={() => setPopupImage(src)}
                />

                <button
                  className="
          absolute bottom-1 right-1
          bg-green-500 text-white
          flex items-center gap-2 shadow-md
          px-2 py-1 text-xs
          whitespace-nowrap truncate
          max-w-[72%] overflow-hidden
          hover:bg-green-600 transition-colors duration-200

          sm:bottom-1 sm:right-1 sm:px-2 sm:py-1 sm:text-xs sm:max-w-[75%]
          md:bottom-2 md:right-2 md:px-3 md:py-1.5 md:text-sm md:max-w-[80%]
          lg:px-4 lg:py-2 lg:text-base lg:max-w-none
        "
                  onClick={() => handleInquiry(src)}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp Icon"
                    className="w-4 h-4 md:w-5 md:h-5 shrink-0"
                  />
                  <span>WhatsApp</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Popup */}
        {popupImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setPopupImage(null)}
          >
            <img
              src={popupImage}
              alt="Popup Image"
              className="max-w-full max-h-full rounded-lg shadow-lg"
            />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default EarringsAndRings;
