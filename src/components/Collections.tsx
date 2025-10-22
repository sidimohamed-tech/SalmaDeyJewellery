import React from "react";
import "./Collections.css"; // Assurez-vous de créer ce fichier pour le style

const Collections = () => {
  const categories = [
    {
      title: "Sets",
      description:
        "Luxurious matched sets, made to measure with attention to every detail.",
      image:
        "https://images.unsplash.com/photo-1541920545-17f3527f3f6a?auto=format&fit=crop&w=1600&q=80",
      link: "/collections/sets",
    },
    {
      title: "Earrings & Rings",
      description:
        "Delicate earrings and statement rings crafted from premium materials.",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=80",
      link: "/collections/earrings-rings",
    },
    {
      title: "Others",
      description:
        "Unique pieces and bespoke requests — designed to your taste.",
      image:
        "https://images.unsplash.com/photo-1520975915797-3f94b8d4b2b4?auto=format&fit=crop&w=1600&q=80",
      link: "/collections/others",
    },
  ];

  return (
    <section className="collections" aria-labelledby="collections-title">
      <h2 id="collections-title">Our Collections</h2>
      <p className="lead">
        Every piece is made to order, crafted with precision in our atelier.
      </p>

      <div className="collections-grid">
        {categories.map((category, index) => (
          <article
            className="card"
            key={index}
            role="article"
            aria-label={`${category.title} collection`}
          >
            <div
              className="card__media"
              style={{ backgroundImage: `url(${category.image})` }}
            ></div>
            <div className="card__overlay"></div>
            <div className="card__content">
              <h3 className="card__title">{category.title}</h3>
              <p className="card__desc">{category.description}</p>
              <a className="card__cta" href={category.link}>
                Voir la collection
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Collections;
