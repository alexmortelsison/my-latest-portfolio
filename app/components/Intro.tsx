// IntroPage.js (or whatever you call your main component)
"use client";
import gsap from "gsap";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";

export default function IntroPage() {
  const router = useRouter();
  const videoContainerRef = useRef(null);

  const handleVideoEnd = () => {
    gsap.to(videoContainerRef.current, {
      opacity: 0,
      duration: 1.5,
      ease: "power2.in",
      onComplete: () => {
        router.push("/home");
      },
    });
  };

  return (
    <div className="h-[100vh] w-full overflow-hidden" ref={videoContainerRef}>
      <video
        src="/alexintro.mp4"
        playsInline
        muted
        autoPlay
        onEnded={handleVideoEnd}
        className="object-cover h-full w-full"
      ></video>
    </div>
  );
}
