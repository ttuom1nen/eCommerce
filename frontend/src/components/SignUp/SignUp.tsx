import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { signUpStart } from '../../redux/user/user.actions'
import { SignUpInfo } from "../../models";

import { SignUpContainer, SignUpTitle } from './SignUp.styles';

const emptyUserInfo: SignUpInfo = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const dispatch = useDispatch()
  const [signUpInfo, setSignInInfo] = useState(emptyUserInfo);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!signUpInfo) return;

    const { displayName, email, password, confirmPassword } = signUpInfo;

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    // Note: confirmPassword is not needed here. It's just convenient to reuse the signUpInfo interface
    dispatch(signUpStart({displayName, email, password, confirmPassword}))
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setSignInInfo({ ...signUpInfo, ...{ [name]: value } });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have an account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={signUpInfo.displayName}
          handleChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={signUpInfo.email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={signUpInfo.password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={signUpInfo.confirmPassword}
          handleChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </SignUpContainer>
  );
};

export default SignUp;
