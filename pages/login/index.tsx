import React from "react";
import Login from "../../components/Auth/login/login";
import { UseAuth } from "../../components/Utils/Firebase/Firebase";
import { setCookie, getCookie } from "cookies-next";

const index = () => {

  return <Login />;
};

export default index;
