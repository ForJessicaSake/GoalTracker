import React from "react";
import Button from "../../Micro/Button/Button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { logIn } from "../../Utils/Firebase/Firebase";
import { toast } from "react-toastify";
import { UseAuth } from "../../Utils/Firebase/Firebase";

const Login = () => {
  const currentUser = UseAuth();
  const router = useRouter();
  //signin user object
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  //signin function
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await logIn(user.email, user.password);
      toast.success(`Don't be scared to set those goals`);
      localStorage.setItem("user", JSON.stringify(user));
      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch (error: any) {
      console.log(error.code);
      if (error.code === "auth/email-already-in-use") {
        toast.error("Email already in use, kindly log in");
      } else if (error.code === "auth/user-not-found") {
        toast.error("User not found");
      } else {
        toast.error("Network error, kindly check your internet connection");
      }
    }
  };

  React.useEffect(() => {
    const userObj = JSON.parse(localStorage.getItem("user") || "null");
    if (userObj && userObj !== "null") {
      setUser(userObj);
    }
  }, []);


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
        <form
          className=" flex flex-col h-full justify-center"
          data-aos="zoom-in"
          onSubmit={handleLogin}
        >
          <label className="text-2xl py-5 font-semibold">Sign In</label>
          <input
            className="border lg:max-w-sm  p-4 rounded-lg"
            placeholder="Enter your email address"
            required
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            className="border lg:max-w-sm p-4 my-6 rounded-lg"
            placeholder="password"
            required
            type="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <div className="flex lg:flex-row flex-col justify-between  items-center lg:max-w-sm">
            <Button className="bg-card text-white w-40 rounded-lg">
              LOGIN
            </Button>
            <Link href="/forgotpassword" className="lg:py-0 pt-3">
              Forgot your password?
            </Link>
          </div>
          <Link
            href="/signup"
            className="w-full flex justify-center lg:max-w-sm bg-black my-10 rounded-lg py-4 text-white"
          >
            CREATE NEW ACCOUNT
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