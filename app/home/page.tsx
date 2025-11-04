"use client";
import { AiOutlinePlayCircle } from "react-icons/ai";
import React, { useState, useRef } from "react";
import HomePageName from "../components/HomePageName";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false); // Track user gesture
  const videoRef = useRef<HTMLVideoElement>(null); // Ref to control video

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

  const handleUserInteraction = () => {
    if (!hasInteracted && videoRef.current) {
      // Unmute and ensure playback on first interaction
      videoRef.current.muted = false;
      videoRef.current.volume = 0.5; // Adjust volume as needed (0-1)
      videoRef.current
        .play()
        .catch((err) => console.error("Play failed:", err));
      setHasInteracted(true);
    }
  };

  return (
    <div
      className="h-screen overflow-hidden relative cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleUserInteraction}
    >
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: `radial-gradient(circle 100px at ${mousePosition.x}px ${mousePosition.y}px, rgba(69, 69, 131, 1) 0%, rgba(0, 0, 0, 0) 70%)`,
          }}
        />
      )}

      <div className="bg-linear-to-b from-black/80 via-black/50 to-black/80 inset-0 absolute z-0"></div>

      <div className="absolute -z-1 h-full w-full">
        <video
          ref={videoRef}
          src={"/bg.mp4"}
          autoPlay
          playsInline
          muted
          loop
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex xl:justify-start justify-center items-center z-0 absolute lg:inset-0 lg:max-w-7xl lg:mx-auto">
        <HomePageName />
      </div>

      {!hasInteracted && (
        <div className="absolute inset-0 flex items-center justify-center z-5 pointer-events-none">
          <div className="text-white/50 text-sm">
            <AiOutlinePlayCircle className="h-50 w-50" />
          </div>
        </div>
      )}
    </div>
  );
}
