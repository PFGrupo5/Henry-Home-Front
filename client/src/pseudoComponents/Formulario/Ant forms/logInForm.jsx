import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { GoogleLogin } from "react-google-login"
import { useDispatch } from "react-redux";
import { googleLogIn } from "../../../FilesStore/Actions/index"
import { useHistory } from "react-router-dom"
import "../../../assets/pseudoCss/Form/Form Login/FormLogin.css";
import { SignIn } from "../../../FilesStore/Actions/index"


function LogInForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [clientCheck, setClientCheck] = useState(true)
  const [ownerCheck, setOwnerCheck] = useState(false)
  const [formData, setFormData] = useState({
    role: "Client",
    email: "",
    inputPassword: "",
  })


  const googleSuccess = async (res) => {
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

  const onFinish = () => {
    dispatch(SignIn(formData, history))
  }

  const onFinishFailed = (error) => {
    console.log(error)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const switchChange = () => {
    setClientCheck(prev => !prev)
    setOwnerCheck(prev => !prev)

    ownerCheck ? formData.role = "Client" : formData.role = "Moderator"

    console.log(formData)
  }

  return (
    <div className="formLOGIN">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >

        <Form.Item
          rules={[{ required: true, message: "Please input your Email!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            name="inputPassword"
            type="password"
            placeholder="Password"
            value={formData.inputPassword}
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item>
          <Checkbox checked={clientCheck} onChange={switchChange}>Client</Checkbox>
          <Checkbox checked={ownerCheck} onChange={switchChange}>Owner</Checkbox>
        </Form.Item>

        <Form.Item>
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
