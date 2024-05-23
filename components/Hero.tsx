import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="top-10 left-full -[80vh] w-[50vw]" fill="white" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center ">
          <h2 className=" uppercase tracking-widest text-xs text-center max-w-80 text-blue-100 ">
            Welcome to my Porfolio...
          </h2>
          <TextGenerateEffect
            className="text-center text-[30px] md:text-4xl lg:text-5xl "
            words="Transforming Concepts into Seamless User Experience"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl ">
            I'm <span className="text-purple">Arome Ukpoju,</span> skilled
            software engineer with <span className="text-purple">2+ years</span>{" "}
            of expertise in crafting{" "}
            <span className="text-purple">+ve solutions</span> to meet unique
            business needs.
          </p>
        
        </div>
      </div>
    </div>
  );
};

export default Hero;
