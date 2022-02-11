import React, { useState } from "react";
import "../../assets/pseudoCss/Form/Form Register/formRegister.css";
import { Form, Input, Row, Col, Checkbox, Button } from "antd";
import ReCAPTCHA from "react-google-recaptcha";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

export default function RegisterForm() {
  const [form] = Form.useForm();
  const [FormData, setFormData] = useState("");

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    setFormData(values);
  };

  const hadleSubmit = (e) => {
    e.preventDefault();
    console.log(FormData);
  };

  return (
    <div className="formREGISTER">
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input placeholder="E-Mail" />
        </Form.Item>

        <Form.Item
          name="inputPassword"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          label="Password"
          dependencies={["inputPassword"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("inputPassword") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password placeholder="Confirm Pasword" />
        </Form.Item>

        <Form.Item
          name="firstName"
          label="First Name"
          rules={[
            {
              required: true,
              message: "Please input your First Name!",
              whitespace: true,
            },
          ]}
        >
          <Input placeholder="First Name" />
        </Form.Item>

        <Form.Item
          name="lastName"
          label="Last Name"
          rules={[
            {
              required: true,
              message: "Please input your Last Name!",
              whitespace: true,
            },
          ]}
        >
          <Input placeholder="Last Name" />
        </Form.Item>

        <Form.Item name="Rol" defaultValue={1} >
          <Checkbox value={1}>Client</Checkbox>
          <Checkbox value={2}>Moderator</Checkbox>
        </Form.Item>

        <Form.Item
          label="Captcha"
          extra="We must make sure that your are a human."
        >
          <Row gutter={8}>
            <Col span={12}>
              <Form.Item name="captcha" noStyle>
                <div className="recaptcha">
                  <ReCAPTCHA sitekey="6LceUGQeAAAAACkNOhVZv0OjckU1BTVA8-WE7Xf0" />
                </div>
              </Form.Item>
            </Col>
          </Row>
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(
                      new Error("Should accept the Tearms and Conditions")
                    ),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            I have read the <p>Tearms and Conditions</p>
          </Checkbox>
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" onSubmit={hadleSubmit}>
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
