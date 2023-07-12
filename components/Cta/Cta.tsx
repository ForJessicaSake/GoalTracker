import React from "react";
import Button from "../Micro/Button/Button";
import Link from "next/link";

const Cta = () => {
  return (
    <main
      className="px-5 mx-auto container text-black pb-20"
      data-aos="zoom-in-right"
    >
      <div className="flex flex-col items-center text-center justify-center ">
        <h1 className="text-3xl font-semibold">Get started today</h1>
        <p className="max-w-lg py-5 text-sm">
          It is time to take charge of your goals. Sign up with GoalTracker
          today and let us help you make the most of what you do!
        </p>
        <div className="flex sm:flex-row flex-col" data-aos="fade-left">
          <Link href="/signup">
            <Button className=" animate-pulse bg-background text-white rounded-full p-2 w-48 h-14">
              Register Now!
            </Button>
          </Link>

        
        </div>
      </div>
    </main>
  );
};

export default Cta;
