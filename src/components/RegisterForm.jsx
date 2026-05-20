import React, { useState } from "react";
import useForm from "../hooks/formHooks.js";
import { useUser } from "../hooks/apiHooks.js";

const RegisterForm = () => {
  const [message, setMessage] = useState("");
  const { postUser } = useUser();

  const initValues = {
    username: "",
    password: "",
    email: "",
  };

  const doRegister = async () => {
    try {
      console.log("register inputs", inputs);
      const registerResult = await postUser(inputs);
      console.log("register result", registerResult);
      setMessage("Registration successful. You can now log in.");
    } catch (error) {
      setMessage(error.message);
    }
  };

  const { inputs, handleInputChange, handleSubmit } = useForm(doRegister, initValues);

  return (
    <section className="card">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="registeruser">Username</label>
        <input
          name="username"
          type="text"
          id="registeruser"
          value={inputs.username}
          onChange={handleInputChange}
          autoComplete="username"
          required
        />

        <label htmlFor="registerpassword">Password</label>
        <input
          name="password"
          type="password"
          id="registerpassword"
          value={inputs.password}
          onChange={handleInputChange}
          autoComplete="new-password"
          required
        />

        <label htmlFor="registeremail">Email</label>
        <input
          name="email"
          type="email"
          id="registeremail"
          value={inputs.email}
          onChange={handleInputChange}
          autoComplete="email"
          required
        />

        <button type="submit">Register</button>
      </form>

      {message && <p className="message">{message}</p>}
    </section>
  );
};

export default RegisterForm;
