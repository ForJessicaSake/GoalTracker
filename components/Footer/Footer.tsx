import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiMail, CiLinkedin } from "react-icons/ci";
import { PiTwitterLogoLight, PiGithubLogoLight } from "react-icons/pi";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="mx-auto container sm:px-5 px-3 py-4 pt-10 lg:pt-16 space-y-10 sm:gap-10 lg:gap-0  sm:space-y-0 w-full font-medium flex flex-col lg:flex lg:flex-row sm:grid sm:grid-cols-2 justify-between"
    >
      <ul >
        <li>
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/Navbar/logo.png"
              alt="logo"
              width={34}
              height={34}
            />
            <span className="pl-1 text-lg font-bold">GoalTracker</span>
          </Link>
        </li>
        <li className="py-4 flex items-center">
          <span className="pr-2">
            <CiMail />
          </span>
          goaltracker@gmail.com
        </li>
        <li className="flex items-center text-xl text-black">
          <PiGithubLogoLight />
          <PiTwitterLogoLight className="mx-5" />
          <CiLinkedin />
        </li>{" "}
      </ul>

      <ul className="cursor-pointer">
        <li><Link href="/">Home</Link> </li>
        <li className="py-4"><Link href="/">About Us</Link></li>
        <li><Link href="/#features">Features</Link></li>
      </ul>

      <ul className="cursor-pointer">
        <li><Link href="/#testimonials">Testimonials</Link></li>
        <li className="py-4"><Link href="/#pricing">Pricing</Link></li>
        <li><Link href="/#testimonials">Reviews</Link></li>
      </ul>
      <ul className="cursor-pointer">
        <li>Terms of use</li>
        <li className="py-4">Privacy policy</li>
        <li>Cookies policy</li>
      </ul>
    </footer>
  );
};

export default Footer;
