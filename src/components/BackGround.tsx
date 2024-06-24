import { UserButton } from "@clerk/nextjs";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const BackGround = () => {
  return (
    <div className="h-[53rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className=" border-violet-400 flex flex-1 justify-center items-center">
        <Image
          src="/watchPortfolio.webp"
          alt="portfolio"
          height={800}
          width={800}
          className="ml-32"
        />
      </div>

      <div className="flex flex-1 flex-col justify-center items-center mr-22">
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          FinTrackr
        </p>
        <UserButton />
        <Link href="/dashboard">
          <button className="relative mt-8 flex justify-center h-16 w-48 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-offset-2 focus:ring-offset-slate-50 hover:bg-slate-850">
            <span className="absolute inset-[-100%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 hover:bg-slate-250 px-6 py-2 text-lg font-medium text-white backdrop-blur-3xl">
              Go to Dashboard <MoveRight className="h-8 w-8" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BackGround;
