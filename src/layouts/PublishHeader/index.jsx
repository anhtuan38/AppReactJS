import React, { useContext } from "react";
import { Button, Menu, Dropdown, Space, Select } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { ROUTERS } from "../../constants/routers";
import { ThemeContext } from "../../App";

import * as S from "./styles";

import { logoutAction } from "../../redux/actions";

function PublishHeader({ setIsShowSidebar }) {
  const navigate = useNavigate();

  const { theme, setTheme } = useContext(ThemeContext);

  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userReducer);

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    dispatch(logoutAction());
  };

  return (
    <S.Header>
      <div>
        <Button
          type="text"
          icon={<MenuOutlined style={{ color: "white" }} />}
          onClick={() => setIsShowSidebar(true)}
        ></Button>
        Logo
      </div>
      {userInfo.id ? (
        <Space>
          <Select
            defaultValue="light"
            onChange={(value) => setTheme(value)}
            value={theme}
            style={{ width: 100 }}
          >
            <Select.Option value="light">Sáng</Select.Option>
            <Select.Option value="dark">Tối</Select.Option>
          </Select>
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
        </Space>
      ) : (
        <Button onClick={() => navigate(ROUTERS.LOGIN)}>Đăng nhập</Button>
      )}
    </S.Header>
  );
}

export default PublishHeader;
