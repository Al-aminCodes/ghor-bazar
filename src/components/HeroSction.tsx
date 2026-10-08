import Image from "next/image";
import heroImg from "../assets/bazar-hero.png";
import BanglaDate from "./BangleDate";
import Link from "next/link";

const HeroSction = () => {
  return (
    <div className="container mx-auto grid min-h-85 grid-cols-1 lg:grid-cols-2 items-center gap-10 px-4 bg-[#FFFFFF] my-7 rounded-3xl">
      {/* Left side */}
      <div className="max-w-2xl grid justify-center lg:justify-start">
        <h4 className="mb-3  md:max-w-58 inline-block rounded-full bg-green-600 px-4 py-2 text-sm font-medium text-white">
          <BanglaDate />
        </h4>

        <h1 className="mb-4 text-4xl font-bold leading-tight text-slate-900">
          আজকের বাজারের দাম এক নজরে
        </h1>

        <p className="mb-7 max-w-xl text-lg leading-8 text-slate-600">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
          বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
        </p>

        <Link href="/">
          <button className="rounded-xl bg-green-700 px-5 py-3 font-semibold text-white transition-colors hover:bg-green-800">
            সব পণ্য দেখুন
          </button>
        </Link>
      </div>

      {/* Right side */}
      <div className="flex justify-end">
        <Image
          src={heroImg}
          alt="বাজারের পণ্য"
          width={350}
          height={250}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default HeroSction;
