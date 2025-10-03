"use client";
import gsap from "gsap";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const navlinks = [
  { name: "Home", link: "/home" },
  { name: "Portfolio", link: "/portfolio" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];

export default function Navbar() {
  const navRef = useRef(null);
  useEffect(() => {
    gsap.to(navRef.current, {
      opacity: 1,
      delay: 3.2,
      duration: 0.8,
      ease: "power2.inOut",
    });
  });
  return (
    <div
      className="absolute text-white z-20 pt-8 font-playfair tracking-wider opacity-0"
      ref={navRef}
    >
      <div className="space-x-8 hidden md:inline-flex">
        {navlinks.map((item, index) => (
          <Link key={index} href={item.link} className="">
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
