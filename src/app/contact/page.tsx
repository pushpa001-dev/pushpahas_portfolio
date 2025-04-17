import React from "react";
import Image from "next/image";
import Link from "next/link";

interface socialprops{
  image: string;
  name: string;
  link: string;
}

const Social = ({ image, name, link }: socialprops) => {
  return (
    <Link
      href={`${link}`}
      className="flex items-center justify-center sm:justify-between p-2 sm:px-10 py-5 bg-zinc-700 gap-1 rounded-md "
      target="_blank"
    >
      <Image
        src={image}
        width={50}
        height={50}
        alt={name}
        className=" hover:shadow-gray-800 "
      />
      <p className="hidden sm:flex  md:text-2xl text-slate-400 font-bold">
        {name}
      </p>
    </Link>
  );
};

const page = () => {
  return (
    <section className="flex flex-col items-center justify-center mx-auto max-w-[3480px] px-6 lg:px-20 3xl:px-0 py-20 lg:py-30 relative ">
      <div className="flex items-center flex-col  w-full max-w-[1024] py-15 lg:py-20 bg-zinc-900 gap-20 lg:gap-30 rounded-md">
        <div className=" p-2 overflow-hidden inline-block relative ">
          <Image
            src="/images/pushpahas_pic4.jpg"
            alt="pushpahas"
            width={300}
            height={1000}
            className="hover:scale-110 duration-500 transition-transform md:w-[500px] rounded-2xl shadow-2xs"
            priority
            quality={100}
          />
        </div>
        <div className="grid grid-cols-2 gap-3 px-10 md:px-10 w-full items-center justify-center">
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
