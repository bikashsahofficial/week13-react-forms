import React, { useEffect } from "react";
import { useUserContext } from "../hooks/contextHooks.js";

const Logout = () => {
  const { handleLogout } = useUserContext();

  useEffect(() => {
    handleLogout();
  }, [handleLogout]);

  return (
    <section className="card">
      <h1>Logout</h1>
      <p>You have been logged out.</p>
    </section>
  );
};

export default Logout;
