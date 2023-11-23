import React from "react";
import SignIn from "../components/SignIn";
import SignUp from "./../components/SignUp";

const Auth = () => {
  return (
    <div className="authent">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Auth;
