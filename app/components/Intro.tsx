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
    <div className="flex">
      <h1 className="text-white font-overcamebold" ref={firstRef.ref}></h1>
      <span
        className="text-red-500 font-overcameoutline"
        ref={surnameRef.ref}
      ></span>
    </div>
  );
}
