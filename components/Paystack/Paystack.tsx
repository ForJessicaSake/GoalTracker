import { toast } from "react-toastify";

type PaystackProps ={
    reference: any,
    email: string,
    amount: number,
    publicKey: string | any,
}

export const config : PaystackProps= {
  reference: new Date().getTime().toString(),
  email: "user@example.com",
  amount: 500000,
  publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
};

export const onSuccess = () => {
  toast.success("Payment successfully completed");
};
export const onClose = () => {
  toast.error("Your payment was unsuccessful, please try again!");
};
