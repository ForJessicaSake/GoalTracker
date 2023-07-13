import { toast } from "react-toastify";
import { getCookie } from "cookies-next";

type PaystackProps = {
  reference: any;
  email: string;
  amount: number;
  publicKey: string | any;
};
export const config: PaystackProps = {
  reference: new Date().getTime().toString(),
  email: "goalTracker@gmail.com",
  amount: 500000,
  publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
};

export const onSuccess = () => {
  toast.success("Payment successfully completed");
};
export const onClose = () => {
  toast.error("Your payment was unsuccessful, please try again later!");
};
