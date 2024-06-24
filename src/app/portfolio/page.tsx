import { currentProfile } from "@/lib/currentProfile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  const profile = await currentProfile();
  if (!profile) return redirect("/");

  const portfolios = await db.portfolio.findMany({
    where: {
      userId: profile.id,
    },
  });

  return (
    <div className="flex flex-col">
      <h1 className="text-5xl">Portfolios</h1>
      <div>
        <ul>
          {portfolios.map((portfolio) => (
            <li key={portfolio.id}>{portfolio.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;
