/* eslint-disable react/no-unescaped-entities */

import React from "react";
import Image from "next/image";
const Intro = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 3xl:px-0 py-10 lg:py-20">
      <div className="flex flex-col items-center w-full gap-10 lg:gap-20 p-10 ">
        <div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
            Hi, i'am
          </h1>
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
            Pushpahas
          </h1>
        </div>
        <div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-purple-800">
            FRONT-END
          </h1>
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-purple-800">
            DEVELOPER
          </h1>
        </div>
      </div>
      <div className="w-full flex items-center justify-center  p-10 ">
        <div className=" p-2 overflow-hidden inline-block ">
          <Image
            src="/pushpahas_pic4.jpg"
            alt="pushpahas"
            width={300}
            height={1000}
            className="hover:scale-110 duration-500 transition-transform md:w-[500px]"
            priority
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};
export default Intro;
