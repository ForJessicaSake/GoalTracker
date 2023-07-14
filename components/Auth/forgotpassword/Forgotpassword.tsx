import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../../Micro/Button/Button";
import { ResetPassword, UseAuth } from "../../Utils/Firebase/Firebase";
import { toast } from "react-toastify";
import { getAuth } from "firebase/auth";

const Forgotpassword = () => {
  const currentUser = UseAuth();
  const [submit, setSubmit] = React.useState(false);
  const [password, setPassword] = React.useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmit(true);
    if (submit === true && password.newPassword !== password.confirmPassword) {
      toast.error("Password does not match");
    } else {
      try {
        await ResetPassword(password.newPassword);
      } catch (error) {
        console.log(error);
      }
    }
  };

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
          onSubmit={handleForgotPassword}
        >
          <label className="text-2xl sm:py-5 py-8 font-semibold">
            Forgot Password?
          </label>
          <input
            required
            className="border lg:max-w-sm  p-4 rounded-lg"
            placeholder="Enter your email address"
            type="email"
          />
          <input
            className="border lg:max-w-sm p-4 my-6 rounded-lg"
            placeholder="Enter your new password"
            type="Password"
            required
            value={password.newPassword}
            onChange={(e) =>
              setPassword({ ...password, newPassword: e.target.value })
            }
          />
          <input
            className="border lg:max-w-sm p-4 rounded-lg"
            placeholder="confirm your password"
            type="Password"
            required
            value={password.confirmPassword}
            onChange={(e) =>
              setPassword({ ...password, confirmPassword: e.target.value })
            }
          />

          <div className="flex mt-6 lg:flex-row items-center lg:max-w-md">
            <Button className="bg-card text-white w-40 rounded-lg">
              SUBMIT
            </Button>
          </div>
          <Link href="/signup">
            <div className="w-full flex justify-center lg:max-w-sm bg-black my-10 rounded-lg py-4 text-white">
              LOGIN
            </div>
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
