import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import {
  Form,
  Input,
  Button,
  Card,
  DatePicker,
  Tabs,
  Select,
  notification,
} from "antd";
import { useNavigate } from "react-router-dom";

import { ROUTERS } from "../../constants/routers";
import { registerAction, loginAction } from "../../redux/actions";

const LoginAndRegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userList } = useSelector((state) => state.userReducer);

  const [loginForm] = Form.useForm();
  const [registerForm] = Form.useForm();

  const handleLogin = (values) => {
    const user = userList.find(
      (item) => item.email === values.email && item.password === values.password
    );
    if (user) {
      notification.success({
        message: `Đăng nhập thành công!, Hello ${user.username}`,
      });
      dispatch(loginAction(user));
      localStorage.setItem("userInfo", JSON.stringify(user));
      if (user.role === "admin") {
        navigate(ROUTERS.ADMIN.TODO_LIST);
      } else {
        navigate(ROUTERS.USER.HOME);
      }
    } else {
      notification.error({
        message: "Đăng nhập thất bại!",
      });
    }
  };

  const handleRegister = (values) => {
    dispatch(registerAction({ ...values, id: uuidv4() }));
    registerForm.resetFields();
    notification.success({ message: "Đăng ký thành công!" });
  };

  return (
    <div>
      <h2>Đăng ký/ Đăng nhập</h2>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Đăng nhập" key="1">
          <Card style={{ width: 300, margin: "0 auto" }}>
            <Form
              form={loginForm}
              name="loginForm"
              layout="vertical"
              initialValues={{
                email: "",
                password: "",
              }}
              onFinish={(values) => handleLogin(values)}
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập email!",
                  },
                  {
                    type: "email",
                    message: "Email không hợp lệ!",
                  },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>

              <Form.Item
                label="Mật khẩu"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập mật khẩu!",
                  },
                  {
                    min: 6,
                    max: 16,
                    message: "Mật khẩu phải có từ 6 đến 16 ký tự!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form>
          </Card>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Đăng ký" key="2">
          <Card style={{ width: 300, margin: "0 auto" }}>
            <Form
              form={registerForm}
              name="registerForm"
              layout="vertical"
              initialValues={{
                username: "",
                email: "",
                gender: "male",
                birthday: undefined,
                password: "",
                confirmPassword: "",
              }}
              onFinish={(values) => handleRegister(values)}
            >
              <Form.Item
                label="Tên đăng nhập"
                name="username"
                validateFirst
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập tên đăng nhập!",
                  },
                  {
                    min: 6,
                    max: 16,
                    message: "Tên đăng nhập phải có từ 6 đến 16 ký tự!",
                  },
                ]}
              >
                <Input placeholder="Tên đăng nhập" />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập email!",
                  },
                  {
                    type: "email",
                    message: "Email không hợp lệ!",
                  },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>

              <Form.Item label="Giới tính" name="gender">
                <Select>
                  <Select.Option value="male">Male</Select.Option>
                  <Select.Option value="female">Female</Select.Option>
                  <Select.Option value="other">Other</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item label="Ngày sinh" name="birthday">
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>

              <Form.Item
                label="Mật khẩu"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập mật khẩu!",
                  },
                  {
                    min: 6,
                    max: 16,
                    message: "Mật khẩu phải có từ 6 đến 16 ký tự!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                label="Xác nhận mật khẩu"
                name="confirmPassword"
                dependencies={["password"]}
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập lại mật khẩu!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "Mật khẩu không khớp! Vui lòng nhập lại mật khẩu!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form>
          </Card>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default LoginAndRegisterForm;
