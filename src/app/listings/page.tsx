import { CarListing } from "@/components/car-listing";
import { Container } from "@/components/container";
import { Heading } from "@/components/typography";
import { getListings } from "@/utils/data-fetching/getCarListings";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cars for Hire",
  description:
    "Browse our car rentals and find the perfect vehicle for your needs. Easy search and booking.",
};

const CarListingsPage = async () => {
  const listings = await getListings(12);

  return (
    <main>
      <Container>
        <div className="pt-8 pb-24">
          <Heading size="heading6" weight="bold">
            Listings
          </Heading>

          <div className="grid grid-cols-12 gap-4 mt-8">
            {listings.map((listing: any) => {
              return <CarListing key={listing.sys.id} listing={listing} />;
            })}
          </div>
        </div>
      </Container>
    </main>
  );
};

export default CarListingsPage;
