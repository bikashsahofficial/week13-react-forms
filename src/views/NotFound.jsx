import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="card">
      <h1>Page not found</h1>
      <Link className="button" to="/">Go home</Link>
    </section>
  );
};

export default NotFound;
