import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiMail, CiLinkedin } from "react-icons/ci";
import { PiTwitterLogoLight, PiGithubLogoLight } from "react-icons/pi";

const Footer = () => {
  return (
    <footer id="contact" className="mx-auto container px-5 py-4 pt-10 lg:pt-16 gap-y-10 lg:gap-y-0 w-full font-medium flex sm:flex-row flex-col justify-between">
      <ul className="">
        <li>
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/Navbar/logo.png"
              alt="logo"
              width={34}
              height={34}
            />
            <span className="pl-1 text-lg font-bold">progressPal</span>
          </Link>
        </li>
        <li className="py-4 flex items-center">
          <span className="pr-2">
            <CiMail />
          </span>
          progressPal@gmail.com
        </li>
        <li className="flex items-center text-xl text-black">
          <PiGithubLogoLight />
          <PiTwitterLogoLight className="mx-5" />
          <CiLinkedin />
        </li>{" "}
      </ul>

      <ul>
        <li>Home</li>
        <li className="py-4">About Us</li>
        <li>Features</li>
      </ul>

      <ul>
        <li>Testimonials</li>
        <li className="py-4">Pricing</li>
        <li>Reviews</li>
      </ul>
      <ul>
        <li>Terms of use</li>
        <li className="py-4">Privacy policy</li>
        <li>Cookies policy</li>
      </ul>
    </footer>
  );
};

export default Footer;
