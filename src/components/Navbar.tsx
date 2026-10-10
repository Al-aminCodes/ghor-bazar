import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo-icon.png";
import BanglaDate from "./BangleDate";
import NavCategroy from "./NavCategroy";
import ButtonHandler from "./navButton";
import HeadLine from "./HeadLine";

const Navbar = () => {
  return (
    <div className="  border border-b-gray-300 bg-[#FFFFFF]">
      <div className="border border-b-gray-300">
        <nav className="container mx-auto flex items-center justify-between py-5 ">
          <div className="flex gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-600">
              <Link href={"/"}>
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
              <h2 className="font-bold text-2xl text-black ">বাজার দর</h2>

              <BanglaDate></BanglaDate>
            </div>
          </div>
          <div className="flex gap-2">
            {" "}
            <ButtonHandler></ButtonHandler>
          </div>
        </nav>

        {/* <HeaderLink /> */}
      </div>
      <NavCategroy />
      <HeadLine />
    </div>
  );
};

export default Navbar;
