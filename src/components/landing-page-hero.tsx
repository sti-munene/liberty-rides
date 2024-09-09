import React from "react";
import { Container } from "./container";
import { Heading, Text } from "./typography";
import Image from "next/image";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const LandingPageHero = () => {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-12 gap-4 items-center h-fit lg:h-[500px] py-16">
          <div className="col-span-12 lg:col-span-5">
            <div>
              <Heading as="h1" font="display" size="heading2">
                <span className="text-primary">Rent</span> a Car in Minutes
              </Heading>
              <Heading as="p" size="subtitle1">
                Experience the ultimate in comfort, performance, and
                sophistication with our luxury car rental service.
              </Heading>
            </div>

            <Link
              href={"/listings"}
              className={cn(buttonVariants(), "block w-fit mt-2")}
            >
              Get Started
            </Link>
          </div>

          <div className="row-start-1 lg:row-start-1 lg:col-start-7 col-span-12 lg:col-span-7">
            <Image
              className="w-full h-full"
              src="/car-right.png"
              height={500}
              width={500}
              alt="car"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
