import React from "react";
import HomePageName from "./components/HomePageName";

export default function Home() {
  return (
    <div className="h-[100vh] overflow-hidden relative">
      <div className="bg-gradient-to-b from-black via-black/60 to-black/80 inset-0 absolute z-0"></div>
      <div className="">
        <video src={"/dior.mp4"} muted autoPlay playsInline loop />
      </div>
      <div className="flex justify-start items-center z-0 absolute inset-0 max-w-7xl mx-auto">
        <HomePageName />
      </div>
    </div>
  );
}
