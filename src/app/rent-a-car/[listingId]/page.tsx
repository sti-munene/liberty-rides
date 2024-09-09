import { Container } from "@/components/container";
import { Heading } from "@/components/typography";
import { getCarById } from "@/utils";

const RentSingleCarPage = async ({
  params,
}: {
  params: { listingId: string };
}) => {
  const carListing = await getCarById(params.listingId);

  return (
    <main>
      <Container>
        <div className="mt-8 pb-24">
          <Heading weight="medium" size="heading5">
            {carListing?.fields?.bodyStyle}
          </Heading>

          <div className="mt-8"></div>
        </div>
      </Container>
    </main>
  );
};

export default RentSingleCarPage;
