import React from "react";
import { useUserContext } from "../hooks/contextHooks.js";

const Profile = () => {
  const { user } = useUserContext();

  return (
    <section className="card">
      <h1>Profile</h1>
      {user ? (
        <>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>User ID:</strong> {user.user_id || user.id}</p>
        </>
      ) : (
        <p>No user data available.</p>
      )}
    </section>
  );
};

export default Profile;
