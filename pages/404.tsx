import React from "react";
import Button from "../components/Micro/Button/Button";
import Image from "next/image";
import Footer from "../components/Footer/Footer";
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";

const Notfound = () => {
  return (
    <main className="">
      <Navbar />
      <section className="flex justify-center my-16 items-center sm:px-5 px-3 flex-col text-center">
        <div className="text-9xl font-bold">404 </div>
        <div>
          <p className="py-2 text-lg">
            Sorry, this page you are requesting for does not exist.
          </p>

          <Link href="/">
            <Button className="bg-black animate-pulse text-lg my-3 mb-5 text-white w-40 font-semibold rounded-full">
              Go Home
            </Button>
          </Link>
        </div>
      </section>
      <div className="border-t">
        <Footer />
      </div>
    </main>
  );
};

export default Notfound;
