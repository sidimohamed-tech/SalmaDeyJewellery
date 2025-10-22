import React from "react";
import "./Collections.css";

const Collections = () => {
  const categories = [
    {
      title: "Sets",
      image: "http://localhost:3000/images/ensembles/IMG-20251016-WA0014.jpg",
      link: "/jewellery/sets",
    },
    {
      title: "Earrings & Rings",
      image: "https://storage.googleapis.com/ghrini-images-prod/produits/boucles%20d%27oreille%20et%20bagues/IMG-20251016-WA0064.jpg?GoogleAccessId=ghrini-images-service%40mes-photos-475322.iam.gserviceaccount.com&Expires=1761100688&Signature=qefh9Q1L75BKlC9I2Gikxs9qVgw5EHmPKprGqzWxvuE2Er5LrEpAZkqp4Z5FWypIFo1NuytIXhlwVH%2FrTrjVQxMpacZTdfT5dF2cEeYHnC9RnxQgy3Q2%2B83To%2BUaBaIm5BpiepGlb29fcxlPl4IFV%2FpyLLuTK2%2FilAHW%2FmTmN%2FlBnVHrQ0dxWWtdy%2B%2FpWZPmSQCXFUQ2oRvUYD9yGqa7qYcD2R%2F1Cw0BWQW7QcyKuqw%2FfMY2lFChkRFOWnW31Ex%2FwUJ91Sewx0WI9ijf4O3f7%2FPGMf0xbZp%2Bv9pjZAZOtuJknItgtVnLiYcwPdWhGKk8UUQb%2FLTwL26a5D2r%2FzKJpA%3D%3D",
      link: "/jewellery/earrings-and-rings",
    },
    {
      title: "Others",
      image: "http://localhost:3000/images/autres/IMG-20251016-WA0020.jpg",
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
