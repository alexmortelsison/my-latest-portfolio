"use client";
import React, { useEffect } from "react";
import Hero from "./components/Hero";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    return router.push("/home");
  }, [router]);
}
