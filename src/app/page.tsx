"use client";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import Image from "next/image";
import React from "react";

export default function BackgroundBeamsDemo() {
  return (
    <div className="min-h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased overflow-hidden">
      <Image
        src="/fintrackr.webp"
        alt="alt"
        height={500}
        width={500}
        className="rounded-3xl"
      />
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          The Ultimate Portfolio Manager
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome to FinTrackr, the best portfolio management app for Indian
          stocks and mutual funds. We provide reliable, scalable, and
          customizable solutions for managing your investments. Whether you're
          tracking stock performance, managing mutual fund portfolios, or
          analyzing market trends, FinTrackr has got you covered.
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}
