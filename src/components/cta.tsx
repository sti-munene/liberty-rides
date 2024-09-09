import React from "react";
import { Heading } from "./typography";
import { cn } from "@/lib/utils";

export function CallToAction({ className }: { className?: String }) {
  return (
    <div className={cn("py-16 grid gap-4 grid-cols-12 items-start", className)}>
      <div className="col-span-12 lg:col-span-7">
        <Heading font="display" size="heading3" as="h6">
          Get a Free Quote Today
        </Heading>
      </div>
      <div className="col-span-12 lg:col-span-5 flex flex-col items-start gap-2">
        <a
          href={`mailto:${process.env.NEXT_PUBLIC_BUSINESS_EMAIL || ""}`}
          className="font-sans"
        >
          {process.env.NEXT_PUBLIC_BUSINESS_EMAIL || ""}
        </a>
        <a
          href={`tel:${process.env.NEXT_PUBLIC_BUSINESS_PHONE || ""}`}
          className="font-sans"
        >
          {process.env.NEXT_PUBLIC_BUSINESS_PHONE || ""}
        </a>
      </div>
    </div>
  );
}
