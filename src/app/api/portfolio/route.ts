import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { currentProfile } from "@/lib/currentProfile";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const profile = await currentProfile();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { name } = await req.json();

    if (!name) {
      return new NextResponse("Invalid request body", { status: 400 });
    }

    const portfolio = await prisma.portfolio.create({
      data: {
        name,
        userId: profile.id, 
      },
    });
      
    //   console.log(portfolio);
      

    return new NextResponse(JSON.stringify(portfolio), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
      
  } catch (error) {
    console.error("Create Portfolio Error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
