"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";

export default function AboutPage() {
  const pRef = useRef(null);
  const emailRef = useRef(null);
  const socialRef = useRef(null);
  const contactRef = useRef(null);
  const colorRef = useRef(null);
  const nextjsRef = useRef(null);
  const reactRef = useRef(null);
  const tailwindRef = useRef(null);
  useEffect(() => {
    gsap.to(pRef.current, {
      opacity: 1,
      delay: 1.8,
      duration: 0.8,
      ease: "power2.inOut",
    });
    gsap.to(emailRef.current, {
      opacity: 1,
      delay: 7,
      duration: 0.8,
      ease: "power2.inOut",
    });
    gsap.to(socialRef.current, {
      opacity: 1,
      delay: 8,
      duration: 0.8,
      ease: "power2.inOut",
    });
    gsap.to(contactRef.current, {
      x: 20,
      delay: 0.5,
      duration: 0.8,
      ease: "power2.inOut",
    });
    gsap.to(colorRef.current, {
      color: "#1dd1d8",
      delay: 3,
      duration: 1,
      ease: "power2.inOut",
    });
    gsap.to(nextjsRef.current, {
      color: "#1dd1d8",
      delay: 4,
      duration: 1,
      ease: "power2.inOut",
    });
    gsap.to(reactRef.current, {
      color: "#1dd1d8",
      delay: 5,
      duration: 1,
      ease: "power2.inOut",
    });
    gsap.to(tailwindRef.current, {
      color: "#1dd1d8",
      delay: 6,
      duration: 1,
      ease: "power2.inOut",
    });
  });
  return (
    <div className="min-h-screen w-full bg-black text-white font-playfair flex justify-center items-center tracking-widest overflow-hidden">
      <div
        className="absolute top-0 left-0 h-full w-28 flex items-center justify-center -translate-x-40"
        ref={contactRef}
      >
        <h1 className="rotate-90 text-[170px] whitespace-nowrap hidden md:inline-flex">
          ABOUT ME
        </h1>
      </div>
      <div
        className="flex flex-col justify-center text-center space-y-8 tracking-widest items-center opacity-0 md:pl-28"
        ref={pRef}
      >
        <h1 className=" lg:text-3xl text-sm tracking-wider w-[220px] lg:w-screen">
          Hi, I'm{" "}
          <span
            className="lg:text-5xl text-xl font-semibold text-white"
            ref={colorRef}
          >
            Alex
          </span>
          , <br />a <span className="font-bold">Frontend Developer</span>/
          <span className="font-bold">Website Designer</span>
          <br /> specializing in building{" "}
          <span className="font-semibold">elegant</span> and{" "}
          <span className="font-semibold">responsive</span> website designs.
        </h1>
        <p className="w-2/3 lg:text-xl text-sm tracking-wider">
          I use the modern trifecta:{" "}
          <span ref={nextjsRef} className="font-semibold lg:text-2xl text-lg">
            Next.js
          </span>
          ,{" "}
          <span ref={reactRef} className="font-semibold lg:text-2xl text-lg">
            React
          </span>
          , and{" "}
          <span ref={tailwindRef} className="font-semibold lg:text-2xl text-lg">
            Tailwind CSS
          </span>{" "}
          to deliver website applications that prioritize design, speed and
          responsiveness. I focus on precision and performance, turning complex
          design files into reliable, high-speed user interfaces.
        </p>
        <p
          className="tracking tracking-wide lg:text-4xl text-lg hover:underline hover:underline-offset-2 hover:cursor-pointer opacity-0 font-semibold"
          ref={emailRef}
        >
          alexmortelsison@gmail.com
        </p>
        <div className="text-5xl flex space-x-4 pt-4 opacity-0" ref={socialRef}>
          <AiOutlineInstagram />
          <AiFillGithub />
          <AiOutlineLinkedin />
        </div>
      </div>
    </div>
  );
}
