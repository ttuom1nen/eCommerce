import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { useDispatch } from "react-redux";
import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from "./SignIn.styles";

const emptySignInInfo = {
  email: "",
  password: "",
};

const SignIn = () => {
  const dispatch = useDispatch();

  const [signInInfo, setSignInInfo] = useState(emptySignInInfo);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    dispatch(emailSignInStart(signInInfo))
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setSignInInfo({ ...signInInfo, ...{ [name]: value } });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={signInInfo.email}
          label="Email"
          handleChange={handleChange}
          required
        />
        <FormInput
          name="password"
          type="password"
          value={signInInfo.password}
          label="Password"
          handleChange={handleChange}
          required
        />
        <ButtonsBarContainer>
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton type="button" onClick={() => dispatch(googleSignInStart())} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
