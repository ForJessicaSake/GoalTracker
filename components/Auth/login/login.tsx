import React from "react";
import Button from "../../Micro/Button/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import { logIn } from "../../Utils/Firebase/Firebase";
import { toast } from "react-toastify";
import { UseAuth } from "../../Utils/Firebase/Firebase";
import { googleAuth } from "../../Utils/Firebase/Firebase";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import AuthFrame from "../AuthFrame";

const Login = () => {
  UseAuth();
  const [isLoading, setIsLoading] = React.useState({
    googleAuth: false,
    emailAuth: false,
  });

  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading({ ...isLoading, emailAuth: true });
      await logIn(user.email, user.password);
      toast.success(`Set goals and make it happen!`);
      localStorage.setItem("user", JSON.stringify(user));
      setTimeout(() => {
        router.push("/dashboard");
      }, 2500);
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("Email already in use, kindly log in");
      } else if (error.code === "auth/user-not-found") {
        toast.error("User not found");
      } else {
        toast.error("Network error, kindly check your internet connection");
      }
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
      setIsLoading({ ...isLoading, googleAuth: false });
    });
  };

  React.useEffect(() => {
    const userObj = JSON.parse(localStorage.getItem("user") || "null");
    if (userObj && userObj !== "null") {
      setUser(userObj);
    }
  }, []);

  return (
    <AuthFrame>
      <h1 className="text-3xl font-semibold tracking-tight">Sign in</h1>
      <p className="mt-2 text-sm text-mist">Pick up the list where you left it.</p>
      <form className="mt-10 flex flex-col" onSubmit={handleLogin}>
        <input
          className="field"
          placeholder="Email"
          required
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          className="field mt-4"
          placeholder="Password"
          required
          type="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <Button
          className="mt-6 rounded-lg bg-accent text-sm font-semibold text-ink"
          disabled={isLoading.emailAuth}
        >
          {isLoading.emailAuth ? "Please wait" : "Sign in"}
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
        <div className="mt-8 flex flex-col gap-2 text-sm text-mist">
          <Link href="/forgotpassword" className="text-accent">
            Forgot password
          </Link>
          <p>
            New here?{" "}
            <Link href="/signup" className="text-accent">
              Create an account
            </Link>
          </p>
        </div>
      </form>
    </AuthFrame>
  );
};

export default Login;
