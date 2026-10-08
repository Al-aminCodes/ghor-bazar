import HeadLine from "@/components/HeadLine";
import HeroSction from "@/components/HeroSction";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeadLine />
      <main className="container mx-auto bg-[#f0f5f0]">
        <HeroSction />
      </main>
    </div>
  );
}
