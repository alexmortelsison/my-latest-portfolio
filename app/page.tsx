"use client";
import React from "react";
import Hero from "./components/Hero";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  return router.push("/home");
}
