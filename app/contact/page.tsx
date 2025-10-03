import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import React from "react";

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full bg-black text-white font-playfair flex justify-center items-center">
      <div className="absolute top-0 left-0 h-full w-28 flex items-center justify-center">
        <h1 className="rotate-90 text-9xl">CONTACT</h1>
      </div>
      <div className="flex flex-col justify-center text-center space-y-8 tracking-widest items-center">
        <h1 className=" text-4xl">Let's talk.</h1>
        <p className="tracking tracking-wide text-7xl hover:underline hover:underline-offset-2 hover:cursor-pointer">
          alexmortelsison@gmail.com
        </p>
        <div className="text-5xl flex space-x-4 pt-4">
          <AiOutlineInstagram />
          <AiFillGithub />
          <AiOutlineLinkedin />
        </div>
      </div>
    </div>
  );
}
