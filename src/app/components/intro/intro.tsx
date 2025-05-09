/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import * as motion from "motion/react-client"
const Intro = () => {
  return (
    <section className="flex  items-center justify-center mx-auto max-w-[3048px] px-6 lg:px-20 3xl:px-0 top-0 z-[-1] h-[100vh] ">
      

      <div className="w-full flex justify-center z-[-1]  top-0 h-[100vh]">
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
                duration:1,
                delay:1,
                scale: { type:"tween", visualDuration: 0.9, bounce: 0.5 },
            }}
        >


        <div className=" p-2 overflow-hidden inline-block ">
          <Image
            src="/images/pushpahas_pic4.jpg"
            alt="pushpahas"
            width={300}
            height={1000}
            className="hover:scale-110 duration-500 transition-transform w-auto md:w-[500px] lg:h-[100vh] lg:w-full"
            priority
            quality={100}
          />
        </div>
        </motion.div>
      </div>

          <motion.div
          
          initial={{scaleY:0, scaleX:0 , y:0}}
          whileInView={{scaleY:1, scaleX:1, y:10}}
          exit={{scaleY:0, scaleX:0, y:0}}
          transition={{duration:1 , delay:1}}
  
           className="flex flex-col items-center bottom-[-10%] md:bottom-0 justify-center w-full gap-10 lg:gap-20 px-10 lg:px-30 absolute h-[100vh]">
        <div className="w-full flex flex-col items-start justify-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-300 5xl:text-[1000px]">
            Hi, i'am
          </h1>
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
            Pushpahas
          </h1>
        </div>
        <div className="w-full flex flex-col items-end justify-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-red-800">
            FRONT-END
          </h1>
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-red-700">
            DEVELOPER
          </h1>
        </div>
      
          </motion.div>
    </section>
  );
};
export default Intro;
