import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import PrivateHeader from "./PrivateHeader";
import PrivateSidebar from "./PrivateSidebar";

import { ROUTERS } from "../constants/routers";

const PrivateLayout = () => {
  const [isShowSidebar, setIsShowSidebar] = useState(false);

  const { userInfo } = useSelector((state) => state.userReducer);

  if (!userInfo || userInfo.role !== "admin") {
    return <Navigate to={ROUTERS.USER.HOME} />;
  }

  return (
    <div className="app">
      <PrivateHeader
        isShowSidebar={isShowSidebar}
        setIsShowSidebar={setIsShowSidebar}
      />
      <div className="main-container">
        <div
          className={
            isShowSidebar ? "main-content main-show-sidebar" : "main-content"
          }
        >
          <Outlet />
        </div>
        <PrivateSidebar
          isShowSidebar={isShowSidebar}
          setIsShowSidebar={setIsShowSidebar}
        />
      </div>
    </div>
  );
};

export default PrivateLayout;
