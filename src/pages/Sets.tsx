import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useState } from "react";

const Sets = () => {
  const images = [
    "https://storage.cloud.google.com/ghrini-images-prod/produits/ensembles/IMG-20251016-WA0001.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/ensembles/IMG-20251016-WA0002.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/ensembles/IMG-20251016-WA0003.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/ensembles/IMG-20251016-WA0004.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/ensembles/IMG-20251016-WA0005.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/ensembles/IMG-20251016-WA0006.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/ensembles/IMG-20251016-WA0007.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/ensembles/IMG-20251016-WA0008.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/ensembles/IMG-20251016-WA0009.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/ensembles/IMG-20251016-WA0010.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/ensembles/IMG-20251016-WA0011.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/ensembles/IMG-20251016-WA0012.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/ensembles/IMG-20251016-WA0013.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/ensembles/IMG-20251016-WA0014.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/ensembles/IMG-20251016-WA0015.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/ensembles/IMG-20251016-WA0016.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/ensembles/IMG-20251016-WA0017.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/ensembles/IMG-20251016-WA0018.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/ensembles/IMG-20251016-WA0019.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/ensembles/IMG-20251016-WA0021.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/ensembles/IMG-20251016-WA0022.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/ensembles/IMG-20251016-WA0023.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/ensembles/IMG-20251016-WA0029.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/ensembles/IMG-20251016-WA0030.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/ensembles/IMG-20251016-WA0031.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/ensembles/IMG-20251016-WA0032.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/ensembles/IMG-20251016-WA0033.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/ensembles/IMG-20251016-WA0034.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/ensembles/IMG-20251016-WA0035.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/ensembles/IMG-20251016-WA0036.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/ensembles/IMG-20251016-WA0037.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/ensembles/IMG-20251016-WA0038.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/ensembles/IMG-20251016-WA0039.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/ensembles/IMG-20251016-WA0040.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/ensembles/IMG-20251016-WA0041.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/ensembles/IMG-20251016-WA0042.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/ensembles/IMG-20251016-WA0043.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/ensembles/IMG-20251016-WA0044.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/ensembles/IMG-20251016-WA0045.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/ensembles/IMG-20251016-WA0046.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/ensembles/IMG-20251016-WA0047.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/ensembles/IMG-20251016-WA0048.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/ensembles/IMG-20251016-WA0049.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/ensembles/IMG-20251016-WA0050.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/ensembles/IMG-20251016-WA0051.jpg",
    "https://storage.cloud.google.com/ghrini-images-prod/produits/ensembles/IMG-20251016-WA0052.jpg",
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
              <div key={index} className="relative">
                <img
                  src={src}
                  alt={`Ensemble ${index + 1}`}
                  className="w-[80vw] sm:w-[50vw] md:w-[31vw] aspect-[450/620] object-cover rounded-lg shadow-md border border-gold cursor-pointer rounded-[20px]"
                  onClick={() => setPopupImage(src)}
                />
                <button
                  className="absolute bottom-2 right-2 bg-green-500 text-white px-4 py-2 rounded flex items-center gap-2"
                  onClick={() => handleInquiry(src)}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp Icon"
                    className="w-5 h-5"
                  />
                  WhatsApp
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
