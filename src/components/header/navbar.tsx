import React from "react";
import { Container } from "../container";
import Link from "next/link";
import { Heading } from "../typography";
import { MobileMenu } from "../mobile-menu/mobile-menu";

export const Navbar = () => {
  return (
    <div className="border-b sticky top-0 bg-white text-black">
      <Container>
        <div className="h-16 flex items-center justify-between">
          <div>
            <Link href="/" className="hover:text-primary focus:text-primary">
              <Heading size="heading6" font="display">
                Liberty Rides
              </Heading>
            </Link>
          </div>

          <div className="block md:hidden">
            <MobileMenu />
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Link
              className="font-medium hover:text-primary-400"
              href="/listings"
            >
              Cars for Hire
            </Link>

            <Link
              className="font-medium hover:text-primary-400"
              href="/terms-and-conditions"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
