import React, { useState, useEffect } from 'react';
import { Modal, Button, Cascader } from 'antd';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HomeOutlined, UserOutlined, SearchOutlined } from "@ant-design/icons";
import "../assets/css/DashboardOwner/DashboardOwner.scss";
import { getFacilities, getLocations, getServices, getUserDetail } from "../FilesStore/Actions";
import Cards from "../components/Cards";
import ListHouses from "../components/ListHouses";
import { ValidateForm } from '../utils/ValidateForm';

export default function Admin() {
  const dispatch = useDispatch();
  const { id, role } = JSON.parse(localStorage.getItem("profile")).result;

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
    return { label: e.name, value: e.name };
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

  const serviceHandler = (e)=>{
    setHouse((prev) => ({
      ...prev,
      services: e,
    }));
  }
 
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    console.log(house);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const { userDetail } = useSelector((state) => state);

  if (!userDetail) return (<div>Cargando</div>)
  console.log(house)
  return (
    <div className="container-moderator">
      <div>
        <h2 className="titleAdmin">Mis Alojamientos</h2>
        <div className="btonCreate">
          <Link to={"/create"}>
            <button>Public your House</button>
          </Link>
        </div>
      </div>
      <div className="housesAdmin">
        <table>

          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio por noche</th>
            <th>Status</th>
          </tr>
          {userDetail.Housings?.map((e) =>
          (
            <ListHouses
              houseInfo={e}
              onClick={showModal}
              setHouse={setHouse}
            />
          ))}
        </table>
        <div>
          <Modal  visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
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
                  onChange={serviceHandler}
                  />
              </div>

              <div>
                <Cascader
                  options={optionsLocations}
                  maxTagCount="responsive"
                  placeholder="Location"
                  onChange={serviceHandler}
          
                />
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}