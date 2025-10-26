"use client";
import { useRouter } from "next/navigation";
import { useScramble } from "use-scramble";

export default function Intro() {
  const router = useRouter();
  const delay = 1500;
  const firstRef = useScramble({
    text: "ALEX",
    speed: 0.1,
    overdrive: false,
    range: [65, 76, 69, 88, 83, 73, 79, 78],
  });
  const surnameRef = useScramble({
    text: "SISON",
    speed: 0.1,
    overdrive: false,
    range: [65, 76, 69, 88, 83, 73, 79, 78],
    onAnimationEnd: () => {
      setTimeout(() => {
        router.push("/home");
      }, delay);
    },
  });

  return (
    <div className="flex text-9xl">
      <h1
        className="text-white font-overcamebold text-7xl md:text-9xl"
        ref={firstRef.ref}
      ></h1>
      <span
        className="text-red-500 font-overcameoutline text-7xl md:text-9xl"
        ref={surnameRef.ref}
      ></span>
    </div>
  );
}
