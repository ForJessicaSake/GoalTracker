import "../styles/globals.css";
import type { AppProps } from "next/app";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import React from "react";


function MyApp({ Component, pageProps }: AppProps) {

React.useEffect(()=>{
  AOS.init({ duration:2000});
  AOS.refresh()
}, [])

  return (
    <div className="font-mono">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
