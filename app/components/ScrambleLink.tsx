"use client";
import Link from "next/link";
import React from "react";
import { useScramble } from "use-scramble";

export default function ScrambleLink({
  name,
  link,
}: {
  name: string;
  link: string;
}) {
  const scrambleRef = useScramble({
    text: name,
    playOnMount: false,
    speed: 0.45,
  });

  const triggerScramble = () => {
    scrambleRef.replay();
  };
  return (
    <Link href={link} className="font-mono" onMouseEnter={triggerScramble}>
      <span ref={scrambleRef.ref}></span>
    </Link>
  );
}
