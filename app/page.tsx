import React from "react";
import Intro from "./components/Intro";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-black via-black/80 to-black h-[100vh] flex justify-center items-center text-9xl">
      <Intro />
    </div>
  );
}
