import React from "react";
import Image from "next/image";
import Link from "next/link";
interface contactmeprops {
  image: string;
  link: string;
  name: string;
}

const Contactme = ({ image, link, name }: contactmeprops) => {
  return (
    <Link href={`${link}`} target="_blank">
      <Image src={image} alt={name} width={30} height={30} className="" />
    </Link>
  );
};

const Footer = () => {
  return (
    <section className="w-full max-w-[3480px] mx-auto py-10 px-10 lg:py-5  flex items-center justify-between flex-col sm:flex-row gap-10 lg:px-20 3xl:px-0 bg-zinc-700 ">
      <div className="flex gap-1 text-2xl">
        <h1>Reach Pushpahas</h1>
        <h1 className="text-purple-700 text-2xl">Now</h1>
      </div>
      <div className=" grid grid-cols-4 gap-10 ">
        <Contactme
          image="/linkedin.png"
          name="linkedin"
          link="https://www.linkedin.com/services/page/22a91533701b493830/"
        />
        <Contactme
          image="/github.png"
          name="linkedin"
          link="https://github.com/pushpa001-dev"
        />
        <Contactme
          image="/twitter.png"
          name="linkedin"
          link="https://x.com/pushpa_has"
        />
        <Link href="/">
          <Image
            src="/home.png"
            alt="home"
            width={30}
            height={30}
            className=""
          />
        </Link>
      </div>
    </section>
  );
};
export default Footer;
