import React from "react";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import "./SigninPage.styles.scss";

const SigninPage = () => {
  return (
    <div className="signin">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SigninPage;
