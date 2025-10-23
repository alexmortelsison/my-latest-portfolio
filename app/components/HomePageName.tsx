"use client";
import React from "react";
import { useScramble } from "use-scramble";

export default function HomePageName() {
  const nameRef = useScramble({
    text: "Alex",
    playOnMount: true,
    speed: 0.3,
    range: [65, 90],
    overdrive: false,
  });
  const surnameRef = useScramble({
    text: "Sison",
    playOnMount: true,
    speed: 0.3,
    range: [65, 90],
    overdrive: false,
  });
  const scrambleText = () => {
    nameRef.replay();
    surnameRef.replay();
  };
  return (
    <div
      className="text-9xl text-white z-30 absolute"
      onMouseEnter={scrambleText}
      onMouseOver={scrambleText}
    >
      <span ref={nameRef.ref} className=" font-overcamebold" />
      <span className="font-overcameoutline" ref={surnameRef.ref} />
      <span className="font-sans">/</span>
    </div>
  );
}
