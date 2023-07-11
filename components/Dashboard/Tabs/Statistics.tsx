import Image from "next/image";
import React from "react";
import Button from "../../Micro/Button/Button";
import Footer from "../../Footer/Footer";
import { onSuccess, onClose, config } from "../../Paystack/Paystack";
import { usePaystackPayment } from "react-paystack";


const Statistics = () => {
  const initializePayment = usePaystackPayment(config);
  return (
    <main className="">
      <section className="flex justify-center items-center px-5 flex-col text-center">
        <div>
          <Image src="/assets/download.png" alt="" width={120} height={120} />
        </div>
        <div>
          <p className="text-xl">We are still</p>
          <h1 className="lg:text-5xl sm:text-4xl text-3xl  font-bold">
            Cooking this feature!
          </h1>
          <p className="py-2 text-lg">
            A launch would happen very soon, upgrade to Pro to get notified!
          </p>

          <Button
            className="bg-black text-lg my-3 mb-5 text-white w-40 font-semibold rounded-full"
            onClick={() => initializePayment(onSuccess, onClose)}
          >
            Upgrade Now
          </Button>
        </div>
      </section>
      <div className="border-t">
        <Footer />
      </div>
    </main>
  );
};

export default Statistics;
