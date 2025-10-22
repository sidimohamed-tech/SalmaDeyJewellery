import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Carousel } from "@/components/ui/carousel";

const HomePage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Liste des images aléatoires
    const randomImages = [
      "http://localhost:3000/images/ensembles/IMG-20251016-WA0001.jpg",
      "http://localhost:3000/images/boucles%20d'oreille%20et%20bagues/IMG-20251016-WA0053.jpg",
      "http://localhost:3000/images/ensembles/IMG-20251016-WA0002.jpg",
      "http://localhost:3000/images/boucles%20d'oreille%20et%20bagues/IMG-20251016-WA0054.jpg",
      "http://localhost:3000/images/ensembles/IMG-20251016-WA0003.jpg",
    ];
    setImages(randomImages.sort(() => Math.random() - 0.5)); // Mélange aléatoire
  }, []);

  return (
    <div className="min-h-screen">
      <SEO
        title="Salma Dey Jewellery | Luxury Gold, Diamond and Pearl Jewellery"
        description="Explore our collection of luxury gold, diamond, and pearl jewellery."
      />
      <Header />
      <main className="pt-32 pb-20 min-h-screen">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-serif mb-8 text-center">
            Purity of Form. Brilliance.
          </h1>
          <p className="text-lg text-center mb-8">
            Gold, diamonds and pearls — designed for women who value precision
            and restraint.
          </p>
          <div className="mb-8">
            <Carousel images={images} />
          </div>
          <div className="flex justify-center gap-4">
            <button className="btn btn-primary">Explore Catalogue</button>
            <button className="btn btn-secondary">Book Appointment</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
