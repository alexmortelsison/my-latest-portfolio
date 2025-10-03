"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import BottomNavbar from "../components/BottomNavbar";

export default function Home() {
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const videoRef = useRef(null);
  const bgRef = useRef(null);
  const letterARef = useRef(null);
  const letterBRef = useRef(null);
  useEffect(() => {
    gsap.to(bgRef.current, {
      opacity: 1,
      delay: 0.8,
      duration: 0.8,
      ease: "power2.inOut",
    });
    gsap.to(videoRef.current, {
      opacity: 1,
      delay: 2,
      duration: 0.8,
      ease: "power2.inOut",
    });
    gsap.to(nameRef.current, {
      opacity: 1,
      delay: 2.5,
      duration: 0.8,
      ease: "power2.inOut",
    });
    gsap.to(titleRef.current, {
      opacity: 1,
      delay: 2.8,
      duration: 0.8,
      ease: "power2.inOut",
    });
    gsap.to(letterARef.current, {
      opacity: 1,
      delay: 3.2,
      duration: 2,
      rotationY: 360,
      ease: "power2.inOut",
    });
    gsap.to(letterBRef.current, {
      opacity: 1,
      delay: 3.2,
      duration: 2,
      rotationY: 360,
      ease: "power2.inOut",
    });
  });
  return (
    <div className="h-[100vh] w-screen overflow-hidden flex justify-center items-center">
      <div className="relative -z-50 w-full h-screen">
        <video
          src={"/alexvideo.mp4"}
          autoPlay
          muted
          loop
          width={4000}
          height={4000}
          playsInline
          className="object-cover opacity-0 h-screen"
          ref={videoRef}
        />
        <div
          className="bg-gradient-to-b from-black/90 via-transparent to-black/90 absolute z-10 inset-0 opacity-0"
          ref={bgRef}
        ></div>
      </div>
      <div className="absolute text-white font-playfair justify-center text-center tracking-[16px] lg:tracking-[16px] md:tracking-[12px] w-full flex flex-col items-center md:px-4 md:whitespace-nowrap">
        <h1
          className="text-4xl md:text-8xl lg:text-[180px] opacity-0 pl-4"
          ref={nameRef}
        >
          <span className="inline-block" ref={letterARef}>
            A
          </span>
          lex{" "}
          <span className="inline-block" ref={letterBRef}>
            S
          </span>
          ison
        </h1>
        <p
          className="lg:text-4xl md:text-xl opacity-0 pt-4 tracking-widest text-sm"
          ref={titleRef}
        >
          Frontend Developer / Web Designer
        </p>
      </div>
      <BottomNavbar />
    </div>
  );
}
