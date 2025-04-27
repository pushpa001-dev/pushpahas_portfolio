import React from "react";
import Image from "next/image";
import Link from "next/link";
interface projectprops {
  name: string;
  image: string;
  link: string;
}
const Projects = ({ name, image, link }: projectprops) => {
  return (
    <div className="shadow-2xs w-[300px] md:w-[400px] py-10 px-5 bg-zinc-900 rounded-2xl">
      <Link href={`${link}`} target="_blank" className="flex flex-col gap-5">
        <p className="lg:text-2xl">Netflix_clone</p>
        <Image
          src={image}
          alt={name}
          width={100}
          height={50}
          quality={100}
          className="w-full "
        />
      </Link>
    </div>
  );
};
const My_projects = () => {
  return (
    <section className="flex items-center flex-col  justify-between  max-w-[3840px] gap-10 mx-auto w-full py-40 lg:py-7 xl:py-8 px-6 lg:px-20 bg-black">
      <div className="flex gap-2 items-center justify-center w-full">
        <h1 className="text-red-700  text-2xl lg:text-4xl ">My </h1>
        <h1 className="text-2xl lg:text-4xl">projects</h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 py-20 lg:flex-row w-full">
        <Projects
          name="Netflix_clone"
          image="/project_1.jpg"
          link="https://netflix-clone-mu-bay.vercel.app/"
        />
      </div>
    </section>
  );
};

export default My_projects;
