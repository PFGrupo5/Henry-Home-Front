import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "../../assets/pseudoCss/Form/Form Login/FormLogin.css";

function LogInForm() {
  return (
    <div className="formLOGIN">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <p className="login-form-forgot">Forgot password</p>
        </Form.Item>

        <Form.Item className="btns-Log-Reg">
          <Button
            type="primary"
            htmlType="submit"
            className="Btn-login"
          >
            Log in
          </Button>
          <p className="or">Or</p>
          <Button
            type="primary"
            htmlType="submit"
            className="Btn-register"
          >
            Register Now
          </Button>

        </Form.Item>
      </Form>
    </div>
  );
}

export default LogInForm;
