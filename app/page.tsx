"use client";
import React, { useState } from "react";
import HomePageName from "./components/HomePageName";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="h-[100vh] overflow-hidden relative"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: `radial-gradient(circle 100px at ${mousePosition.x}px ${mousePosition.y}px, rgba(69, 69, 131, 1) 0%, rgba(0, 0, 0, 0) 70%)`,
          }}
        />
      )}

      <div className="bg-gradient-to-b from-black via-black/70 to-black/80 inset-0 absolute z-0"></div>

      <div className="">
        <video src={"/dior.mp4"} muted autoPlay playsInline loop />
      </div>

      <div className="flex justify-start items-center z-0 absolute inset-0 max-w-7xl mx-auto">
        <HomePageName />
      </div>
    </div>
  );
}
