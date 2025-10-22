import { lazy, Suspense, useEffect, useState } from "react";
import { Carousel } from "./ui/carousel"; // Adjust the path based on the actual location of the Carousel component
import { Link } from "react-router-dom";
import { ResponsiveImage } from "./ResponsiveImage";

const MotionDiv = lazy(() =>
  import("framer-motion").then((mod) => ({ default: mod.motion.div }))
);

interface CategoryCardProps {
  title: string;
  subtitle: string;
  image: string;
  href: string;
  index: number;
}

export const CategoryCard = ({
  title,
  subtitle,
  image,
  href,
  index,
}: CategoryCardProps) => {
  const [images, setImages] = useState([]);
  console.log("mes images", image);

  useEffect(() => {
    // Liste des images aléatoires
    const randomImages = [
      //categorie Sets
      "http://localhost:3000/images/ensembles/IMG-20251016-WA0001.jpg",
      "http://localhost:3000/images/ensembles/IMG-20251016-WA0006.jpg",
      "http://localhost:3000/images/ensembles/IMG-20251016-WA0008.jpg",
      //categorie Earrings and Rings
      "http://localhost:3000/images/boucles%20d'oreille%20et%20bagues/IMG-20251016-WA0058.jpg",
      "http://localhost:3000/images/boucles%20d'oreille%20et%20bagues/IMG-20251016-WA0064.jpg",
      "http://localhost:3000/images/boucles%20d'oreille%20et%20bagues/IMG-20251016-WA0079.jpg",
      //categorie autres
      "http://localhost:3000/images/autres/IMG-20251016-WA0020.jpg",
      "http://localhost:3000/images/autres/IMG-20251016-WA0027.jpg",
      "http://localhost:3000/images/autres/IMG-20251016-WA0028.jpg",
    ];
    // setImages(randomImages.sort(() => Math.random() - 0.5)); // Mélange aléatoire
  }, []);
  return (
    <Suspense
      fallback={<div className="aspect-square bg-secondary animate-pulse" />}
    >
      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <Link to={href} className="group block">
          <div className="relative overflow-hidden bg-secondary border border-border hover:border-gold transition-smooth">
            {/* Image */}

            <div className="aspect-square overflow-hidden">
              <ResponsiveImage
                src={image}
                alt={`${title} - Luxury jewellery collection by Salma Deyyy`}
                width={400}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
              />
            </div>

            {/* Content */}
            <div className="p-6 lg:p-8 text-center border-t border-gold/20">
              <h3 className="text-xl lg:text-2xl font-serif text-foreground mb-2">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground">{subtitle}</p>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 border-2 border-gold opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none" />
          </div>
        </Link>
      </MotionDiv>
    </Suspense>
  );
};
