import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./SignIn.styles.scss";

const emptySignInInfo = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [signInInfo, setSignInInfo] = useState(emptySignInInfo);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const { email, password } = signInInfo;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setSignInInfo(emptySignInInfo);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setSignInInfo({ ...signInInfo, ...{ [name]: value } });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
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
        <div className="buttons">
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton onClick={signInWithGoogle} type="button" isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
