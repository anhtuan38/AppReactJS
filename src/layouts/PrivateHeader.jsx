import React from "react";
import { Button, Menu, Dropdown } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ROUTERS } from "../constants/routers";

import { logoutAction } from "../redux/actions";

function PrivateHeader({ isShowSidebar, setIsShowSidebar }) {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userReducer);

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    dispatch(logoutAction());
  };

  return (
    <div className="header">
      <div>
        <Button
          type="text"
          icon={<MenuOutlined style={{ color: "white" }} />}
          onClick={() => setIsShowSidebar(!isShowSidebar)}
        ></Button>
        Logo
      </div>
      {userInfo.id ? (
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item>Thông tin cá nhân</Menu.Item>
              <Menu.Item onClick={() => handleLogout()}>Đăng xuất</Menu.Item>
            </Menu>
          }
          trigger={["click"]}
        >
          <div>Hello {userInfo.username}</div>
        </Dropdown>
      ) : (
        <Button onClick={() => navigate(ROUTERS.LOGIN)}>Đăng nhập</Button>
      )}
    </div>
  );
}

export default PrivateHeader;
