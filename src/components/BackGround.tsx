import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BackGround = () => {
  return (
    <div className="min-h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col md:flex-row items-center">
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="flex flex-1 justify-center items-center p-4 md:p-0">
        <div className="relative w-80 h-80 md:w-[800px] md:h-[800px]">
          <Image
            src="/watchPortfolio.webp"
            alt="portfolio"
            layout="fill"
            objectFit="contain"
            className="md:ml-32 "
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-center items-center md:mr-22 p-4 md:p-0">
        <p className="text-8xl md:text-4xl lg:text-8xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-4 md:py-8">
          FinTrackr
        </p>
        <Link href="/dashboard">
          <button className="relative mt-8 flex justify-center h-12 md:h-16 w-36 md:w-48 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-offset-2 focus:ring-offset-slate-50 hover:bg-slate-850">
            <span className="absolute inset-[-100%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 hover:bg-slate-250 px-4 md:px-6 py-1 md:py-2 text-base md:text-lg font-medium text-white backdrop-blur-3xl">
              Go to Dashboard <MoveRight className="h-6 md:h-8 w-6 md:w-8" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BackGround;
