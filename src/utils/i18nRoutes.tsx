import { useLanguage } from "@/contexts/LanguageContext";
import { ReactNode, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface LocalizedRouteProps {
  children: ReactNode;
}

/**
 * Wrapper component that handles localized routing
 * Redirects to /ar/... for Arabic language
 */
export const LocalizedRoute = ({ children }: LocalizedRouteProps) => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const isArPath = currentPath.startsWith("/ar");
    
    // If language is Arabic and not on /ar path, redirect
    if (language === "ar" && !isArPath && currentPath !== "/") {
      const arPath = `/ar${currentPath}`;
      navigate(arPath, { replace: true });
    }
    
    // If language is English and on /ar path, redirect to non-ar
    if (language === "en" && isArPath) {
      const enPath = currentPath.replace(/^\/ar/, "") || "/";
      navigate(enPath, { replace: true });
    }
  }, [language, location, navigate]);

  return <>{children}</>;
};

/**
 * Get localized path based on current language
 */
export const getLocalizedPath = (path: string, language: string): string => {
  if (language === "ar" && !path.startsWith("/ar")) {
    return `/ar${path}`;
  }
  if (language === "en" && path.startsWith("/ar")) {
    return path.replace(/^\/ar/, "") || "/";
  }
  return path;
};
