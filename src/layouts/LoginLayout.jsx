import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { ROUTERS } from "../constants/routers";

const LoginLayout = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  if (userInfo) {
    return <Navigate to={ROUTERS.USER.HOME} />;
  }

  return (
    <div className="app">
      <Outlet />
    </div>
  );
};

export default LoginLayout;
