import { Container } from "../container";
import { Heading, Text } from "../typography";

export const HeaderContactInformation = () => {
  return (
    <div className="bg-black text-white hidden lg:block py-2">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <Heading size="subtitle1" weight="medium">
              Get a Quote
            </Heading>
          </div>
          <div className="flex items-center justify-between gap-2">
            <a
              className="text-current hover:text-primary-400"
              href={`mailto:${process.env.NEXT_PUBLIC_BUSINESS_EMAIL || ""}`}
            >
              {process.env.NEXT_PUBLIC_BUSINESS_EMAIL || ""}
            </a>
            <a
              className="text-current hover:text-primary-400"
              href={`tel:${process.env.NEXT_PUBLIC_BUSINESS_PHONE || ""}`}
            >
              {process.env.NEXT_PUBLIC_BUSINESS_PHONE || ""}
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};
