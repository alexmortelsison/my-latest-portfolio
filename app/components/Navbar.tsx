"use client";
import React from "react";
import ScrambleLink from "./ScrambleLink";
import { useScramble } from "use-scramble";
import Link from "next/link";

const navLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Portfolio",
    link: "/portfolio",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "About",
    link: "/about",
  },
];

export default function Navbar() {
  const alexRef = useScramble({
    text: "Alex",
    speed: 0.1,
    playOnMount: true,
    range: [65, 76, 69, 88, 83, 73, 79, 78],
    overdrive: false,
  });
  const sisonRef = useScramble({
    text: "Sison",
    speed: 0.3,
    playOnMount: true,
    range: [65, 76, 69, 88, 83, 73, 79, 78],
    overdrive: false,
  });
  return (
    <div className="flex justify-between pt-8 absolute inset-0 z-50 max-w-7xl mx-auto text-white h-[30px]">
      <div>
        <Link className="text-4xl font-overcamebold" href={"/"}>
          <span className="font-overcamebold" ref={alexRef.ref}>
            Alex
          </span>
          <span
            className="font-overcameoutline text-red-500"
            ref={sisonRef.ref}
          >
            Sison
          </span>
        </Link>
      </div>
      <div></div>
      <div className="flex space-x-4">
        {navLinks.map((item, index) => (
          <div key={index}>
            <ScrambleLink link={item.link} name={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
