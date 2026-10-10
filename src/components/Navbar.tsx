import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo-icon.png";
import BanglaDate from "./BangleDate";
import ButtonHandler from "./navButton";
import HeadLine from "./HeadLine";
import NavCategoryData from "./NavCategoryData";

const Navbar = () => {
  return (
    <header className=" sticky top-0 z-50 w-full border-b border-gray-300 bg-white">
      {/* Main navbar */}
      <div className="border-b border-gray-300">
        <nav className="container mx-auto flex items-center justify-between px-4 py-5">
          <div className="flex gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-600">
              <Link href="/">
                <Image
                  src={logo}
                  width={32}
                  height={32}
                  alt="Navbar logo"
                  className="object-contain"
                />
              </Link>
            </div>

            <div className="hidden md:block">
              <h2 className="text-2xl font-bold text-black">বাজার দর</h2>
              <BanglaDate />
            </div>
          </div>

          <div className="flex gap-2">
            <ButtonHandler />
          </div>
        </nav>
      </div>

      {/* Categories: inside the same container */}
      <div className="border-b border-gray-300 bg-white">
        <div className="container mx-auto min-w-0 px-4">
          <NavCategoryData />
        </div>
      </div>

      {/* Headline */}
      <div className="container mx-auto px-4">
        <HeadLine />
      </div>
    </header>
  );
};

export default Navbar;
