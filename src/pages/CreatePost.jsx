import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Input, Button, Cascader, message } from "antd";
import "../assets/css/CreatePost/createPost.scss";
import { LeftOutlined } from "@ant-design/icons";
import {
  getFacilities,
  getServices,
  getLocations,
} from "../FilesStore/Actions/index";
import axios from "axios";
import { URL_BACK } from "../config";

export default function CreatePost() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFacilities());
    dispatch(getServices());
    dispatch(getLocations());
  }, [dispatch]);

  const services = useSelector((state) => state.services);
  const locations = useSelector((state) => state.locations);
  const facilities = useSelector((state) => state.facilities);

  const user = JSON.parse(localStorage.getItem("profile"));

  const [formData, setFormData] = useState({
    name: "",
    pricePerNight: null,
    numberOfPeople: null,
    description: "",
    houseRules: "",
    services: [],
    facilities: [],
    location: null,
    images: [],
  });

  const onFinish = () => {
    // console.log("Success:", formData);
    // dispatch(createHouse(formData, user.token))
    axios
    .post(`${URL_BACK}/houses`, formData, {
      headers: {
        Authorization: user.token,
      },
    })
    .then(()=> {
      message.success("Casa Creada Con Exito")
    })
    .catch((error)=> {
      message.error(error)
    })
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "images") {
      setFormData({ ...formData, images: [value] });
    } else {
      setFormData({ ...formData, [name]: value });
      console.log(formData);
    }
  };

  const locationChange = (e) => {
    setFormData({ ...formData, location: e[0] });
    console.log(formData);
  };

  const servicesChange = (e) => {
    let services = e.map((e) => e[0]);
    setFormData({ ...formData, services });
    console.log(formData);
  };

  const facilitiesChange = (e) => {
    let facilities = e.map((e) => e[0]);
    setFormData({ ...formData, facilities });
    console.log(formData);
  };

<<<<<<< HEAD
  const optionsServices = services.map((e) => {
    return { label: e.name[0].toUpperCase() + e.name.slice(1), value: e.name };
  });

  const optionsLocations = locations.map((e) => {
    return { label: e.name, value: e.id };
  });

  const optionsFacilities = facilities.map((e) => {
    return { label: e.name[0].toUpperCase() + e.name.slice(1), value: e.name };
  });
=======
  const optionsServices = services?.map((e) => {
    return { label: e.name[0].toUpperCase() + e.name.slice(1), value: e.name }
  })

  const optionsLocations = locations?.map((e) => {
    return { label: e.name, value: e.id }
  })

  const optionsFacilities = facilities?.map((e) => {
    return { label: e.name[0].toUpperCase() + e.name.slice(1), value: e.name }
  })
>>>>>>> 933d37e5fafd65c37b20b5e38ae40dc9355d8af1

  return (
    <div className="generalCont">
      <Link to="/home">
        <LeftOutlined className="back" />
      </Link>
      <div className="nav">
        {/* <img src={Logo} className="logo" alt="Logo"></img> */}
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
          <Input
            placeholder="Name"
            className="input"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item
          name="location"
          rules={[{ required: true, message: "Please pick a province" }]}
          className="input"
        >
          <Cascader
            options={optionsLocations}
            placeholder="Location"
            className="cascader"
            value={formData.location}
            onChange={locationChange}
          />
        </Form.Item>

        <Form.Item
          name="pricePerNight"
          rules={[{ required: true, message: "Please input the price" }]}
        >
          <Input
            placeholder="Price"
            className="input"
            name="pricePerNight"
            value={formData.pricePerNight}
            type="number"
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item
          name="numberOfPeople"
          rules={[
            {
              required: true,
              message: "Please select how many guest can visit",
            },
          ]}
        >
          <Input
            placeholder="Guest"
            className="input beds"
            name="numberOfPeople"
            value={formData.numberOfPeople}
            onChange={handleChange}
            type="number"
          />
        </Form.Item>

        <Form.Item
          name="description"
          rules={[
            {
              required: true,
              message: "Please add a description",
            },
          ]}
        >
          <Input
            placeholder="Description"
            className="input beds"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item
          name="houseRules"
          rules={[
            {
              required: true,
              message: "Please add a Rules",
            },
          ]}
        >
          <Input
            placeholder="House Rules"
            className="input beds"
            name="houseRules"
            value={formData.houseRules}
            onChange={handleChange}
          />
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
            value={formData.location}
            onChange={servicesChange}
          />
        </Form.Item>
        <Form.Item
          name="facilities"
          rules={[
            {
              required: true,
              message: "Please select which facilities are available",
            },
          ]}
          className="input"
        >
          <Cascader
            options={optionsFacilities}
            multiple
            maxTagCount="responsive"
            placeholder="Facilities"
            value={formData.facilities}
            onChange={facilitiesChange}
          />
        </Form.Item>

        <Form.Item name="images" className="uploadImg">
          <Input
            placeholder="URL image"
            className="input beds"
            name="images"
            value={formData.images}
            onChange={handleChange}
          />
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
