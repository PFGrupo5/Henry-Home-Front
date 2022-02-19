import React, { useState, useEffect } from 'react';
import { Modal, Cascader, message } from 'antd';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../assets/css/DashboardOwner/DashboardOwner.scss";
import { getFacilities, getLocations, getServices, getUserDetail } from "../FilesStore/Actions";
import ListHouses from "../components/ListHouses";
import axios from 'axios';
import { URL_BACK } from '../config';
import iconProvider from '../utils/IconProvider';

export default function Admin() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const { id, role } = user.result

  useEffect(() => {
    dispatch(getUserDetail(id, role));
    dispatch(getServices());
    dispatch(getFacilities());
    dispatch(getLocations());
  }, [dispatch, id, role]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [house, setHouse] = useState({
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

  const { services, facilities, locations } = useSelector((state) => state);


  const optionsServices = services.map((e) => {
    return { label: e.name[0].toUpperCase() + e.name.slice(1), value: e.name };
  });

  const optionsLocations = locations.map((e) => {
    return { label: e.name, value: e };
  });

  const optionsFacilities = facilities.map((e) => {
    return { label: e.name[0].toUpperCase() + e.name.slice(1), value: e.name };
  });

  const inputFormHanlder = (e) => {
    const { name, value } = e.target;
    setHouse((prev) => ({
      ...prev,
      [name]: value,
    }));
    // setFormErrors(ValidateForm({ ...inputForm, [name]: value }));
  };

  const serviceHandler = (e) => {
    setHouse((prev) => ({
      ...prev,
      services: e,
    }));
  }
  const locationHandler = (e) => {
    setHouse((prev) => ({
      ...prev,
      location: e,
    }));
  }
  const facilitiesHandler = (e) => {
    setHouse((prev) => ({
      ...prev,
      facilities: e,
    }));
  }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    const servicesFlat = house.services?.flat()
    const facilitiesFlat = house.facilities?.flat()
    const houseUpdate = {
      ...house,
      services: servicesFlat,
      facilities: facilitiesFlat
    }
    console.log(houseUpdate);
    axios.patch(`${URL_BACK}/houses`, houseUpdate, {
      headers: {
        authorization: user.token
      }
    })
      .then(({ data }) => {
        message.success(data.message)
        dispatch(getUserDetail(id, role));
      })
      .catch(error => message.error(error.response.data.message))
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const { userDetail } = useSelector((state) => state);

  if (!userDetail) return (<div>Cargando</div>)

  return (
    <div className="container-moderator">
      <div>
        <h2 className="titleAdmin">Mis Alojamientos</h2>
        <div className="btn-create-container">
          <Link to={"/create"}>
            <span>  Agregar casa {iconProvider("add")}</span>
          </Link>
        </div>
      </div>
      <>
        <div class="container-table100">
          <div class="wrap-table100">
            <div class="table">
              <div className="table-container">
                <div class="table">
                  <div class="row header">
                    <div class="cell">Imagen</div>
                    <div class="cell">Nombre</div>
                    <div class="cell">Descripción</div>
                    <div class="cell">Precio por noche</div>
                    <div class="cell">Status</div>
                    <div class="cell">Acción</div>
                  </div>
                </div>
                {userDetail.Housings?.map((e) =>
                (
                  <ListHouses
                    user={user}
                    houseInfo={e}
                    onClick={showModal}
                    setHouse={setHouse}
                  />
                ))}
                <div>
                  <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <div>
                      <div>
                        <input
                          type="text"
                          value={house.name}
                          name="name"
                          onChange={inputFormHanlder}
                          className="inputs"
                        />
                      </div>

                      <div>
                        <input
                          type="number"
                          key="price"
                          value={house.pricePerNight}
                          name="pricePerNight"
                          onChange={inputFormHanlder}
                          className="inputs"
                        />
                      </div>

                      <div>
                        <input
                          type="text"
                          key="people"
                          value={house.numberOfPeople}
                          name="numberOfPeople"
                          onChange={inputFormHanlder}
                          className="inputs"
                        />
                      </div>

                      <div>
                        <textarea
                          type="text"
                          key="description"
                          value={house.description}
                          name="description"
                          onChange={inputFormHanlder}
                          rows="4"
                          cols="50"
                          className="textareaEditPost"
                        />
                      </div>
                      <div>
                        <textarea
                          type="text"
                          value={house.houseRules}
                          name="houseRules"
                          onChange={inputFormHanlder}
                          rows="4"
                          cols="50"
                          className="textareaEditPost"
                        />
                      </div>

                      <div>
                        <Cascader
                          options={optionsServices}
                          multiple
                          maxTagCount="responsive"
                          placeholder="Services"
                          value={house.services}
                          onChange={serviceHandler}
                        />
                      </div>

                      <div>
                        <Cascader
                          options={optionsFacilities}
                          multiple
                          maxTagCount="responsive"
                          placeholder="Facilitites"
                          value={house.facilities}
                          onChange={facilitiesHandler}
                        />
                      </div>

                      <div>
                        <Cascader
                          options={optionsLocations}
                          maxTagCount="responsive"
                          placeholder="Location"
                          onChange={locationHandler}

                        />
                      </div>
                    </div>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>

  );
}