import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <section className="flex flex-col items-center  mx-auto  max-w-[3480px] lg:px-0 gap-20 relative h-full">
      <div className=" p-2 overflow-hidden inline-block sticky top-0 grid-flow-col h-[100vh]">
        <Image
          src="/images/pushpahas_pic4.jpg"
          
          alt="pushpahas"
          width={300}
          height={100}
          className="hover:scale-110 duration-500 transition-transform object-cover  lg:w-full mx-w-[3840px] lg:h-full"
          priority
          quality={100}
        />
      </div>
      <div className="w-full flex justify-center items-center backdrop-blur-3xl py-20 bg-gray-400/10 relative h-[100vh]">
      <div className="flex flex-col max-w-[800px] gap-20 lg:gap-40 text-wrap px-10">
        <p className="text-[100%] lg:text-5xl text-center lg:text-end text-slate-200 font-bold">
          Hi, I'm Pushpahas, a front-end developer creating sleek, user-friendly
          web pages that leave a lasting impression.
        </p>

        <p className="text-1xl lg:text-4xl text-red-700 text-center lg:text-start font-bold">
          I'm exploring 3D website design to push digital boundaries and craft
          immersive experiences.
        </p>
        <p className="text-1xl lg:text-4xl text-center kg:text-end text-slate-200 font-bold">
          Though early in my journey, I'm dedicated to learning, growing, and
          tackling new challenges.
        </p>
      </div>
      </div>
    </section>
  );
};

export default page;
