import React, { useState } from "react";

import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { SignUpInfo } from "../../models";

const emptyUserInfo: SignUpInfo = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [signUpInfo, setSignInInfo] = useState(emptyUserInfo);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!signUpInfo) return;

    const { displayName, email, password, confirmPassword } = signUpInfo;

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });
      setSignInInfo({ ...emptyUserInfo });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setSignInInfo({ ...signUpInfo, ...{ [name]: value } });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
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
    </div>
  );
};

export default SignUp;
