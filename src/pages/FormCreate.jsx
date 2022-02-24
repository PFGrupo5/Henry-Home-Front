import { Cascader, message } from "antd";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ValidateFormCreate } from "../utils/ValidateFormCreate";
import FileBase from "react-file-base64";
import {
  getFacilities,
  getLocations,
  getServices,
} from "../FilesStore/Actions";
import { URL_BACK } from "../config";

export default function FromCreate() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const { facilities, locations, services } = useSelector((state) => state);
  const [FormCreateError, setFormCreateError] = useState({});

  useEffect(() => {
    dispatch(getServices());
    dispatch(getFacilities());
    dispatch(getLocations());
  }, [dispatch]);

  const [formData, setFormData] = useState({
    name: "",
    pricePerNight: null,
    numberOfPeople: null,
    numberOfBeds: null,
    description: "",
    houseRules: "",
    services: [],
    facilities: [],
    location: null,
    images: [],
  });
  
  const handlerChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setFormCreateError(ValidateFormCreate({ ...formData, [name]: value }));
  };

  const serviceHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      services: e,
    }));
  };
  const locationHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      location: e,
    }));
  };
  const facilitiesHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      facilities: e,
    }));
  };

  const HandleCreate = (e) => {
    e.preventDefault();
    if (!Object.keys(ValidateFormCreate(formData)).length) {
      axios
        .post(`${URL_BACK}/houses`, formData, {
          headers: {
            Authorization: user.token,
          },
        })
        .then(() => {
          message.success("Casa Creada Con Exito");
        })
        .catch((error) => {
          message.error(error);
        });
    } else {
      message.error("Error con los datos");
    }
  };


  const optionsServices = services.map((e) => {
    return { label: e.name[0].toUpperCase() + e.name.slice(1), value: e.name };
  });

  const optionsLocations = locations.map((e) => {
    return { label: e.name, value: e };
  });

  const optionsFacilities = facilities.map((e) => {
    return { label: e.name[0].toUpperCase() + e.name.slice(1), value: e.name };
  });

  return (
    <div>
      <form onSubmit={HandleCreate}>
        <div>
          <input
            type="text"
            key="name"
            value={formData.name}
            name="name"
            onChange={handlerChange}
          />
          <p className="error-message">
            {FormCreateError.name ? FormCreateError.name : "ㅤㅤ"}
          </p>
        </div>
        <div>
          <input
            type="text"
            key="price"
            value={formData.pricePerNight}
            name="pricePerNight"
            onChange={handlerChange}
          />
          <p className="error-message">
            {FormCreateError.pricePerNight
              ? FormCreateError.pricePerNight
              : "ㅤㅤ"}
          </p>
        </div>
        <div>
          <input
            type="text"
            key="camas"
            value={formData.numberOfBeds}
            name="numberOfBeds"
            onChange={handlerChange}
          />
          <p className="error-message">
            {FormCreateError.numberOfBeds
              ? FormCreateError.numberOfBeds
              : "ㅤㅤ"}
          </p>
        </div>
        <div>
          <input
            type="text"
            key="people"
            value={formData.numberOfPeople}
            name="numberOfPeople"
            onChange={handlerChange}
          />
          <p className="error-message">
            {FormCreateError.numberOfPeople
              ? FormCreateError.numberOfPeople
              : "ㅤㅤ"}
          </p>
        </div>
        <div>
          <textarea
            id="description"
            type="text"
            key="description"
            value={formData.description}
            name="description"
            onChange={handlerChange}
            rows="4"
            cols="50"
          />
          <p className="error-message">
            {FormCreateError.description ? FormCreateError.description : "ㅤㅤ"}
          </p>
        </div>
        <div>
          <textarea
            type="text"
            key="rules"
            value={formData.houseRules}
            name="houseRules"
            onChange={handlerChange}
            rows="4"
            cols="50"
          />
          <p className="error-message">
            {FormCreateError.houseRules ? FormCreateError.houseRules : "ㅤㅤ"}
          </p>
        </div>
        <div>
          <Cascader
            options={optionsServices}
            multiple
            maxTagCount="responsive"
            key="Services"
            placeholder="Services"
            value={formData.services}
            onChange={serviceHandler}
          />
          <p className="error-message">
            {FormCreateError.services ? FormCreateError.services : "ㅤㅤ"}
          </p>
        </div>
        <div>
          <Cascader
            options={optionsFacilities}
            key="Facilities"
            multiple
            maxTagCount="responsive"
            placeholder="Facilitites"
            value={formData.facilities}
            onChange={facilitiesHandler}
          />
          <p className="error-message">
            {FormCreateError.facilities ? FormCreateError.facilities : "ㅤㅤ"}
          </p>
        </div>
        <div>
          <Cascader
            options={optionsLocations}
            maxTagCount="responsive"
            placeholder="Location"
            key="Location"
            onChange={locationHandler}
          />
          {FormCreateError.location ? FormCreateError.location : "ㅤㅤ"}
        </div>
        <div>
          <FileBase
            multiple={false}
            onDone={({ base64 }) =>
              setFormData({ ...formData, images: base64 })
            }
          />
          <p className="error-message">
            {FormCreateError.images ? FormCreateError.images : "ㅤㅤ"}
          </p>
        </div>
        <div>
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
}
