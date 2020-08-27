import React, { useState } from "react";

import "./Signin.styles.scss";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setEmail("");
    setPassword("");
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event?.target.value)}
          required
        />
        <label>Email</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event?.target.value)}
          required
        />
        <label>Password</label>

        <input type="submit" value="Submit Form" />
      </form>
    </div>
  );
};

export default Signin;
