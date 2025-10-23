import Link from "next/link";
import React from "react";
import ScrambleLink from "./ScrambleLink";

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
  return (
    <div className="flex justify-between items-center pt-8">
      <div>
        <h1 className="text-4xl font-overcamebold">
          Alex<span className="font-overcameoutline">Sison</span>
        </h1>
      </div>
      <div></div>
      <div className="flex items-center space-x-4">
        {navLinks.map((item, index) => (
          <div key={index}>
            <ScrambleLink link={item.link} name={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
