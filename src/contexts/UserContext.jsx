import React, { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthentication, useUser } from "../hooks/apiHooks.js";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authMessage, setAuthMessage] = useState("");
  const { postLogin } = useAuthentication();
  const { getUserByToken } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (credentials) => {
    try {
      const loginResult = await postLogin(credentials);
      console.log("login result", loginResult);

      localStorage.setItem("token", loginResult.token);
      setUser(loginResult.user);
      setAuthMessage("Login successful.");
      navigate("/");
    } catch (error) {
      setAuthMessage(error.message);
      throw error;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setAuthMessage("Logged out successfully.");
    navigate("/");
  };

  const handleAutoLogin = async () => {
    try {
      const token = localStorage.getItem("token");

      if (token) {
        const userResult = await getUserByToken(token);
        setUser(userResult.user || userResult);
        navigate(location.pathname);
      }
    } catch (error) {
      localStorage.removeItem("token");
      setUser(null);
      console.log(error.message);
    }
  };

  useEffect(() => {
    handleAutoLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UserContext.Provider
      value={{ user, setUser, authMessage, handleLogin, handleLogout, handleAutoLogin }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
