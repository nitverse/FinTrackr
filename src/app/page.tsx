"use client";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "@/components/ui/button";

export default function Page() {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased overflow-hidden">
      <Image
        src="/fintrackr.webp"
        alt="alt"
        height={300}
        width={300}
        className="rounded-3xl z-10"
      />
      <div className="max-w-2xl mx-3 gap-x-4 z-10 p-4">
        <h1 className="relative z-10 text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          The Ultimate Portfolio Manager
        </h1>
        <p className="text-neutral-500 max-w-3xl mx-auto my-2 text-lg text-center relative z-10">
          Welcome to FinTrackr, the best portfolio management app for Indian
          stocks and mutual funds. We provide reliable, scalable, and
          customizable solutions for managing your investments. Whether you're
          tracking stock performance, managing mutual fund portfolios, or
          analyzing market trends, FinTrackr has got you covered.
        </p>
        <div className="mt-6 flex justify-center z-20">
          <Button
            onClick={() => {
              router.push("/dashboard");
            }}
            className="bg-teal-600 cursor-pointer hover:bg-teal-700 text-white"
          >
            Go to Dashboard
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
          </Button>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
