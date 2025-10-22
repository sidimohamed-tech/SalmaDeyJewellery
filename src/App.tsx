import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { initAnalytics } from "@/hooks/useAnalytics";
import Index from "./pages/Index";
import Jewellery from "./pages/Jewellery";
import Maison from "./pages/Maison";
import Appointments from "./pages/Appointments";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Sets from "./pages/Sets";
import EarringsAndRings from "./pages/EarringsAndRings";
import Others from "./pages/Others";
import Page from "./pages/FAQ";
import FAQ from "./pages/FAQ";
import Authenticity from "./pages/Authenticity";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Cookies from "./pages/Cookies";
import HomePage from "./pages/HomePage";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                {/* English Routes */}
                <Route path="/" element={<Index />} />
                <Route path="/jewellery" element={<Jewellery />} />
                <Route path="/jewellery/sets" element={<Sets />} />
                <Route
                  path="/jewellery/earrings-and-rings"
                  element={<EarringsAndRings />}
                />
                <Route path="/jewellery/others" element={<Others />} />
                <Route path="/maison" element={<Maison />} />
                <Route path="/appointments" element={<Appointments />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/authenticity" element={<Authenticity />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/cookies" element={<Cookies />} />
                {/* Arabic Routes (localized URLs) */}
                <Route path="/ar" element={<Index />} />
                <Route path="/ar/jewellery" element={<Jewellery />} />
                <Route path="/ar/jewellery/sets" element={<Sets />} />
                <Route
                  path="/ar/jewellery/earrings-and-rings"
                  element={<EarringsAndRings />}
                />
                <Route path="/ar/jewellery/others" element={<Others />} />
                <Route path="/ar/maison" element={<Maison />} />
                <Route path="/ar/appointments" element={<Appointments />} />
                <Route path="/ar/contact" element={<Contact />} />

                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </LanguageProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
