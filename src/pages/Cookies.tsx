// app/(static)/cookies/page.tsx
import { Link } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Cookies — Salma Dey Jewellery",
  description: "Information about cookies used on this site and your choices.",
};

const Cookies = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20 min-h-screen">
        <div className="container mx-auto px-8 lg:px-16">
          {" "}
          {/* Décalage du texte vers la droite */}
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Cookies Policy
          </h1>
          <p className="mt-4 text-neutral-700">
            We use <strong>essential cookies only</strong> to operate this
            website. Consent is stored for <strong>6 months</strong>. You can
            review your choice anytime on{" "}
            <Link href="/cookies/settings" className="text-amber-600 underline">
              Cookies Settings
            </Link>
            .
          </p>
          <section className="mt-10 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold">What are cookies?</h2>
              <p className="mt-2 text-neutral-700">
                Cookies are small text files stored on your device to enable
                core features (for example, remembering your language). We do
                not use analytics or advertising cookies at this time.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Categories</h2>
              <ul className="mt-2 list-disc pl-6 text-neutral-700 space-y-1">
                <li>
                  <strong>Essential</strong> — strictly necessary for security,
                  routing and basic preferences.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Your choices</h2>
              <p className="mt-2 text-neutral-700">
                Because only essential cookies are used, there is no option to
                disable them via this site. You may adjust your browser settings
                to block cookies, but parts of the site may not work.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Retention</h2>
              <p className="mt-2 text-neutral-700">
                Consent records (where applicable) are kept for up to 6 months.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;
