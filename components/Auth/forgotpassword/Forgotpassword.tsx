import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../../Micro/Button/Button";

const Forgotpassword = () => {
  return (
    <main className="sm:grid sm:grid-cols-2 overflow-y-hidden h-full 2xl:container 2xl:mx-auto">
      <div className="lg:p-8 p-5">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/Navbar/logo.png"
            alt="logo"
            width={34}
            height={34}
          />
          <span className="pl-1 text-lg font-bold">GoalTracker</span>
        </Link>{" "}
        <form
          className=" flex flex-col h-full justify-center"
          data-aos="zoom-in"
        >
          <label className="text-2xl sm:py-5 py-8 font-semibold">
            Forgot Password?
          </label>
          <input
            className="border lg:max-w-sm  p-4 rounded-lg"
            placeholder="Enter your email address"
            type="email"
          />
          <input
            className="border lg:max-w-sm p-4 my-6 rounded-lg"
            placeholder="Enter your new password"
            type="Password"
          />
          <input
            className="border lg:max-w-sm p-4 rounded-lg"
            placeholder="confirm your password"
            type="Password"
          />

          <div className="flex mt-6 lg:flex-row items-center lg:max-w-md">
            <Button className="bg-card text-white w-40 rounded-lg">
              SUBMIT
            </Button>
          </div>
          <Link href="/signup">
            <Button className="w-full  lg:max-w-sm bg-black my-10 rounded-lg py-4 text-white">
              LOGIN
            </Button>
          </Link>
        </form>
      </div>
      <section className="bg-card h-screen sm:flex hidden items-center px-5">
        <Image src="/assets/sign.png" alt="sign in" width={600} height={400} />
      </section>
    </main>
  );
};

export default Forgotpassword;
