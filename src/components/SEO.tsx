import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  schema?: object;
}

export const SEO = ({ title, description, canonical, ogImage = "/logo.jpg", schema }: SEOProps) => {
  const { language } = useLanguage();
  const siteUrl = window.location.origin;
  const currentUrl = window.location.href;
  const canonicalUrl = canonical || currentUrl;

  useEffect(() => {
    // Update meta tags
    document.title = title;
    
    const updateMeta = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let element = document.querySelector(selector);
      
      if (!element) {
        element = document.createElement("meta");
        if (property) {
          element.setAttribute("property", name);
        } else {
          element.setAttribute("name", name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Standard meta tags
    updateMeta("description", description);
    
    // Open Graph
    updateMeta("og:title", title, true);
    updateMeta("og:description", description, true);
    updateMeta("og:url", canonicalUrl, true);
    updateMeta("og:image", `${siteUrl}${ogImage}`, true);
    updateMeta("og:type", "website", true);
    updateMeta("og:locale", language === "ar" ? "ar_SA" : "en_US", true);
    
    // Twitter
    updateMeta("twitter:card", "summary_large_image");
    updateMeta("twitter:title", title);
    updateMeta("twitter:description", description);
    updateMeta("twitter:image", `${siteUrl}${ogImage}`);

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);

    // Hreflang links
    const updateHreflang = (lang: string, url: string) => {
      const selector = `link[rel="alternate"][hreflang="${lang}"]`;
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", "alternate");
        element.setAttribute("hreflang", lang);
        document.head.appendChild(element);
      }
      element.setAttribute("href", url);
    };

    const pathname = window.location.pathname.replace(/^\/ar/, "");
    updateHreflang("en", `${siteUrl}${pathname}`);
    updateHreflang("ar", `${siteUrl}/ar${pathname}`);
    updateHreflang("x-default", `${siteUrl}${pathname}`);

    // Schema.org JSON-LD
    if (schema) {
      let schemaScript = document.getElementById("schema-org") as HTMLScriptElement;
      if (!schemaScript) {
        schemaScript = document.createElement("script");
        schemaScript.id = "schema-org";
        schemaScript.type = "application/ld+json";
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema);
    }
  }, [title, description, canonicalUrl, ogImage, schema, language, siteUrl]);

  return null;
};

// Schema.org helpers
export const createOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "JewelryStore",
  name: "Salma Dey Jewellery",
  description: "High jewellery crafted for women who value precision and restraint. Gold, diamonds and pearls — made to order in Mauritania.",
  url: window.location.origin,
  logo: `${window.location.origin}/logo.jpg`,
  image: `${window.location.origin}/logo.jpg`,
  telephone: "+22226314595",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Dey Mall, Avenue Mokhtar Daddah",
    addressLocality: "Nouakchott",
    addressCountry: "MR"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "18.0865",
    longitude: "-15.9785"
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00"
  },
  priceRange: "$$$",
  sameAs: [
    "https://instagram.com/salmadeyjewellery",
    "https://snapchat.com/add/salmadeyjewellery"
  ]
});

export const createCollectionPageSchema = (category?: string) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: category ? `${category} Collection` : "Jewellery Collection",
  description: "Explore our exquisite collection of handcrafted luxury jewellery. Every piece is made to order.",
  url: window.location.href,
  isPartOf: {
    "@type": "WebSite",
    name: "Salma Dey Jewellery",
    url: window.location.origin
  }
});

export const createProductSchema = (product: {
  name: string;
  description: string;
  image: string;
  category: string;
  material?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: product.name,
  description: product.description,
  image: `${window.location.origin}${product.image}`,
  category: product.category,
  brand: {
    "@type": "Brand",
    name: "Salma Dey Jewellery"
  },
  ...(product.material && { material: product.material })
});
