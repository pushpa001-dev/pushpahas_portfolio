import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <section className="flex flex-col items-center mx-auto  max-w-[3480px] px-6 lg:px-0 gap-20 relative">
      <div className=" p-2 overflow-hidden inline-block sticky top-0">
        <Image
          src="/images/pushpahas_pic4.jpg"
          
          alt="pushpahas"
          width={300}
          height={1000}
          className="hover:scale-110 duration-500 transition-transform md:w-[500px]"
          priority
          quality={100}
        />
      </div>
      <div className="w-full flex items-center justify-center backdrop-blur-3xl bg-gray-400/10">
      <div className="flex flex-col max-w-[800px] gap-20 lg:gap-40 py-20 md:py-30 text-wrap">
        <p className="text-2xl lg:text-6xl text-center lg:text-end text-slate-500 font-bold">
          Hi, I'm Pushpahas, a front-end developer creating sleek, user-friendly
          web pages that leave a lasting impression.
        </p>

        <p className="text-2xl lg:text-5xl text-purple-800 text-center lg:text-start font-bold">
          I'm exploring 3D website design to push digital boundaries and craft
          immersive experiences.
        </p>
        <p className="text-2xl lg:text-5xl text-center kg:text-end text-slate-500 font-bold">
          Though early in my journey, I'm dedicated to learning, growing, and
          tackling new challenges.
        </p>
      </div>
      </div>
    </section>
  );
};

export default page;
