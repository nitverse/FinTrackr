"use client";
import React from "react";
import Link from "next/link";
import { useModal } from "@/hooks/useModalStore";
import { MoveRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";

const Dashboard = () => {
  const totalInvested = "₹100,000"; // Dummy data
  const totalReturns = "₹20,000"; // Dummy data

  const { onOpen } = useModal();

  return (
    <div className="container mx-auto p-4">
      <div className="h-12 w-12">
        <UserButton />
      </div>
      <Toaster />
      <div className="gap-y-4">
        <h2 className="text-5xl font-bold mb-4">Portfolio</h2>
        <div className="mb-8 gap-x-4 flex items-center">
          <Button
            onClick={() => onOpen("createPortfolio")}
            className="group flex items-center"
          >
            Create Portfolio
          </Button>
          <Link href="/portfolio">
            <button className="relative flex justify-center h-12 md:h-16 w-36 md:w-48 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-offset-2 focus:ring-offset-slate-50 hover:bg-slate-850">
              <span className="absolute inset-[-100%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 hover:bg-slate-250 px-4 md:px-6 py-1 md:py-2 text-base md:text-lg font-medium text-white backdrop-blur-3xl">
                Go to Portfolios <MoveRight className="h-6 md:h-8 w-6 md:w-8" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
