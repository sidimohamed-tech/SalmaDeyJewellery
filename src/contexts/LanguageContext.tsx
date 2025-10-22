import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    "nav.home": "Home",
    "nav.jewellery": "Jewellery",
    "nav.maison": "The Maison",
    "nav.appointments": "Appointments",
    "nav.contact": "Contact",
    
    // Hero
    "hero.title": "Purity of Form.",
    "hero.subtitle": "Brilliance.",
    "hero.description": "Gold, diamonds and pearls — designed for women who value precision and restraint.",
    "hero.catalogue": "Explore Catalogue",
    "hero.appointment": "Book Appointment",
    
    // Collections
    "collections.title": "Our Collections",
    "collections.description": "Every piece is made to order, crafted with precision in our atelier.",
    "collections.rings": "Rings",
    "collections.rings.subtitle": "Timeless elegance",
    "collections.necklaces": "Necklaces",
    "collections.necklaces.subtitle": "Grace & refinement",
    "collections.bracelets": "Bracelets",
    "collections.bracelets.subtitle": "Subtle luxury",
    "collections.earrings": "Earrings",
    "collections.earrings.subtitle": "Delicate perfection",
    
    // WhatsApp Banner
    "banner.title": "No Prices Online",
    "banner.description": "Each piece is crafted to order. Message us on WhatsApp for quotes, availability, and to schedule a private viewing.",
    "banner.cta": "Message on WhatsApp",
    
    // Footer
    "footer.boutique": "Our Boutique",
    "footer.address": "Dey Mall, Avenue Mokhtar Daddah",
    "footer.city": "Nouakchott, Mauritania",
    "footer.appointment": "By appointment only",
    "footer.delivery": "No delivery • Made-to-order",
    "footer.follow": "Follow Us",
    "footer.info": "Information",
    "footer.faq": "FAQ",
    "footer.authenticity": "Authenticity",
    "footer.privacy": "Privacy Policy",
    "footer.cookies": "Cookies",
    "footer.rights": "All rights reserved.",
    
    // Contact Page
    "contact.title": "Contact Us",
    "contact.subtitle": "Visit our boutique in Nouakchott or reach out to us directly",
    "contact.boutique.title": "Our Boutique",
    "contact.boutique.name": "Salma Dey Jewellery",
    "contact.boutique.address": "Dey Mall, Avenue Mokhtar Daddah",
    "contact.boutique.city": "Nouakchott, Mauritania",
    "contact.hours": "Opening Hours",
    "contact.hours.appointment": "By appointment only",
    "contact.hours.note": "Please contact us to schedule your visit",
    "contact.whatsapp": "WhatsApp",
    "contact.whatsapp.cta": "Message on WhatsApp",
    "contact.location": "Visit Us",
    "contact.location.cta": "Open in Google Maps",
    "contact.important": "Important Information",
    "contact.important.1": "All pieces are made to order",
    "contact.important.2": "No prices displayed online",
    "contact.important.3": "No delivery service available",
    "contact.important.4": "Private viewings by appointment",
    
    // Other pages
    "jewellery.title": "Our Jewellery Collection",
    "jewellery.description": "Explore our exquisite collection of handcrafted pieces. Coming soon.",
    "maison.title": "The Maison",
    "maison.description": "Discover our heritage, craftsmanship, and international exhibitions. Coming soon.",
    "appointments.title": "Book an Appointment",
    "appointments.description": "Schedule a private viewing at our boutique. Coming soon.",
  },
  ar: {
    // Header
    "nav.home": "الرئيسية",
    "nav.jewellery": "المجوهرات",
    "nav.maison": "الدار",
    "nav.appointments": "المواعيد",
    "nav.contact": "اتصل بنا",
    
    // Hero
    "hero.title": "نقاء الشكل.",
    "hero.subtitle": "تألق.",
    "hero.description": "الذهب والماس واللؤلؤ — مصممة للنساء اللواتي يقدرن الدقة والتحفظ.",
    "hero.catalogue": "استكشف الكتالوج",
    "hero.appointment": "احجز موعداً",
    
    // Collections
    "collections.title": "مجموعاتنا",
    "collections.description": "كل قطعة مصنوعة حسب الطلب، مصنوعة بدقة في ورشتنا.",
    "collections.rings": "الخواتم",
    "collections.rings.subtitle": "أناقة خالدة",
    "collections.necklaces": "العقود",
    "collections.necklaces.subtitle": "رشاقة وتميز",
    "collections.bracelets": "الأساور",
    "collections.bracelets.subtitle": "رفاهية خفية",
    "collections.earrings": "الأقراط",
    "collections.earrings.subtitle": "كمال رقيق",
    
    // WhatsApp Banner
    "banner.title": "لا توجد أسعار على الإنترنت",
    "banner.description": "كل قطعة مصنوعة حسب الطلب. راسلنا على واتساب للحصول على الأسعار والتوافر وجدولة عرض خاص.",
    "banner.cta": "راسلنا على واتساب",
    
    // Footer
    "footer.boutique": "متجرنا",
    "footer.address": "دي مول، شارع المختار داداه",
    "footer.city": "نواكشوط، موريتانيا",
    "footer.appointment": "بموعد مسبق فقط",
    "footer.delivery": "لا توصيل • مصنوعة حسب الطلب",
    "footer.follow": "تابعنا",
    "footer.info": "معلومات",
    "footer.faq": "الأسئلة الشائعة",
    "footer.authenticity": "الأصالة",
    "footer.privacy": "سياسة الخصوصية",
    "footer.cookies": "ملفات تعريف الارتباط",
    "footer.rights": "جميع الحقوق محفوظة.",
    
    // Contact Page
    "contact.title": "اتصل بنا",
    "contact.subtitle": "قم بزيارة متجرنا في نواكشوط أو تواصل معنا مباشرة",
    "contact.boutique.title": "متجرنا",
    "contact.boutique.name": "مجوهرات السلامة الدي",
    "contact.boutique.address": "دي مول، شارع المختار داداه",
    "contact.boutique.city": "نواكشوط، موريتانيا",
    "contact.hours": "ساعات العمل",
    "contact.hours.appointment": "بموعد مسبق فقط",
    "contact.hours.note": "يرجى الاتصال بنا لتحديد موعد زيارتك",
    "contact.whatsapp": "واتساب",
    "contact.whatsapp.cta": "راسلنا على واتساب",
    "contact.location": "زرنا",
    "contact.location.cta": "افتح في خرائط جوجل",
    "contact.important": "معلومات هامة",
    "contact.important.1": "جميع القطع مصنوعة حسب الطلب",
    "contact.important.2": "لا توجد أسعار معروضة على الإنترنت",
    "contact.important.3": "لا تتوفر خدمة التوصيل",
    "contact.important.4": "المشاهدات الخاصة بموعد مسبق",
    
    // Other pages
    "jewellery.title": "مجموعة مجوهراتنا",
    "jewellery.description": "استكشف مجموعتنا الرائعة من القطع المصنوعة يدوياً. قريباً.",
    "maison.title": "الدار",
    "maison.description": "اكتشف تراثنا وحرفيتنا ومعارضنا الدولية. قريباً.",
    "appointments.title": "احجز موعداً",
    "appointments.description": "حدد موعد عرض خاص في متجرنا. قريباً.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved === "ar" || saved === "en") ? saved : "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
