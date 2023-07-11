import { toast } from "react-toastify";

type PaystackProps = {
  reference: any;
  email: string;
  amount: number;
  publicKey: string | any;
};

export const config: PaystackProps = {
  reference: new Date().getTime().toString(),
  email: "user@example.com",
  amount: 500000,
  publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
};

export const onSuccess = () => {
  setTimeout(() => {
    toast.success("Payment successfully completed");
  }, 500);
};
export const onClose = () => {
  setTimeout(() => {
    toast.error("Your payment was unsuccessful, please try again!");
  }, 500);
};
