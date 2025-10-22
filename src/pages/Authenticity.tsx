import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Authenticity = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20 min-h-screen">
        <div className="container mx-auto px-8 lg:px-16">
          {" "}
          {/* Décalage du texte vers la droite */}
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Authenticity
          </h1>
          <p className="mt-4 text-neutral-700">
            Each Salma Dey Jewellery creation is crafted to order using precious
            materials. We maintain strict sourcing and atelier standards to
            protect the integrity of our work.
          </p>
          <section className="mt-10 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold">Certification</h2>
              <p className="mt-2 text-neutral-700">
                Pieces are{" "}
                <strong>certified by partner factories in the Emirates</strong>.
                Upon request, we can provide project documentation related to
                material specifications and workmanship.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Materials</h2>
              <p className="mt-2 text-neutral-700">
                We work with gold (18K/21K/22K/24K), diamonds and natural
                pearls. Specifications for each piece are discussed during your
                consultation and documented with your order.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Warranty</h2>
              <p className="mt-2 text-neutral-700">
                At this time,{" "}
                <strong>we do not offer a commercial warranty</strong>.
                Production quality is controlled by our ateliers; any
                post-delivery issues are handled on a case-by-case basis via our
                service channel.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Aftercare & Repairs</h2>
              <p className="mt-2 text-neutral-700">
                We provide aftercare guidance and can organise repairs or
                adjustments where feasible. Timeframes and costs are confirmed
                after assessment.
              </p>
            </div>

            <div className="border-l-4 border-amber-600 pl-4">
              <p className="text-neutral-700">
                <strong>Made-to-order policy:</strong> bespoke pieces are final
                sale and non-refundable. Please review all details with our team
                before confirming your order.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Authenticity;
