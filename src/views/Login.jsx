import React, { useState } from "react";
import LoginForm from "../components/LoginForm.jsx";
import RegisterForm from "../components/RegisterForm.jsx";

const Login = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <section>
      <div className="toggle-box">
        <button onClick={() => setShowLogin(true)}>Show Login</button>
        <button onClick={() => setShowLogin(false)} className="secondary">
          Show Register
        </button>
      </div>

      {showLogin ? <LoginForm /> : <RegisterForm />}
    </section>
  );
};

export default Login;
