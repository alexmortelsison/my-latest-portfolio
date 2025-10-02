"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

export default function Home() {
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const videoRef = useRef(null);
  const bgRef = useRef(null);
  useEffect(() => {
    gsap.to(bgRef.current, {
      opacity: 1,
      delay: 0.8,
      duration: 0.8,
      ease: "power2.inOut",
    });
    gsap.to(videoRef.current, {
      opacity: 1,
      delay: 1.2,
      duration: 0.8,
      ease: "power2.inOut",
    });
    gsap.to(nameRef.current, {
      opacity: 1,
      delay: 1.3,
      duration: 0.8,
      ease: "power2.inOut",
    });
    gsap.to(titleRef.current, {
      opacity: 1,
      delay: 2.2,
      duration: 0.8,
      ease: "power2.inOut",
    });
  });
  return (
    <div className="h-[100vh] w-full overflow-hidden flex justify-center items-center">
      <div className="relative -z-50 w-full h-screen">
        <video
          src={"/alexvideo.mp4"}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover blur-xs opacity-0"
          ref={videoRef}
        />
        <div
          className="bg-gradient-to-b from-black/90 via-transparent to-black/90 absolute z-10 inset-0 opacity-0"
          ref={bgRef}
        ></div>
      </div>
      <div className="absolute text-white font-playfair justify-center text-center tracking-wide">
        <h1
          className="text-7xl md:text-9xl lg:text-[180px] opacity-0"
          ref={nameRef}
        >
          Alex Sison
        </h1>
        <p className="lg:text-3xl md:text-2xl opacity-0 pt-4" ref={titleRef}>
          Frontend Developer / Web Designer
        </p>
      </div>
    </div>
  );
}
