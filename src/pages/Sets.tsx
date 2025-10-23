import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useState } from "react";

const Sets = () => {
  const baseUrl =
    process.env.REACT_APP_BASE_URL || "https://salma-dey-jewellery.vercel.app";

  const images = [
    `${baseUrl}/images/ensembles/IMG-20251016-WA0001.jpg`,
    `${baseUrl}/images/ensembles/IMG-20251016-WA0002.jpg`,
    `${baseUrl}/images/ensembles/IMG-20251016-WA0003.jpg`,
    `${baseUrl}/images/ensembles/IMG-20251016-WA0004.jpg`,
    `${baseUrl}/images/ensembles/IMG-20251016-WA0005.jpg`,
    `${baseUrl}/images/ensembles/IMG-20251016-WA0006.jpg`,
    `${baseUrl}/images/ensembles/IMG-20251016-WA0007.jpg`,
    `${baseUrl}/images/ensembles/IMG-20251016-WA0008.jpg`,
    `${baseUrl}/images/ensembles/IMG-20251016-WA0009.jpg`,
    `${baseUrl}/images/ensembles/IMG-20251016-WA0010.jpg`,
    `${baseUrl}/images/ensembles/IMG-20251016-WA0011.jpg`,
    `${baseUrl}/images/ensembles/IMG-20251016-WA0012.jpg`,
    `${baseUrl}/images/ensembles/IMG-20251016-WA0013.jpg`,
    `${baseUrl}/images/ensembles/IMG-20251016-WA0014.jpg`,
    `${baseUrl}/images/ensembles/IMG-20251016-WA0015.jpg`,
    `${baseUrl}/images/ensembles/IMG-20251016-WA0016.jpg`,
    `${baseUrl}/images/ensembles/IMG-20251016-WA0017.jpg`,
    `${baseUrl}/images/ensembles/IMG-20251016-WA0018.jpg`,
    `${baseUrl}/images/ensembles/IMG-20251016-WA0019.jpg`,
    `${baseUrl}/images/ensembles/IMG-20251016-WA0021.jpg`,
    `${baseUrl}/images/ensembles/IMG-20251016-WA0022.jpg`,
    `${baseUrl}/images/ensembles/IMG-20251016-WA0023.jpg`,
    `${baseUrl}/images/ensembles/IMG-20251016-WA0029.jpg`,
    `${baseUrl}/images/ensembles/IMG-20251016-WA0030.jpg`,
    `${baseUrl}/images/ensembles/IMG-20251016-WA0031.jpg`,
    `${baseUrl}/images/ensembles/IMG-20251016-WA0032.jpg`,
    `${baseUrl}/images/ensembles/IMG-20251016-WA0033.jpg`,
    `${baseUrl}/images/ensembles/IMG-20251016-WA0034.jpg`,
    `${baseUrl}/images/ensembles/IMG-20251016-WA0035.jpg`,
    `${baseUrl}/images/ensembles/IMG-20251016-WA0036.jpg`,
    `${baseUrl}/images/ensembles/IMG-20251016-WA0037.jpg`,
    `${baseUrl}/images/ensembles/IMG-20251016-WA0038.jpg`,
    `${baseUrl}/images/ensembles/IMG-20251016-WA0039.jpg`,
    `${baseUrl}/images/ensembles/IMG-20251016-WA0040.jpg`,
    `${baseUrl}/images/ensembles/IMG-20251016-WA0041.jpg`,
    `${baseUrl}/images/ensembles/IMG-20251016-WA0042.jpg`,
    `${baseUrl}/images/ensembles/IMG-20251016-WA0043.jpg`,
    `${baseUrl}/images/ensembles/IMG-20251016-WA0044.jpg`,
    `${baseUrl}/images/ensembles/IMG-20251016-WA0045.jpg`,
    `${baseUrl}/images/ensembles/IMG-20251016-WA0046.jpg`,
    `${baseUrl}/images/ensembles/IMG-20251016-WA0047.jpg`,
    `${baseUrl}/images/ensembles/IMG-20251016-WA0048.jpg`,
    `${baseUrl}/images/ensembles/IMG-20251016-WA0049.jpg`,
    `${baseUrl}/images/ensembles/IMG-20251016-WA0050.jpg`,
    `${baseUrl}/images/ensembles/IMG-20251016-WA0051.jpg`,
    `${baseUrl}/images/ensembles/IMG-20251016-WA0052.jpg`,
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
