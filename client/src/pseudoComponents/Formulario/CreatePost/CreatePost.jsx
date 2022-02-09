import React from "react";
import { Link } from "react-router-dom";
import { provinces } from "../../../components/Aside/Place";
import { Form, Input, Button, Cascader, InputNumber } from "antd";
import "../../../assets/css/Create post/createPost.css";
import Logo from "../../../assets/img/HenryHome.png";
import { LeftOutlined } from "@ant-design/icons";
import InputImage from "./inputImage";

export default function CreatePost() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const options = provinces.map((e) => {
    return { input: e, label: e };
  });

  const optionsServices = [
    {
      label: "Wi fi",
      value: "wifi",
    },
    {
      label: "Gas",
      value: "gas",
    },
    {
      label: "TV",
      value: "tv",
    },
  ];

  return (
    <div className="generalCont">
      <Link to="/home">
        <LeftOutlined className="back" />
      </Link>
      <div className="nav">
        <img src={Logo} className="logo"></img>
      </div>

      <h2 className="title">Create Post</h2>
      <hr />

      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperColor={{
          span: 16,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="form"
      >
        <Form.Item
          name="name"
          rules={[
            { required: true, message: "Please input the name of the post" },
          ]}
        >
          <Input placeholder="Name" className="input" />
        </Form.Item>

        <Form.Item
          name="location"
          rules={[{ required: true, message: "Please pick a province" }]}
          className="input"
        >
          <Cascader
            options={options}
            placeholder="Location"
            className="cascader"
          />
        </Form.Item>

        <Form.Item
          name="price"
          rules={[{ required: true, message: "Please input the price" }]}
        >
          <Input placeholder="Price" className="input" />
        </Form.Item>

        <Form.Item
          name="single"
          rules={[
            {
              required: true,
              message: "Please select how many single beds are available",
            },
          ]}
        >
          <InputNumber placeholder="Single beds" className="input beds" />
        </Form.Item>

        <Form.Item
          name="double"
          rules={[
            {
              required: true,
              message: "Please select how many double beds are available",
            },
          ]}
        >
          <InputNumber placeholder="Double beds" className="input beds" />
        </Form.Item>

        <Form.Item
          name="services"
          rules={[
            {
              required: true,
              message: "Please select which services are available",
            },
          ]}
          className="input"
        >
          <Cascader
            options={optionsServices}
            multiple
            maxTagCount="responsive"
            placeholder="Services"
          />
        </Form.Item>

        <Form.Item name="img" className="uploadImg">
          <InputImage />
        </Form.Item>

        <Form.Item className="btnSubmit">
          <Button type="pimary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
