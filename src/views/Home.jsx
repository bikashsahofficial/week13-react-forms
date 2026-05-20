import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../hooks/contextHooks.js";

const Home = () => {
  const { user } = useUserContext();

  return (
    <section className="hero">
      <h1>Week 13 React Forms</h1>
      <p>This project includes the main forms assignment and the optional context and upload exercises.</p>

      {user ? (
        <p className="success">Logged in as {user.username || user.email}</p>
      ) : (
        <p>Please log in or register to test protected routes and upload.</p>
      )}

      <div className="button-row">
        <Link className="button" to="/login">Open Login/Register</Link>
        <Link className="button secondary" to="/upload">Open Upload</Link>
      </div>
    </section>
  );
};

export default Home;
