import React from "react";
import Link from "next/link";


const Navbar = () => {
  return (
    <section className="flex items-center justify-between mx-auto max-w-[3840px] w-full  px-6 lg:px-20 3xl:px-0 z-30 py-5 relatiive">
      <div className="flex justify-between w-full  ">
        <Link href="/">
          <p className="text-white text-[20px] md:text-2xl font-bold ">
            PUSHPA
          </p>
        </Link>
        <div className="flex items-center justify-between gap-6">
          <Link href="/about">
            <p className="hover:font-semibold lg:text-2xl">
            About
            </p>
          </Link>
          <Link href="/contact">
            <p className="hover:font-semibold text-purple-800 lg:text-2xl">
              {" "}
              Contact{" "}
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
