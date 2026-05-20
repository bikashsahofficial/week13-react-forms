import React from "react";
import { Route, Routes } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext.jsx";
import Layout from "./components/Layout.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Home from "./views/Home.jsx";
import Login from "./views/Login.jsx";
import Logout from "./views/Logout.jsx";
import Profile from "./views/Profile.jsx";
import Upload from "./views/Upload.jsx";
import NotFound from "./views/NotFound.jsx";

const App = () => {
  return (
    <UserProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/upload"
            element={
              <ProtectedRoute>
                <Upload />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </UserProvider>
  );
};

export default App;
