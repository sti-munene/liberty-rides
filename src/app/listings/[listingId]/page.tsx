import { Container } from "@/components/container";
import { CallToAction } from "@/components/cta";
import { CarRentalForm } from "@/components/forms/rental-form";
import { ListingImageSlider } from "@/components/listing-detail-page-sections/image-slider";
import { StartChat } from "@/components/start-chat";
import { Heading, Text } from "@/components/typography";
import { getCarById } from "@/utils";
import Image from "next/image";
import { type Asset } from "contentful";

interface PageParams {
  listingId: string;
}

export async function generateMetadata({ params }: { params: PageParams }) {
  const carListing = await getCarById(params.listingId);

  return {
    title: carListing?.fields?.title,
    description: carListing?.fields?.description,
  };
}

const ListingDetailPage = async ({ params }: { params: PageParams }) => {
  const carListing = await getCarById(params.listingId);

  return (
    <main>
      <Container>
        <div className="pb-24">
          <div className="grid grid-cols-12 gap-4">
            <div className="pt-8 col-span-12 lg:col-span-7 w-full">
              <Heading weight="medium" size="heading6">
                {carListing?.fields?.title as any}
              </Heading>

              {carListing?.fields?.images && (
                <ListingImageSlider
                  images={carListing?.fields?.images as any}
                />
              )}

              {!carListing?.fields?.images &&
                carListing?.fields?.featuredImage && (
                  <Image
                    height={500}
                    width={500}
                    alt=""
                    className="h-[320px] lg:h-[420px] w-full object-cover object-center rounded-lg mt-4"
                    src={`https:${
                      (
                        carListing?.fields?.featuredImage
                          ?.fields as Asset["fields"]
                      )?.file?.url as any
                    }`}
                  />
                )}

              <div className="mt-8 grid grid-cols-3 md:grid-cols-5 gap-2">
                <div>
                  <Text size="body2" as="p" weight="semibold">
                    Body Style
                  </Text>
                  <Text size="body3">
                    {carListing?.fields?.bodyStyle as any}
                  </Text>
                </div>

                {carListing?.fields?.isElectric && (
                  <div>
                    <Text size="body2" as="p" weight="semibold">
                      Electric
                    </Text>
                    <Text size="body3">Yes</Text>
                  </div>
                )}

                {!carListing?.fields?.isElectric && (
                  <>
                    <div>
                      <Text size="body2" as="p" weight="semibold">
                        Fuel Type
                      </Text>
                      <Text size="body3">{carListing?.fields?.fuelType}</Text>
                    </div>

                    <div>
                      <Text size="body2" as="p" weight="semibold">
                        Transmission
                      </Text>
                      <Text size="body3">
                        {carListing?.fields?.transmission}
                      </Text>
                    </div>
                  </>
                )}

                {carListing?.fields?.chauffeurDriven && (
                  <div>
                    <Text size="body2" as="p" weight="semibold">
                      Chauffeur Driven
                    </Text>
                    <Text size="body3">Yes</Text>
                  </div>
                )}

                <div>
                  <Text size="body2" as="p" weight="semibold">
                    Manufacture Year
                  </Text>
                  <Text size="body3">
                    {carListing?.fields?.yearOfManufacture}
                  </Text>
                </div>

                <div>
                  <Text size="body2" as="p" weight="semibold">
                    Seating Capacity
                  </Text>
                  <Text size="body3">
                    {carListing?.fields?.seatingCapacity}
                  </Text>
                </div>
              </div>

              <div className="mt-8">
                <Text>{carListing?.fields?.description as any}</Text>
              </div>

              <div className="mt-8">
                <StartChat title={carListing?.fields?.title as any} />
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5 pt-8">
              <Heading as="h2" size="heading6" weight="medium">
                Reserve Car
              </Heading>

              <div>
                <CarRentalForm />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="bg-primary text-white">
        <Container>
          <CallToAction />
        </Container>
      </div>
    </main>
  );
};

export default ListingDetailPage;
