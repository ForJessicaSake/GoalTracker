import React from "react";
import Button from "../Micro/Button/Button";
import { CiPlay1 } from "react-icons/ci";
import Link from "next/link";

const Header = () => {
 return (
    <header
      className="mx-auto container px-3 sm:px-5 py-12 lg:py-20"
      data-aos="fade-up"
    >
      <div className="flex flex-col text-center justify-center items-center">
        <h1 className="text-4xl sm:text-5xl font-semibold max-w-2xl">
          Goal Tracking <span className="text-background">made simple </span>for
          you and your goals
        </h1>
        <p className="max-w-[510px] py-5">
          {" "}
          Most progress tracking softwares are excellent, but hard to use. We
          make the trade-offs better and hope you enjoy your stay here.
        </p>
        <div className="sm:flex">
          <Link href="/signup">
            <Button className=" bg-black text-white w-44 rounded-full">
              Free Forever
            </Button>
          </Link>
          <Button className="flex items-center hover:text-black justify-center bg-white text-background border w-44 rounded-full sm:mx-5 my-4 sm:my-0">
            <CiPlay1 className="mr-1 text-lg" />
            Watch Demo
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
