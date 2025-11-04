import React from "react";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col justify-center items-center text-center pt-64 font-mono text-4xl">
          <h1>alexismsison@gmail.com</h1>
          <p>+8170 3363 2542</p>
          <div className="flex items-center space-x-4 text-4xl mt-16">
            <BiRightArrow className="text-red-500" />
            <a
              href="https://www.instagram.com/alexismortelsison"
              target="_blank"
            >
              <AiOutlineInstagram />
            </a>
            <a href="https://github.com/alexmortelsison" target="_blank">
              <AiFillGithub />
            </a>
            <AiOutlineMail />
            <BiLeftArrow className="text-red-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
