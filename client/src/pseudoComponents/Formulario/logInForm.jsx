import React from 'react';
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

function LogInForm({ landing }) {
    if (!landing) {
        return (
            <div>
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

                        <p className="login-form-forgot" >
                            Forgot password
                        </p>
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                        >
                            Log in
                        </Button>
                        Or <p>register now!</p>
                    </Form.Item>
                </Form>
            </div>
        );
    }
    else {
        return (
            <div className="container__form container--signup">
                <form action="#" class="form" id="form1">
                    <h2 className="form__title">Sign Up</h2>
                    <input type="text" placeholder="User" className="input" />
                    <input type="email" placeholder="Email" className="input" />
                    <input type="password" placeholder="Password" className="input" />
                    <button className="formBtn">Sign Up</button>
                </form>
            </div>
        )
    }
}

export default LogInForm;
