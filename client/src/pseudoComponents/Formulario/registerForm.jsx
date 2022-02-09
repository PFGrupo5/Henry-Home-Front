import React from "react";
import "antd/dist/antd.css";
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

export default function RegisterForm({ landing }) {

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
<<<<<<< HEAD
  };
  return (
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
=======
  }
  if (landing) {
    return (

      <div className="container__form container--signin">
        <form action="#" className="form" id="form2">
          <h2 className="form__title">Sign In</h2>
          <Row>
            <Col span={11}>
              <input type="firstName" placeholder="First Name" className="input" />
            </Col>
            <Col span={11} offset={2}>
              <input type="lastName" placeholder="Last Name" className="input" />
            </Col>
          </Row>
          <input type="email" placeholder="Email" className="input" />
          <input type="password" placeholder="Password" className="input" />
          <input type="password" placeholder="Repeat Password" className="input" />
          <p className="link">Forgot your password?</p>
          <button className="formBtn">Sign In</button>
        </form>
      </div>
    );
  } else {
    return (
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ["zhejiang", "hangzhou", "xihu"],
          prefix: "86",
        }}
        scrollToFirstError
>>>>>>> 9eeb2417b96e58b6aba2af70ca31dadcc6927787
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
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
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
                  : Promise.reject(new Error("Should accept agreement")),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            I have read the <p>agreement</p>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
