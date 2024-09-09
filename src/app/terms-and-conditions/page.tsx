import { Container } from "@/components/container";
import { CallToAction } from "@/components/cta";
import { Heading, Text } from "@/components/typography";
import { formatDate, getPageBySlug, renderRichText } from "@/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Read the Terms and Conditions for renting a car with Liberty Rides. Understand our rental policies, requirements, insurance, liability, and more before booking your rental vehicle.",
};


const TermsAndConditionsPage = async () => {
  const pageContent = await getPageBySlug("terms-and-conditions");

  const htmlOutput = renderRichText(
    pageContent?.fields.pageContent?.content as any
  );

  return (
    <main>
      <Container>
        <div className="mt-8">
          <div>
            <Heading weight="medium" size="heading5">
              Terms & Conditions
            </Heading>

            <Text size="body2">
              Last updated on{" "}
              {formatDate(pageContent?.sys.updatedAt.toString() as any)}
            </Text>
          </div>
          <div
            className="mt-4 pb-24 prose prose-headings:text-black prose-p:my-2 prose-headings:font-medium"
            dangerouslySetInnerHTML={{ __html: htmlOutput }}
          />
        </div>
      </Container>

      <div className="bg-primary-50">
        <Container>
          <CallToAction />
        </Container>
      </div>
    </main>
  );
};

export default TermsAndConditionsPage;
