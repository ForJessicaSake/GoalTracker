import "../styles/globals.css";
import type { AppProps } from "next/app";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {

  React.useEffect(() => {
    AOS.init({ duration: 1900 });
    AOS.refresh();
  }, []);

  return (
    <div className="font-mono overflow-x-hidden">
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default MyApp;
