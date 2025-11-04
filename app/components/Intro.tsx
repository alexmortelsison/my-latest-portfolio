"use client";
import { useRouter } from "next/navigation";
import { useScramble } from "use-scramble";

export default function Intro() {
  const router = useRouter();
  const delay = 1500;
  const firstRef = useScramble({
    text: "Bringing worlds",
    speed: 0.2,
    overdrive: false,
    range: [65, 76, 69, 88, 83, 73, 79, 78],
  });
  const surnameRef = useScramble({
    text: "to life",
    speed: 0.2,
    overdrive: false,
    range: [65, 76, 69, 88, 83, 73, 79, 78],
    onAnimationEnd: () => {
      setTimeout(() => {
        router.push("/home");
      }, delay);
    },
  });

  return (
    <div className="xl:flex justify-center flex flex-col items-center text-center text-7xl space-x-4">
      <h1
        className="text-white font-overcamebold text-4xl md:text-7xl"
        ref={firstRef.ref}
      ></h1>
      <span
        className="text-red-500 font-overcameoutline text-4xl md:text-7xl"
        ref={surnameRef.ref}
      ></span>
    </div>
  );
}
