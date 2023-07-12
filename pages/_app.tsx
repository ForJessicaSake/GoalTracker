import "../styles/globals.css";
import type { AppProps } from "next/app";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UseAuth } from "../components/Utils/Firebase/Firebase";
import { setCookie } from "cookies-next";

function MyApp({ Component, pageProps }: AppProps) {
  const currentUser = UseAuth();
  setCookie("useremail", currentUser?.email);

  React.useEffect(() => {
    AOS.init({ duration: 1900 });
    AOS.refresh();
  }, []);

  return (
    <div className="font-mono overflow-x-hidden">
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
        theme="dark"
      />
    </div>
  );
}

export default MyApp;
