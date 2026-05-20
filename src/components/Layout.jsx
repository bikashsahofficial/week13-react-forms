import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useUserContext } from "../hooks/contextHooks.js";

const Layout = ({ children }) => {
  const { user } = useUserContext();

  return (
    <>
      <header className="site-header">
        <Link to="/" className="logo">Week 13 Forms</Link>
        <nav>
          <NavLink to="/">Home</NavLink>
          {!user && <NavLink to="/login">Login</NavLink>}
          {user && <NavLink to="/profile">Profile</NavLink>}
          {user && <NavLink to="/upload">Upload</NavLink>}
          {user && <NavLink to="/logout">Logout</NavLink>}
        </nav>
      </header>

      <main className="main-content">{children}</main>

      <footer className="footer">
        <p>React forms, Context API, and Upload assignment</p>
      </footer>
    </>
  );
};

export default Layout;
