import React from "react";
import "./Collections.css";

const Collections = () => {
  const categories = [
    {
      title: "Sets",
      image: "/produits/ensembles/IMG-20251016-WA0014.jpg",
      link: "/jewellery/sets",
    },
    {
      title: "Earrings & Rings",
      image: "/produits/ensembles/IMG-20251016-WA0016.jpg",
      link: "/jewellery/earrings-and-rings",
    },
    {
      title: "Others",
      image: "/produits/autres/IMG-20251016-WA0020.jpg",
      link: "/jewellery/others",
    },
  ];

  return (
    <section className="collections" aria-labelledby="collections-title">
      <h2 id="collections-title">Our Collections</h2>

      <div className="collections-grid">
        {categories.map((category, index) => (
          <article className="card" key={index} role="article" aria-label={`${category.title} collection`}>
            <div
              className="card__media"
              style={{ backgroundImage: `url(${category.image})` }}
            />
            <div className="card__content">
              
              <h3 className="card__title">{category.title}</h3>
              <a className="card__cta" href={category.link}>
                View the collection
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Collections;
