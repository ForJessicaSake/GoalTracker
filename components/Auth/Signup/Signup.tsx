import React from "react";
import Button from "../../Micro/Button/Button";
import Link from "next/link";
import { signUp } from "../../Utils/Firebase/Firebase";
import { toast } from "react-toastify";
import { googleAuth } from "../../Utils/Firebase/Firebase";
import { useRouter } from "next/router";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import AuthFrame from "../AuthFrame";

const Signup = () => {
  const router = useRouter();
  const [register, setRegister] = React.useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = React.useState({
    googleAuth: false,
    emailAuth: false,
  });
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(register?.email);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading({ ...isLoading, emailAuth: true });
    e.preventDefault();
    if (isValidEmail) {
      try {
        await signUp(register.email, register.password);
        toast.success("Welcome!");
        setTimeout(() => {
          router.push("/login");
        }, 2500);
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
    } else {
      toast.error("Invalid email address");
    }
    setIsLoading({ ...isLoading, emailAuth: false });
  };

  const handleGoogleAuth = () => {
    setIsLoading({ ...isLoading, googleAuth: true });
    googleAuth().then(() => {
      setTimeout(() => {
        toast.success("Welcome to Goal Tracker");
        router.push("/dashboard");
      }, 2500);
      setIsLoading({ ...isLoading, googleAuth: true });
    });
  };

  return (
    <AuthFrame>
      <h1 className="text-3xl font-semibold tracking-tight">Create an account</h1>
      <p className="mt-2 text-sm text-mist">Start a list and come back to it.</p>
      <form className="mt-10 flex flex-col" onSubmit={handleRegister}>
        <input
          className="field"
          placeholder="Email"
          required
          type="email"
          value={register.email}
          onChange={(e) => setRegister({ ...register, email: e.target.value })}
        />
        <input
          className="field mt-4"
          placeholder="Password"
          required
          type="Password"
          value={register.password}
          onChange={(e) =>
            setRegister({ ...register, password: e.target.value })
          }
        />
        <Button
          className="mt-6 rounded-lg bg-accent text-sm font-semibold text-ink"
          disabled={isLoading.emailAuth}
        >
          {isLoading.emailAuth ? "Please wait" : "Create account"}
        </Button>
        <button
          type="button"
          onClick={handleGoogleAuth}
          className="mt-3 rounded-lg border border-white/15 py-3 text-sm font-medium text-paper"
        >
          {!isLoading.googleAuth ? (
            "Continue with Google"
          ) : (
            <span className="inline-flex items-center justify-center">
              Please wait
              <AiOutlineLoading3Quarters className="ml-2 animate-spin" />
            </span>
          )}
        </button>
        <p className="mt-8 text-sm text-mist">
          Already have an account?{" "}
          <Link href="/login" className="text-accent">
            Sign in
          </Link>
        </p>
      </form>
    </AuthFrame>
  );
};

export default Signup;
