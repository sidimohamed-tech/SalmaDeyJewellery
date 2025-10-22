// app/(static)/faq/page.tsx
import { Link } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const WA = "https://wa.me/22226314595";
const EMAIL = "salma.deye@gmail.com";

export const metadata = {
  title: "FAQ — Salma Dey Jewellery",
  description:
    "Frequently Asked Questions about appointments, delivery, care and service.",
};

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20 min-h-screen">
        <div className="container mx-auto px-8 lg:px-16">
          {" "}
          {/* Décalage du texte vers la droite */}
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            FAQ
          </h1>
          <p className="mt-3 text-neutral-600">
            If you can’t find your answer here, message us on{" "}
            <a href={WA} className="text-amber-600 underline">
              WhatsApp
            </a>{" "}
            or email{" "}
            <a href={`mailto:${EMAIL}`} className="text-amber-600 underline">
              {EMAIL}
            </a>
            .
          </p>
          <section className="mt-12 space-y-10">
            <div>
              <h2 className="text-2xl font-semibold">
                How do I book an appointment?
              </h2>
              <p className="mt-2 text-neutral-700">
                Appointments are requested via{" "}
                <a href={WA} className="text-amber-600 underline">
                  WhatsApp
                </a>
                . We usually reply within <strong>2–3 hours</strong> during
                business days.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                Do you show prices online?
              </h2>
              <p className="mt-2 text-neutral-700">
                No. We don’t display prices online. For quotes and availability,
                message us on WhatsApp.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Do you offer delivery?</h2>
              <p className="mt-2 text-neutral-700">
                Yes. We can arrange <strong>in-person handover</strong> at our
                boutique, or coordinate with trusted{" "}
                <strong>delivery services</strong> upon request. Details are
                confirmed over WhatsApp during your consultation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                What payment methods are accepted?
              </h2>
              <p className="mt-2 text-neutral-700">
                Payments are discussed during your appointment. We’ll confirm
                accepted methods and any deposit terms directly with you.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                Can I return or exchange a bespoke piece?
              </h2>
              <p className="mt-2 text-neutral-700">
                <strong>Made-to-order and bespoke items are final sale</strong>{" "}
                and not refundable. We’ll align all details with you before
                production to ensure a perfect fit.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                How should I care for my jewellery?
              </h2>
              <ul className="mt-2 list-disc pl-6 text-neutral-700 space-y-1">
                <li>
                  Avoid exposure to perfume, cosmetics, seawater and chemicals.
                </li>
                <li>Store pieces separately; use a soft pouch or lined box.</li>
                <li>Clean gently with a soft lint-free cloth.</li>
                <li>
                  We recommend a yearly professional check for settings and
                  clasps.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                Do you publish client photos?
              </h2>
              <p className="mt-2 text-neutral-700">
                No. We <strong>do not use clients’ photos</strong> online or on
                social media.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                Where is your boutique?
              </h2>
              <p className="mt-2 text-neutral-700">
                Dey Mall, Avenue Mokhtar Daddah (Mauritania).
                <a
                  href="https://maps.app.goo.gl/2eg3WDJ88WGeQgWq6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
    inline-block
    text-[#B78915] font-medium
    underline underline-offset-4 decoration-[#B78915]
    hover:text-[#946d10] hover:decoration-[#946d10]
    transition-colors duration-200
    text-sm sm:text-base
  "
                >
                  Click here
                </a>
                {/* <Link href="/contact" className="text-amber-600 underline">
                  Contact
                </Link>{" "} */}
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
