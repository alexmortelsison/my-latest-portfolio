"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./EqualizerButton.module.css";

const EqualizerButton: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/music.mp3");

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (isActive) {
        audioRef.current.play().catch((error) => {
          console.error("Audio playback failed:", error);
          setIsActive(false);
        });
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  }, [isActive]);

  useEffect(() => {
    const audio = audioRef.current;
    const handleAudioEnd = () => {
      setIsActive(false);
    };
    if (audio) {
      audio.addEventListener("ended", handleAudioEnd);
    }
    return () => {
      if (audio) {
        audio.removeEventListener("ended", handleAudioEnd);
      }
    };
  }, []);

  const toggleEqualizer = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <button
      onClick={toggleEqualizer}
      className="flex items-end justify-center gap-1 shadow-md transition-colors"
      aria-label={isActive ? "Stop equalizer" : "Start equalizer"}
    >
      <span
        className={`w-2 h-4 bg-gray-400 rounded-full origin-bottom ${
          isActive ? styles.eqBar1 : ""
        }`}
      ></span>
      <span
        className={`w-2 h-2 bg-gray-400 rounded-full origin-bottom ${
          isActive ? styles.eqBar2 : ""
        }`}
      ></span>
      <span
        className={`w-2 h-8 bg-gray-400 rounded-full origin-bottom ${
          isActive ? styles.eqBar3 : ""
        }`}
      ></span>
      <span
        className={`w-2 h-6 bg-gray-400 rounded-full origin-bottom ${
          isActive ? styles.eqBar4 : ""
        }`}
      ></span>
      <span
        className={`w-2 h-4 bg-gray-400 rounded-full origin-bottom ${
          isActive ? styles.eqBar5 : ""
        }`}
      ></span>
    </button>
  );
};

export default EqualizerButton;
