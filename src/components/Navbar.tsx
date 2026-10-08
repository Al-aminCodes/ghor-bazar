import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo-icon.png";
import BanglaDate from "./BangleDate";
import NavCategroy from "./NavCategroy";

const Navbar = () => {
  return (
    <div className="  border border-b-gray-300 bg-[#FFFFFF]">
      <div className="border border-b-gray-300">
        <nav className="container mx-auto flex items-center justify-between py-5 ">
          <div className="flex gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-600">
              <Image
                src={logo}
                width={32}
                height={32}
                alt="Navbar logo"
                className="object-contain"
              />
            </div>
            <div className="hidden md:block">
              <h2 className="font-bold text-2xl text-black ">বাজার দর</h2>

              <BanglaDate></BanglaDate>
            </div>
          </div>
          <div className="flex gap-2">
            {" "}
            <Link href={"/signin"}>
              <button className="btn btn-ghost text-neutral-700 transition-colors hover:text-green-700">
                সাইন ইন
              </button>
            </Link>
            <Link href={"/signup"}>
              {" "}
              <button className="btn  bg-green-700 px-3 py-1.5 font-semibold text-white transition-colors hover:bg-green-800 rounded-xl">
                সাইন আপ
              </button>
            </Link>
          </div>
        </nav>

        {/* <HeaderLink /> */}
      </div>
      <NavCategroy />
    </div>
  );
};

export default Navbar;
