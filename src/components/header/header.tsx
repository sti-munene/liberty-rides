import React from "react";
import { Navbar } from "./navbar";

export const Header = () => {
  return (
    <>
      <header className="border-b sticky top-0  z-[99] border-slate-100">
        <Navbar />
      </header>
    </>
  );
};
