import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useState } from "react";

const Sets = () => {
  const images = [
    "/produits/ensembles/new-sets/p1.jpg",
    "/produits/ensembles/new-sets/p2.jpg",
    "/produits/ensembles/new-sets/p3.jpg",
    "/produits/ensembles/new-sets/p4.jpg",
    "/produits/ensembles/new-sets/p5.jpg",
    "/produits/ensembles/new-sets/p6.jpg",
    "/produits/ensembles/new-sets/p7.jpg",
    "/produits/ensembles/new-sets/p8.jpg",
    "/produits/ensembles/new-sets/p9.jpg",
    "/produits/ensembles/new-sets/p10.jpg",
    "/produits/ensembles/new-sets/p11.jpg",
    "/produits/ensembles/new-sets/p12.jpg",
    "/produits/ensembles/new-sets/p13.jpg",
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
        title="Ensembles | Salma Dey Jewellery"
        description="Découvrez nos ensembles de bijoux."
      />
      <Header />
      <main className="pt-32 pb-20 min-h-screen">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-serif mb-8 text-center">
            Sets
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

export default Sets;
