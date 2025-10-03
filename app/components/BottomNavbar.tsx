import { AiOutlineMail } from "react-icons/ai";
import { FaFingerprint } from "react-icons/fa";
import { BsViewStacked } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import React from "react";
import Link from "next/link";

const bottomLinks = [
  { icon: <AiOutlineHome />, link: "/home" },
  { icon: <FaFingerprint />, link: "/about" },
  { icon: <BsViewStacked />, link: "/portfolio" },
  { icon: <AiOutlineMail />, link: "/contact" },
];

export default function BottomNavbar() {
  return (
    <div className="w-full absolute bottom-8 text-white px-16 md:hidden">
      <div className="flex justify-between text-2xl text-gray-300">
        {bottomLinks.map((item, index) => (
          <Link key={index} href={item.link}>
            {item.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}
