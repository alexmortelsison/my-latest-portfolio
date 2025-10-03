"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

export default function Footer() {
  const footerRef = useRef(null);
  useEffect(() => {
    gsap.to(footerRef.current, {
      opacity: 1,
      delay: 3.2,
      duration: 0.8,
      ease: "power2.inOut",
    });
  });
  const year = new Date().getFullYear();
  return (
    <div className="absolute bottom-4 mx-auto items-center text-white md:flex justify-center text-center self-center font-playfair hidden">
      <p
        className="text-gray-400 md:text-gray-500 opacity-0 text-sm md:text-[16px]"
        ref={footerRef}
      >
        &copy;{year}
        <span className="pl-1">Alex Sison.</span>
        <span className="pl-1">All rights reserved.</span>
      </p>
    </div>
  );
}
