import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client"

interface socialprops{
  image: string;
  name: string;
  link: string;
}

const Social = ({ image, name, link }: socialprops) => {
  return (
    <Link
      href={`${link}`}
      className="flex items-center justify-center sm:justify-between p-2 sm:px-10 py-5 backdrop-blur-3xl bg-gray-400/10 gap-1 rounded-md hover:bg-zinc-900 pointer-events-auto active:bg-red-300/50"
      target="_blank"
    >

      <Image
        src={image}
        width={50}
        height={50}
        alt={name}
        className=" hover:shadow-gray-800 "
      />
      
      <p className="hidden sm:flex  md:text-2xl hover:text-slate-900 text-slate-400 font-bold">
        {name}
      </p>
    </Link>
  );
};

const page = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center mx-auto max-w-[3480px] px-6 lg:px-20 3xl:px-0 py-20 lg:py-30 relative h-[100vh]">
      <div className="flex items-center flex-col lg:flex-row  w-full max-w-[1250PX] min-h-[550px] lg:px-10 py-10 lg:py-20 bg-zinc-900 gap-20 lg:gap-30 rounded-md">
        <div className=" p-2 overflow-hidden inline-block relative ">
          <Image
            src="/images/pushpahas_pic4.jpg"
            alt="pushpahas"
            width={300}
            height={1000}
            className="hidden md:flex hover:scale-110 duration-500 transition-transform md:w-[500px] rounded-2xl shadow-2xs"
            priority
            quality={100}
          />
        </div>
        <div className="grid grid-cols-2 gap-3 lg:gap-10 px-10 md:px-10 w-full items-center justify-center ">
          <Social
            image="/github (1).png"
            name="Github"
            link="https://github.com/pushpa001-dev"
          />
          <Social
            image="/linkedin (1).png"
            name="Linked-in"
            link="https://www.linkedin.com/in/pushpa-has-375580317/"
          />
          <Social
            image="/telephone.png"
            name="Mobile"
            link="tel:+919392047174"
          />
          <Social
            image="/gmail.png"
            name="e-mail"
            link="mailto:pushpahas77@gmail.com"
          />
          <Social
            image="/instagram.png"
            name="Instagram"
            link="https://www.instagram.com/k.pushpahas?igsh=MTE1cWNha3JpanF3NQ=="
          />
          <Social
            image="/twitter (1).png"
            name="X (Twitter)"
            link="https://x.com/pushpa_has"
          />
        </div>
      </div>
    </section>
  );
};

export default page;
