"use client";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ContactPage() {
  const pRef = useRef(null);
  const emailRef = useRef(null);
  const socialRef = useRef(null);
  const contactRef = useRef(null);
  useEffect(() => {
    gsap.to(pRef.current, {
      opacity: 1,
      delay: 1.8,
      duration: 0.8,
      ease: "power2.inOut",
    });
    gsap.to(emailRef.current, {
      opacity: 1,
      delay: 3,
      duration: 0.8,
      ease: "power2.inOut",
    });
    gsap.to(socialRef.current, {
      opacity: 1,
      delay: 4,
      duration: 0.8,
      ease: "power2.inOut",
    });
    gsap.to(contactRef.current, {
      x: 23,
      delay: 0.5,
      duration: 0.8,
      ease: "power2.inOut",
    });
  });
  return (
    <div className="min-h-screen w-full bg-black text-white font-playfair flex justify-center items-center tracking-widest">
      <div
        className="absolute top-0 left-0 h-full w-28 flex items-center justify-center -translate-x-50"
        ref={contactRef}
      >
        <h1 className="rotate-90 text-[180px] pr-8">CONTACT</h1>
      </div>
      <div className="flex-col justify-center text-center tracking-widest items-center lg:w-screen pl-28">
        <div className="opacity-0" ref={pRef}>
          <h1 className="lg:text-4xl text-xl tracking-wider">Let's talk.</h1>
          <p
            className="tracking tracking-wide lg:text-7xl text-2xl hover:underline hover:underline-offset-2 hover:cursor-pointer opacity-0 pt-8"
            ref={emailRef}
          >
            alexmortelsison@gmail.com
          </p>
          <div
            className="lg:text-5xl text-3xl flex space-x-4 opacity-0 text-center justify-center pt-8"
            ref={socialRef}
          >
            <AiOutlineInstagram />
            <AiFillGithub />
            <AiOutlineLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
}
