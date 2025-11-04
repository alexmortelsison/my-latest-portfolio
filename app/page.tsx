import React from "react";
import Intro from "./components/Intro";

export default function Home() {
  return (
    <div className="bg-linear-to-b from-black via-black/80 to-black h-screen flex justify-center items-center">
      <div className="max-w-7xl mx-auto flex items-center xl:whitespace-nowrap">
        <Intro />
      </div>
    </div>
  );
}
