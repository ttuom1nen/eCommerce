import React from "react";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import "./SigninPage.styles.scss";

const SigninPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <div className="page-section">
        <SignIn />
      </div>
      <div className="page-section">
        <SignUp />
      </div>
    </div>
  );
};

export default SigninPage;
