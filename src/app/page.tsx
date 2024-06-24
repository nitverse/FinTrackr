import BackGround from "@/components/BackGround";
import { initialUser } from "@/lib/initialUser";
import Image from "next/image";

export default async function Home() {
  const profile = await initialUser();
  // console.log(profile);
  
  return (
    <main className="flex">
      <BackGround />
    </main>
  );
}
