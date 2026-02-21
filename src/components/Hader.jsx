import React from "react";
import Themetoggle from "./ThemeToggle";
import Link from "next/link";

const Hader = () => {
  return (
    <div className="bg-card-soft shadow-lg z-100 p-2 md:p-4 flex justify-between sticky top-0">
      <Link href="/">
        <img src="/dev.png" alt="Logo" className="w-16 h-11" />
      </Link>
      <div className="flex flex-row-reverse md:flex-row gap-3 md:gap-5 items-center">
        <Themetoggle />
        <Link
          href="/dashboard"
          className="bg-background text-foreground px-2 py-1 text-xs md:text-base md:px-4 md:py-2 rounded"
        >
          Dashboard
        </Link>
        <Link
          href="/create"
          className="bg-foreground text-background px-2 py-1 md:px-4 md:text-base md:py-2 text-xs rounded"
        >
          Create Blog
        </Link>
      </div>
    </div>
  );
};

export default Hader;
