import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { ROUTERS } from "../constants/routers";

function PrivateSidebar({ isShowSidebar, setIsShowSidebar }) {
  const location = useLocation();
  const navigate = useNavigate();

  const routers = [
    {
      name: "Product List Management",
      path: ROUTERS.ADMIN.PRODUCTS,
    },
    {
      name: "To Do List",
      path: ROUTERS.ADMIN.TODO_LIST,
    },
  ];

  const renderSidebarItems = () => {
    return routers.map((item, index) => {
      return (
        <div
          key={index}
          className={
            location.pathname === item.path
              ? "sidebar-item sidebar-item-active"
              : "sidebar-item"
          }
          onClick={() => {
            setIsShowSidebar(false);
            navigate(item.path);
          }}
        >
          {item.name}
        </div>
      );
    });
  };

  return (
    <div
      className={
        isShowSidebar
          ? "private-sidebar-container private-sidebar-show"
          : "private-sidebar-container"
      }
    >
      {renderSidebarItems()}
    </div>
  );
}

export default PrivateSidebar;
