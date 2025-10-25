import { BiRightArrow } from "react-icons/bi";
import { BiLeftArrow } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

import React from "react";
import { useScramble } from "use-scramble";
import Link from "next/link";

export default function HomePageName() {
  const nameRef = useScramble({
    text: "Alex",
    playOnMount: true,
    speed: 0.1,
    range: [65, 76, 69, 88, 83, 73, 79, 78],
    overdrive: false,
  });
  const surnameRef = useScramble({
    text: "Sison",
    playOnMount: true,
    speed: 0.1,
    range: [65, 76, 69, 88, 83, 73, 79, 78],
    overdrive: false,
  });
  const japanRef = useScramble({
    text: "Japan",
    playOnMount: true,
    speed: 0.1,
    range: [65, 76, 69, 88, 83, 73, 79, 78],
    overdrive: false,
  });
  const frontendRef = useScramble({
    text: "Frontend Developer | Web Designer",
    playOnMount: true,
    speed: 0.2,
    range: [65, 76, 69, 88, 83, 73, 79, 78],
    overdrive: false,
  });
  const projectRef = useScramble({
    text: "Dior. Apple. On. DJ Gos. Toyota",
    playOnMount: true,
    speed: 0.2,
    range: [65, 76, 69, 88, 83, 73, 79, 78],
    overdrive: false,
  });

  const scrambleText = () => {
    nameRef.replay();
    surnameRef.replay();
  };
  return (
    <div
      className="text-7xl text-white z-50 absolute hover:cursor-pointer "
      onMouseEnter={scrambleText}
    >
      <div className="">
        <div>
          <p className="fixed top-48 text-sm xl:right-78 font-mono flex items-center">
            <AiOutlineArrowRight className="text-red-500 text-2xl mr-4" />
            From{" "}
            <span
              className="text-red-500 mx-1 font-semibold"
              ref={japanRef.ref}
            >
              Japan
            </span>{" "}
            <span className="underline">to anywhere in the world.</span>
          </p>
        </div>
      </div>
      <span ref={nameRef.ref} className=" font-overcamebold" />
      <span className="font-overcameoutline" ref={surnameRef.ref} />
      <span className="font-sans text-red-500">/.</span>
      <div>
        <p className="text-sm font-mono" ref={frontendRef.ref}></p>
        <div className="flex items-center space-x-4 text-4xl mt-16">
          <BiRightArrow className="text-red-500" />
          <a href="https://www.instagram.com/alexismortelsison" target="_blank">
            <AiOutlineInstagram />
          </a>
          <a href="https://github.com/alexmortelsison" target="_blank">
            <AiFillGithub />
          </a>
          <AiOutlineMail />
          <BiLeftArrow className="text-red-500" />
        </div>
        <div
          className="flex items-center space-x-1 font-mono text-sm mt-24"
          ref={projectRef.ref}
        >
          <Link href="/">Dior.</Link>
          <Link href="/">Apple.</Link>
          <Link href="/">On.</Link>
          <Link href="/">DJ Gos.</Link>
          <Link href="/">Toyota.</Link>
        </div>
      </div>
      <div className="fixed right-80 xl:pt-8 font-mono text-gray-300">
        <div>
          <p className="text-xl text-red-500 font-black">#</p>
          <p className=" text-red-500 text-xl font-semibold">News</p>
          <p className="text-lg">2025</p>
          <div className="flex items-center text-sm space-x-2 text-gray-500">
            <p>10/07</p>
            <p>Dior Clone launched.</p>
          </div>
          <div className="flex items-center text-sm space-x-2 text-gray-500">
            <p>10/02</p>
            <p>Apple Clone launched.</p>
          </div>
          <div className="flex items-center text-sm space-x-2 text-gray-500">
            <p>09/29</p>
            <p>DJ Gos launched.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
