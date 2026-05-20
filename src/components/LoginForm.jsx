import React, { useState } from "react";
import useForm from "../hooks/formHooks.js";
import { useUserContext } from "../hooks/contextHooks.js";

const LoginForm = () => {
  const [message, setMessage] = useState("");
  const { handleLogin } = useUserContext();

  const initValues = {
    username: "",
    password: "",
  };

  const doLogin = async () => {
    try {
      console.log("login inputs", inputs);
      await handleLogin(inputs);
      setMessage("Login successful.");
    } catch (error) {
      setMessage(error.message);
    }
  };

  const { inputs, handleInputChange, handleSubmit } = useForm(doLogin, initValues);

  return (
    <section className="card">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="loginuser">Username</label>
        <input
          name="username"
          type="text"
          id="loginuser"
          value={inputs.username}
          onChange={handleInputChange}
          autoComplete="username"
          required
        />

        <label htmlFor="loginpassword">Password</label>
        <input
          name="password"
          type="password"
          id="loginpassword"
          value={inputs.password}
          onChange={handleInputChange}
          autoComplete="current-password"
          required
        />

        <button type="submit">Login</button>
      </form>

      {message && <p className="message">{message}</p>}
    </section>
  );
};

export default LoginForm;
