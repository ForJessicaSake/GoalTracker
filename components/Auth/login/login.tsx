import React from "react";
import Button from "../../Micro/Button/Button";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <main className="sm:grid sm:grid-cols-2 flex flex-col-reverse overflow-y-hidden h-full 2xl:container 2xl:mx-auto">
      <div className="lg:p-8 p-5">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/Navbar/logo.png"
            alt="logo"
            width={34}
            height={34}
          />
          <span className="pl-1 text-xl font-bold">progressPal</span>
        </Link>{" "}
        <form className=" flex flex-col h-full justify-center">
          <label className="text-2xl py-5 font-semibold">Sign In</label>
          <input
            className="border lg:max-w-sm  p-4 rounded-lg"
            placeholder="Enter your email address"
            type="email"
          />
          <input
            className="border lg:max-w-sm p-4 my-6 rounded-lg"
            placeholder="password"
            type="Password"
          />
          <div className="flex lg:flex-row flex-col justify-between  items-center lg:max-w-sm">
            <Button className="bg-card text-white w-40 rounded-lg">
              LOGIN
            </Button>
            <Link href="/forgotpassword" className="lg:py-0 pt-3">
              Forgot your password?
            </Link>
          </div>
          <Link href="/signup">
            <Button className="w-full  lg:max-w-sm bg-black my-10 rounded-lg py-4 text-white">
              CREATE NEW ACCOUNT
            </Button>
          </Link>
        </form>
      </div>
      <section className="bg-card h-screen flex items-center px-5">
        <Image src="/assets/sign.png" alt="sign in" width={600} height={400} />
      </section>
    </main>
  );
};

export default Login;
