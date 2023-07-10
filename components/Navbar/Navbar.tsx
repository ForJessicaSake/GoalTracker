import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import Button from "../Micro/Button/Button";

const Navbar = () => {
  const [nav, setNav] = React.useState(false);
  return (
    <nav className="mx-auto container p-5">
      {/*desktop*/}
      <div className="justify-between items-center hidden lg:flex">
        <div className="flex items-center w-6/12 justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/Navbar/logo.png"
              alt="logo"
              width={34}
              height={34}
            />
            <span className="pl-1 text-lg font-bold">progressPal</span>
          </Link>
          <ul className="flex items-center justify-between w-8/12 text-gray-600 cursor-pointer">
            <li>
              <a href="/#features">features</a>
            </li>
            <li>
              <a href="/#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="/#contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <ul className="flex items-center">
          <li className="text-gray-600 cursor-pointer">
            <Link href="/login">Sign in</Link>
          </li>
          <Link href="/signup">
            <Button className="mx-5  bg-background text-white rounded-lg">
              Get started today
            </Button>
          </Link>
        </ul>
      </div>

      {/* mobile */}
      <div className="lg:hidden flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/Navbar/logo.png"
            alt="logo"
            width={34}
            height={34}
          />
          <span className="pl-1 text-lg font-bold">GoalTracker</span>
        </Link>
        <ul
          className={`absolute top-20 bg-background items-center w-full left-0 py-10 text-white h-full ${
            nav ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col h-3/4 items-center justify-between">
            <li>
              <a href="/#features">features</a>
            </li>
            <li>
              <a href="/#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="/#contact">Contact Us</a>
            </li>
            <li className="text-gray-600 cursor-pointer">
              <Link href="/login">Login</Link>
            </li>
            <li className="text-gray-600 cursor-pointer">
              <Link href="/signup">Sign up</Link>
            </li>{" "}
          </div>
        </ul>
        <div className="lg:hidden block text-3xl" onClick={() => setNav(!nav)}>
          {!nav ? <CiMenuBurger /> : <TfiClose />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
