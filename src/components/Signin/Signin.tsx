import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import "./Signin.styles.scss";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setEmail("");
    setPassword("");
  };

  const handleEmailChange = (event: React.FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const handlePasswordChange = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          label="Email"
          handleChange={handleEmailChange}
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          label="Password"
          handleChange={handlePasswordChange}
          required
        />

        <input type="submit" value="Submit Form" />
      </form>
    </div>
  );
};

export default Signin;
