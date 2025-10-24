"use client";
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
  const scrambleText = () => {
    nameRef.replay();
    surnameRef.replay();
  };
  return (
    <div
      className="text-[180px] text-white z-50 absolute hover:cursor-pointer"
      onMouseEnter={scrambleText}
    >
      <div className="">
        <div>
          <p className="fixed text-sm right-78 font-mono">
            From{" "}
            <span className="text-red-500" ref={japanRef.ref}>
              Japan
            </span>{" "}
            <span className="underline">to anywhere in the world.</span>
          </p>
        </div>
      </div>
      <span ref={nameRef.ref} className=" font-overcamebold" />
      <span className="font-overcameoutline" ref={surnameRef.ref} />
      <span className="font-sans">/</span>
      <div>
        <p className="text-lg font-mono">Frontend Developer | Web Designer</p>
      </div>
      <div className="fixed right-80 pt-16 font-mono text-gray-300">
        <div>
          <p className="text-xl text-red-500 font-black">./</p>
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
