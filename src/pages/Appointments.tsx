import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { SEO, createOrganizationSchema } from "@/components/SEO";
import { usePageView } from "@/hooks/useAnalytics";
import { useState } from "react";

const Appointments = () => {
  const { t } = useLanguage();
  usePageView();

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleWhatsAppRedirect = () => {
    const message = `Hello, I would like to book an appointment on ${selectedDate} at ${selectedTime}.`;
    const whatsappURL = `https://wa.me/22226314595?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="min-h-screen">
      <SEO
        title={`${t("appointments.title")} | Salma Dey Jewellery`}
        description={t("appointments.description")}
        schema={createOrganizationSchema()}
      />
      <Header />
      <main className="pt-32 pb-20 min-h-screen">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-serif mb-8 text-center">
            {t("appointments.title")}
          </h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
            {t("appointments.description")}
          </p>

          <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <label className="block mb-4">
              <span className="text-gray-700">Date:</span>
              <input
                type="date"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-gold focus:ring-opacity-50"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </label>

            <label className="block mb-4">
              <span className="text-gray-700">Heure:</span>
              <input
                type="time"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-gold focus:ring-opacity-50"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              />
            </label>

            <button
              onClick={handleWhatsAppRedirect}
              className="w-full bg-gold text-white py-2 px-4 rounded-md shadow-md hover:bg-gold-dark focus:outline-none focus:ring focus:ring-gold focus:ring-opacity-50"
            >
              Envoyer sur WhatsApp
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Appointments;
