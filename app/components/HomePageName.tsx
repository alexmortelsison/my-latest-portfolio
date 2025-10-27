import { CiBellOn } from "react-icons/ci";
import { BiRightArrow } from "react-icons/bi";
import { BiLeftArrow } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

import React from "react";
import { useScramble } from "use-scramble";

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
    speed: 0.5,
    range: [65, 76, 69, 88, 83, 73, 79, 78],
    overdrive: false,
  });
  const newsRef = useScramble({
    text: "News",
    playOnMount: true,
    speed: 0.5,
    range: [65, 76, 69, 88, 83, 73, 79, 78],
    overdrive: false,
  });

  const scrambleText = () => {
    nameRef.replay();
    surnameRef.replay();
  };
  return (
    <div
      className="lg:text-7xl text-white z-50 absolute hover:cursor-pointer md:mt-16 justify-center px-4 lg:px-0"
      onMouseEnter={scrambleText}
    >
      <div className="fixed md:top-48 top-18 text-sm m:right-78 lg:right-40 2xl:right-58 font-mono flex items-center">
        <div className="">
          <p className="flex items-center">
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
      <span className="font-sans text-red-500">./</span>
      <span
        ref={nameRef.ref}
        className=" font-overcamebold md:text-8xl text-7xl"
      />
      <span
        className="font-overcameoutline md:text-8xl text-7xl text-red-500"
        ref={surnameRef.ref}
      />
      <span className="font-sans text-red-500">/.</span>
      <div>
        <span className="flex items-center">
          <CiBellOn className="text-lg mr-1 text-red-500 font-bold" />
          <p className="text-sm font-mono" ref={frontendRef.ref}></p>
        </span>
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
          className="flex items-center space-x-1 font-mono text-sm md:mt-24 mt-8"
          ref={projectRef.ref}
        >
          <p>Dior.</p>
          <p>Apple.</p>
          <p>On.</p>
          <p>DJ Gos.</p>
          <p>Toyota.</p>
        </div>
      </div>
      <div className="fixed m:right-78 lg:right-40 md:bottom-24 bottom-20 2xl:right-58 xl:pt-8 font-mono text-gray-300">
        <div>
          <p className="text-xl text-red-500 font-black">#</p>
          <p
            className=" text-red-500 text-xl font-semibold"
            ref={newsRef.ref}
          />
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
