import React from "react";

export default function Home() {
  return (
    <div className="h-[100vh] w-full overflow-hidden flex justify-center items-center">
      <div className="relative -z-50 w-full h-screen">
        <video
          src={"/alexvideo.mp4"}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="bg-gradient-to-b from-black/90 via-transparent to-black/90 absolute z-10 inset-0"></div>
      </div>
      <div className="absolute text-white font-playfair justify-center text-center tracking-wide">
        <h1 className="text-[180px]">Alex Sison</h1>
        <p className="text-4xl">Frontend Developer / Web Designer</p>
      </div>
    </div>
  );
}
