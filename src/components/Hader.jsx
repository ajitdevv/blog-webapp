import React from "react";
import Themetoggle from "./ThemeToggle";
import Link from "next/link";

const Hader = () => {
  return (
    <div className="bg-card-soft shadow z-100 p-4 flex justify-between sticky top-0">
      <Link href="/"> <img src="/dev.png"  alt="Logo" className=" w-16 h-11" /></Link>
      <div className="flex gap-5 items-center">
        <Themetoggle />
        <Link
          href="/dashboard"
          className="bg-background text-foreground px-4 py-2 rounded"
        >
          Dashboard
        </Link>
        <Link
          href="/create"
          className="bg-foreground text-background px-4 py-2 rounded"
        >
          Create Blog
        </Link>
      </div>
    </div>
  );
};

export default Hader;
