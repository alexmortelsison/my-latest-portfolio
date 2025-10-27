"use client";
import React, { useState } from "react";
import HomePageName from "../components/HomePageName";

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

      <div className="bg-gradient-to-b from-black/80 via-black/50 to-black/80 inset-0 absolute z-0"></div>

      <div className="absolute -z-1 h-full w-full">
        <video
          src={"/bg.mp4"}
          muted
          autoPlay
          playsInline
          loop
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex xl:justify-start justify-center items-center z-0 absolute inset-0 max-w-7xl mx-auto w-full">
        <HomePageName />
      </div>
    </div>
  );
}
