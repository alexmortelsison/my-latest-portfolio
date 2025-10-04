"use client";
import { AiOutlineArrowRight } from "react-icons/ai";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import Link from "next/link";

export default function PortfolioPage() {
  const pRef = useRef(null);
  const emailRef = useRef(null);
  const socialRef = useRef(null);
  const contactRef = useRef(null);
  const p1 = useRef(null);
  const p2 = useRef(null);
  const p3 = useRef(null);
  const p4 = useRef(null);
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
      x: 13,
      delay: 0.5,
      duration: 0.8,
      ease: "power2.inOut",
    });
    gsap.to(p1.current, {
      opacity: 1,
      x: 12,
      delay: 0.5,
      duration: 4,
      ease: "power2.inOut",
    });
    gsap.to(p2.current, {
      opacity: 1,
      x: 12,
      delay: 0.5,
      duration: 4,
      ease: "power2.inOut",
    });
    gsap.to(p3.current, {
      opacity: 1,
      x: 12,
      delay: 0.5,
      duration: 4,
      ease: "power2.inOut",
    });
    gsap.to(p4.current, {
      opacity: 1,
      x: 12,
      delay: 0.5,
      duration: 4,
      ease: "power2.inOut",
    });
  }, []);
  return (
    <div className="min-h-screen w-full bg-black text-white font-playfair flex justify-center items-center tracking-widest relative overflow-hidden">
      <div
        className="absolute top-0 left-0 h-full w-28 flex items-center justify-center -translate-x-50"
        ref={contactRef}
      >
        <h1 className="rotate-90 text-[160px] pr-8 md:inline-flex hidden pl-8">
          PORTFOLIO
        </h1>
      </div>
      <div className="flex flex-col tracking-widest lg:w-screen md:pl-28 px-8 h-full pt-48 space-y-8">
        <Link href={"/"}>
          <div className="pl-24 h-[80px] border-b px-8 items-center cursor-pointer transition-colors duration-300 flex">
            <p className="text-3xl text-[#1dd1d8]">01</p>
            <div
              className="flex justify-between flex-1 ml-4 -translate-x-160 opacity-0"
              ref={p1}
            >
              <h1 className="text-4xl">Portfolio</h1>
              <p className="text-2xl">
                <AiOutlineArrowRight />
              </p>
            </div>
          </div>
        </Link>
        <a href="https://apple-clone-drmort.vercel.app/" target="_blank">
          <div className="pl-24 h-[80px] border-b px-8 items-center cursor-pointer transition-colors duration-300 flex">
            <p className="text-3xl text-[#1dd1d8]">02</p>
            <div
              className="flex justify-between flex-1 ml-4 -translate-x-160 opacity-0"
              ref={p2}
            >
              <h1 className="text-4xl">Apple Clone</h1>
              <p className="text-2xl">
                <AiOutlineArrowRight />
              </p>
            </div>
          </div>
        </a>
        <a href="https://on-clone.vercel.app/" target="_blank">
          <div className="pl-24 h-[80px] border-b px-8 items-center cursor-pointer transition-colors duration-300 flex">
            <p className="text-3xl text-[#1dd1d8]">03</p>
            <div
              className="flex justify-between flex-1 ml-4 -translate-x-160 opacity-0"
              ref={p3}
            >
              <h1 className="text-4xl">On.com Clone</h1>
              <p className="text-2xl">
                <AiOutlineArrowRight />
              </p>
            </div>
          </div>
        </a>
        <a href="https://djgos.vercel.app/" target="_blank">
          <div className="pl-24 h-[80px] border-b px-8 items-center cursor-pointer transition-colors duration-300 flex">
            <p className="text-3xl text-[#1dd1d8]">04</p>
            <div
              className="flex justify-between flex-1 ml-4 -translate-x-160 opacity-0"
              ref={p4}
            >
              <h1 className="text-4xl">DJ GOS</h1>
              <p className="text-2xl">
                <AiOutlineArrowRight />
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
