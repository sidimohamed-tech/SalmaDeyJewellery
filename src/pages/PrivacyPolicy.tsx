import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const EMAIL = "salma.deye@gmail.com";

export const metadata = {
  title: "Privacy Policy — Salma Dey Jewellery",
  description: "How we collect, use and protect your personal data.",
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
            Privacy Policy
          </h1>
          <p className="mt-4 text-neutral-700">
            This website is operated by <strong>Salma Dey Jewellery</strong>{" "}
            (Mauritania). You can contact us at{" "}
            <a className="text-amber-600 underline" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
            . The site is intended for a general audience.
          </p>
          <section className="mt-10 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold">Data We Collect</h2>
              <ul className="mt-2 list-disc pl-6 text-neutral-700 space-y-1">
                <li>
                  <strong>Appointments form</strong>: name, email, phone,
                  message.
                </li>
                <li>
                  <strong>WhatsApp</strong>: conversation content and metadata
                  handled by WhatsApp (Meta).
                </li>
                <li>
                  <strong>Technical logs</strong>: server and security logs for
                  site reliability.
                </li>
              </ul>
              <p className="mt-2 text-neutral-700">
                We do not run a newsletter. Any analytics or advertising
                technologies are disabled unless expressly enabled in the future
                subject to consent.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Purposes & Legal Basis</h2>
              <ul className="mt-2 list-disc pl-6 text-neutral-700 space-y-1">
                <li>
                  <strong>Process appointment requests / client support</strong>{" "}
                  — legitimate interest and pre-contractual steps.
                </li>
                <li>
                  <strong>Security and fraud prevention</strong> — legitimate
                  interest.
                </li>
                <li>
                  <strong>Cookies</strong>: only essential cookies are used (see
                  Cookies Policy).
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Processors & Transfers</h2>
              <p className="mt-2 text-neutral-700">
                Hosting and infrastructure are provided by <strong>OVH</strong>.
                WhatsApp is operated by Meta. Where data is processed outside
                your country, appropriate safeguards apply as provided by those
                services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Retention</h2>
              <p className="mt-2 text-neutral-700">
                Appointment records and related communications are kept for up
                to <strong>36 months</strong>. Security logs may be kept for up
                to 12 months.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Your Rights</h2>
              <p className="mt-2 text-neutral-700">
                You may request access, rectification or deletion of your data,
                object to processing, or request portability by emailing{" "}
                <a
                  className="text-amber-600 underline"
                  href={`mailto:${EMAIL}`}
                >
                  {EMAIL}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Security</h2>
              <p className="mt-2 text-neutral-700">
                We use HTTPS and restrict access to personal data. No method is
                100% secure, but we apply reasonable safeguards.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Updates</h2>
              <p className="mt-2 text-neutral-700">
                We may update this policy; material changes will be reflected on
                this page with an updated date.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
