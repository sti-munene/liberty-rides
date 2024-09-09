import { Container } from "@/components/container";
import { CallToAction } from "@/components/cta";
import { LandingPageHero } from "@/components/landing-page-hero";
import { AboutUs } from "@/components/landing-page-sections/about-us";
import CarListings from "@/components/landing-page-sections/car-listings";
import { FAQSection } from "@/components/landing-page-sections/faq";
import { HowItWorks } from "@/components/landing-page-sections/how-it-works";
import { Reviews } from "@/components/landing-page-sections/reviews";
import { WhyUsSection } from "@/components/landing-page-sections/why-us-section";
import { getListings } from "@/utils/data-fetching/getCarListings";

export default async function Homepage() {
  const listings = await getListings(6);

  return (
    <>
      <LandingPageHero />

      <main>
        {/* About Us */}
        <div className="bg-slate-100">
          <Container>
            <AboutUs />
          </Container>
        </div>

        {/* How it Works */}
        <div>
          <Container>
            <HowItWorks />
          </Container>
        </div>

        {/* Listings */}
        <div className="bg-white">
          <Container>
            <CarListings listings={listings as any} />
          </Container>
        </div>

        {/* Why Us Section */}
        <div className="bg-primary">
          <Container>
            <WhyUsSection />
          </Container>
        </div>

        <div>
          <Container>
            <FAQSection />
          </Container>
        </div>

        {/* Reviews Section */}
        <div className="bg-black">
          <Container>
            <Reviews />
          </Container>
        </div>

        {/* CTA Section */}
        <div className="bg-primary-50">
          <Container>
            <CallToAction />
          </Container>
        </div>
      </main>
    </>
  );
}
