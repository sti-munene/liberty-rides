"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronRight, Menu } from "lucide-react";
import { Heading } from "../typography";
import Link from "next/link";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="hover:text-primary" size={"icon"} variant="outline">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="z-[999999]">
        <div className="border-b border-slate-100 px-2 sm:px-4 h-16 flex items-center gap-4">
          <Heading size="heading6" font="display">
            Liberty Rides
          </Heading>
        </div>

        <div className="">
          <SheetTrigger asChild>
            <Link
              className="group pl-2 pr-4 sm:pl-4 sm:pr-6 h-10 hover:bg-slate-50 w-full flex items-center justify-between font-medium hover:text-primary-400"
              href="/listings"
            >
              <span>Cars for Hire</span>
              <ChevronRight className="h-5 w-5 hidden group-hover:block" />
            </Link>
          </SheetTrigger>

          <SheetTrigger asChild>
            <Link
              className="group pl-2 pr-4 sm:pl-4 sm:pr-6 h-10 hover:bg-slate-50 w-full flex items-center justify-between font-medium hover:text-primary-400"
              href="/terms-and-conditions"
            >
              <span>Terms & Conditions</span>
              <ChevronRight className="h-5 w-5 hidden group-hover:block" />
            </Link>
          </SheetTrigger>
        </div>
      </SheetContent>
    </Sheet>
  );
}
