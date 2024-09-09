import React from "react";
import { Container } from "../container";
import { Heading, Text } from "../typography";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="bg-black text-white">
      <Container>
        <div className="grid grid-cols-10 gap-2 py-8">
          <div className="col-span-12 md:col-span-4">
            <Heading size="heading4" font="display">
              Liberty Rides
            </Heading>
          </div>

          <div className="col-span-12 md:col-span-3">
            <Heading size="heading6" as="h6">
              Quick Links
            </Heading>

            <div className="mt-4 flex flex-col align-start gap-2">
              <Link className="link" href="/listings">
                Cars for Hire
              </Link>

              <Link className="link" href="/terms-and-conditions">
                Terms & Conditions
              </Link>
            </div>
          </div>

          <div className="col-span-12 md:col-span-3">
            <Heading size="heading6" as="h6">
              Working Hours
            </Heading>

            <div className="mt-4">
              <Text>We are Open Mon - Sat</Text>
              <Text>8AM to 5PM</Text>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
