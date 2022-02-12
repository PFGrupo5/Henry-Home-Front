import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { GoogleLogin } from "react-google-login"
import { useDispatch } from "react-redux";
import { googleLogIn } from "../../../FilesStore/Actions/index"
import { useHistory } from "react-router-dom"
import "../../../assets/pseudoCss/Form/Form Login/FormLogin.css";


function LogInForm() {

  const dispatch = useDispatch();
  const history = useHistory();

  const googleSuccess = async (res) => {
    console.log("hi", res)

    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch(googleLogIn(result, token));
      history.push("/home")
      window.location.replace("")
    } catch (error) {
      console.log(error)
    }
  }
  const googleFailure = (error) => {
    console.log("googleError", error)
  }



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
          <p className="or">Or</p>
          <Button
            type="primary"
            htmlType="submit"
            className="Btn-login"
          >
            Log in
          </Button>
          <p className="or">Or</p>

        </Form.Item>
        <Form.Item>
          <GoogleLogin
            clientId="109526159096-dk6c06q28lkm7uq041ievngdekh1p8k2.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="formBtn"
              >
                Google Sign In
              </button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />


        </Form.Item>
      </Form>
    </div>
  );
}

export default LogInForm;
