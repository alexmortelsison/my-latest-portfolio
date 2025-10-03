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
      x: 0,
      delay: 0.5,
      duration: 0.8,
      ease: "power2.inOut",
    });
  });
  return (
    <div className="min-h-screen w-full bg-black text-white font-playfair flex justify-center items-center tracking-widest">
      <div
        className="absolute top-0 left-0 h-full w-28 flex items-center justify-center -translate-x-40"
        ref={contactRef}
      >
        <h1 className="rotate-90 text-9xl">CONTACT</h1>
      </div>
      <div
        className="flex flex-col justify-center text-center space-y-8 tracking-widest items-center opacity-0"
        ref={pRef}
      >
        <h1 className=" text-4xl tracking-wider">Let's talk.</h1>
        <p
          className="tracking tracking-wide text-7xl hover:underline hover:underline-offset-2 hover:cursor-pointer opacity-0"
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
