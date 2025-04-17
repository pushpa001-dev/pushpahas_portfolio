import React from "react";

interface Biodataprops {
  title: string;
  content: string;
}

const Biodata = ({ title, content }: Biodataprops) => {
  return (
    <div className="flex flex-col items-center justify-center xl:flex-row py-20 xl:px-20 relative w-full gap-10 ">
      <div className="w-full flex items-center xl:justify-center">
        <h1 className="text-purple-800 text-2xl lg:text-7xl flex ">{title}</h1>
      </div>
      <div className="flex w-full xl:justify-center">
        <p className="w-full lg:text-2xl  text-slate-500 xl:text-center">
          {content}
        </p>
      </div>
    </div>
  );
};

const Bio = () => {
  return (
    <section className="flex flex-col items-center justify-center max-w-[3840px] mx-auto px-6 lg:px-20 py-10 lg:py-20 mt-0 lg:mt-25">
    
      <div className="flex items-center  flex-col gap-8 lg:gap-20 py-10 lg:py-5 xl:py-20">
        <div className="flex gap-4">
          <p className="text-bold text-2xl lg:text-4xl">About</p>
          <p className="text-purple-800 text-bold text-2xl lg:text-4xl">me</p>
        </div>
        <div className="flex lg:max-w-[1100px] items-center justify-center text-slate-500 text-lg text-center">
          <p className=" xl:text-3xl font-bold">
            Hi, I'm Pushpahas, a passionate front-end developer with a flair for
            designing modern and user-friendly web pages. I specialize in
            creating sleek and functional designs that enhance digital
            experiences while aiming to leave a lasting impression.
          </p>
        </div>
      </div>

      <Biodata
        title="Education"
        content="I hold a diploma in Computer Science Engineering (CME) from RVIT College, which laid a strong foundation for my journey as a developer. As I continue to expand my expertise, I’m also setting my sights on pursuing a B.Tech in Computer Science Engineering to deepen my knowledge and refine my technical capabilities. With each step forward, I’m excited to unlock new opportunities and shape the future of web development."
      />
      <Biodata
        title="Skills"
        content="I specialize in designing modern and user-friendly web pages that seamlessly blend aesthetics and functionality. My approach revolves around creating experiences that are not only visually appealing but also intuitive and engaging for users. From responsive layouts to interactive elements, I ensure every design is tailored to meet the unique needs of the project."
      />
      <Biodata
        title="Tools"
        content="With proficiency in Tailwind CSS and React Next.js, I bring technical expertise to my designs, enabling me to craft sleek, efficient, and scalable websites. I thrive on experimenting with innovative concepts, particularly those aligned with futuristic and immersive design aesthetics. My interest in dark, glowing themes adds a creative edge to my work, allowing me to stand out in the world of web development."
      />
      
    </section>
  );
};

export default Bio;
