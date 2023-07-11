import React, { FormEvent } from "react";
import Button from "../../Micro/Button/Button";
import Image from "next/image";
import Link from "next/link";
import { signUp } from "../../Utils/Firebase/Firebase";
import { toast } from "react-toastify";
import { googleAuth } from "../../Utils/Firebase/Firebase";
import { useRouter } from "next/router";

const Signup = () => {
  const router = useRouter();
  //register user object
  const [register, setRegister] = React.useState({
    email: "",
    password: "",
  });

  //register function
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signUp(register.email, register.password);
      toast.success("Welcome to progressPal!");
      setTimeout(() => {
        router.push("/login");
      }, 3000);
    } catch (error: any) {
      if (error.code === "auth/weak-password") {
        toast.error("Weak password!");
      } else if (error.code === "auth/invalid-email") {
        toast.error("Invalid email address");
      } else if (error.code === "auth/email-already-in-use") {
        toast.error("Email already in use, kindly log in");
      } else {
        toast.error("Network error, kindly check your internet connection");
      }
    }
  };

  return (
    <main className="sm:grid sm:grid-cols-2 overflow-y-hidden flex flex-col-reverse h-full 2xl:container 2xl:mx-auto">
      <div className="lg:p-8 p-5">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/Navbar/logo.png"
            alt="logo"
            width={34}
            height={34}
          />
          <span className="pl-1 text-xl font-bold">progressPal</span>
        </Link>
        <form
          className=" flex flex-col h-full justify-center"
          data-aos="zoom-in"
          onSubmit={handleRegister}
        >
          <label className="text-2xl py-5 font-semibold">Sign Up</label>
          <input
            className="border lg:max-w-sm  p-4 rounded-lg"
            placeholder="Enter your email address"
            required
            type="email"
            value={register.email}
            onChange={(e) =>
              setRegister({ ...register, email: e.target.value })
            }
          />
          <input
            className="border lg:max-w-sm p-4 my-6 rounded-lg"
            placeholder="password"
            required
            type="Password"
            value={register.password}
            onChange={(e) =>
              setRegister({ ...register, password: e.target.value })
            }
          />
          <div className="flex lg:flex-row flex-col justify-between  items-center lg:max-w-sm">
            <Button className="bg-card hover:bg-background text-white w-40 rounded-lg">
              SIGN UP
            </Button>
            <div className="lg:py-0 pt-3">Already have an account?</div>
          </div>
          <Link
            href="/login"
            className="w-full flex items-center justify-center  lg:max-w-sm bg-black my-5 rounded-lg py-4 text-white"
          >
            LOGIN
          </Link>
          <p className="flex items-center justify-center max-w-sm">OR</p>
          <div
            onClick={() => {
              googleAuth()
                .then(() => {
                  setTimeout(() => {
                    toast.success("Welcome to ProgressPal");
                    router.push("/");
                  }, 3000);
                })
                .catch(()=> {
                  toast("Google sign-in error");
                });
            }}
            className="w-full cursor-pointer flex justify-center lg:max-w-sm bg-white my-3 border-black border-2 rounded-lg py-4 text-black"
          >
            SIGN UP WITH GOOGLE
          </div>
        </form>
      </div>
      <section className="bg-card h-screen p-8 flex items-center">
        <Image src="/assets/sign.png" alt="sign in" width={600} height={400} />
      </section>
    </main>
  );
};

export default Signup;
