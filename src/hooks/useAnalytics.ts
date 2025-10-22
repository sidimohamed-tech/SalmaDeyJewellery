import { useEffect } from "react";

// Analytics event types
export type AnalyticsEvent = 
  | "whatsapp_click"
  | "appointment_submit"
  | "category_view"
  | "product_view"
  | "video_play"
  | "page_view"
  | "form_submit"
  | "button_click"
  | "navigation";

interface EventParams {
  location?: string;
  productId?: string;
  category?: string;
  success?: boolean;
  [key: string]: any;
}

// Track event function
export const trackEvent = (eventName: AnalyticsEvent, params?: EventParams) => {
  // Google Analytics 4
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, params);
  }

  // Meta Pixel
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", eventName, params);
  }

  // TikTok Pixel
  if (typeof window !== "undefined" && (window as any).ttq) {
    (window as any).ttq.track(eventName, params);
  }

  // Console log in development
  if (import.meta.env.DEV) {
    console.log(`📊 Analytics Event: ${eventName}`, params);
  }
};

// Initialize analytics
export const initAnalytics = () => {
  const GA4_ID = import.meta.env.VITE_GA4_ID;
  const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID;
  const TIKTOK_PIXEL_ID = import.meta.env.VITE_TIKTOK_PIXEL_ID;

  // Google Analytics 4
  if (GA4_ID) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
    document.head.appendChild(script);

    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).gtag = function() {
      (window as any).dataLayer.push(arguments);
    };
    (window as any).gtag("js", new Date());
    (window as any).gtag("config", GA4_ID);
  }

  // Meta Pixel
  if (META_PIXEL_ID) {
    (function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    (window as any).fbq("init", META_PIXEL_ID);
    (window as any).fbq("track", "PageView");
  }

  // TikTok Pixel
  if (TIKTOK_PIXEL_ID) {
    (function(w: any, d: any, t: any) {
      w.TiktokAnalyticsObject = t;
      const ttq = (w[t] = w[t] || []);
      (ttq.methods = [
        "page",
        "track",
        "identify",
        "instances",
        "debug",
        "on",
        "off",
        "once",
        "ready",
        "alias",
        "group",
        "enableCookie",
        "disableCookie",
      ]),
        (ttq.setAndDefer = function(t: any, e: any) {
          t[e] = function() {
            t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
          };
        });
      for (let i = 0; i < ttq.methods.length; i++)
        ttq.setAndDefer(ttq, ttq.methods[i]);
      (ttq.instance = function(t: any) {
        const e = ttq._i[t] || [];
        for (let n = 0; n < ttq.methods.length; n++)
          ttq.setAndDefer(e, ttq.methods[n]);
        return e;
      }),
        (ttq.load = function(e: any, n: any) {
          const i = "https://analytics.tiktok.com/i18n/pixel/events.js";
          (ttq._i = ttq._i || {}),
            (ttq._i[e] = []),
            (ttq._i[e]._u = i),
            (ttq._t = ttq._t || {}),
            (ttq._t[e] = +new Date()),
            (ttq._o = ttq._o || {}),
            (ttq._o[e] = n || {});
          const o = document.createElement("script");
          (o.type = "text/javascript"),
            (o.async = !0),
            (o.src = i + "?sdkid=" + e + "&lib=" + t);
          const a = document.getElementsByTagName("script")[0];
          a.parentNode!.insertBefore(o, a);
        });
      ttq.load(TIKTOK_PIXEL_ID);
      ttq.page();
    })(window, document, "ttq");
  }
};

// Hook for page view tracking
export const usePageView = () => {
  useEffect(() => {
    trackEvent("page_view", {
      page_path: window.location.pathname,
      page_title: document.title,
    });
  }, []);
};

// Hook for WhatsApp click tracking
export const useWhatsAppTracking = () => {
  return (location: string, productId?: string) => {
    trackEvent("whatsapp_click", { location, productId });
  };
};

// Hook for category view tracking
export const useCategoryTracking = () => {
  return (category: string) => {
    trackEvent("category_view", { category });
  };
};

// Hook for appointment tracking
export const useAppointmentTracking = () => {
  return (success: boolean) => {
    trackEvent("appointment_submit", { success });
  };
};
