import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getDetail, patchHouse } from "../FilesStore/Actions";
import { Cascader, Modal } from "antd";
import {
  getFacilities,
  getServices,
  getLocations,
} from "../FilesStore/Actions/index";
import "../assets/css/EditPost/EditPost.css";



export default function EditPost(props) {
  
  let dispatch = useDispatch();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     document.location.reload()
  //   }, 0);
  //   clearTimeout(timer);
  // }, []);

  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
    dispatch(getServices());
    dispatch(getFacilities());
    dispatch(getLocations());
  }, [dispatch, props]);

  // console.log(id);

  const services = useSelector((state) => state.services);
  const facilities = useSelector((state) => state.facilities);
  const locations = useSelector((state) => state.locations);

  const optionsServices = services.map((e) => {
    return { label: e.name[0].toUpperCase() + e.name.slice(1), value: e.name };
  });

  const optionsLocations = locations.map((e) => {
    return { label: e.name, value: e.id };
  });

  const optionsFacilities = facilities.map((e) => {
    return { label: e.name[0].toUpperCase() + e.name.slice(1), value: e.name };
  });

  let hotel = useSelector((state) => state.detail);

  const [hotelChanges, setHotelChanges] = useState({
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

  const handleChange = (e) => {
    setHotelChanges({
      ...hotel,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Llamado a la action.
    dispatch(patchHouse(hotelChanges));
    console.log("Handle");
  };

  if (!hotel) return (<div>cargando</div>)

  return (
    <Modal visible="true">
      <div className="EditPost__container">
        <div>
          <h1>Editar publicación</h1>
        </div>

        <form onSubmit={(e) => handleSubmit(e)} className="formEditPost">
          <div>
            <input
              type="text"
              key="name"
              defaultValue={hotel.name}
              name="name"
              onChange={handleChange}
              className="inputs"
            />
          </div>

          <div>
            <input
              type="number"
              key="price"
              defaultValue={hotel.pricePerNight}
              name="name"
              onChange={handleChange}
              className="inputs"
            />
          </div>

          <div>
            <input
              type="text"
              key="people"
              defaultValue={hotel.numberOfPeople}
              name="name"
              onChange={handleChange}
              className="inputs"
            />
          </div>

          <div>
            <textarea
              type="text"
              key="description"
              defaultValue={hotel.description}
              name="name"
              onChange={handleChange}
              rows="4"
              cols="50"
              className="textareaEditPost"
            />
          </div>

          <div>
            <textarea
              type="text"
              key="rules"
              defaultValue={hotel.houseRules}
              name="name"
              onChange={handleChange}
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
              className="cascader"
            />
          </div>

          <div>
            <Cascader
              options={optionsFacilities}
              multiple
              maxTagCount="responsive"
              placeholder="Facilitites"
              defaultValue={hotel.Services}
              className="cascader"
            />
          </div>

          <div>
            <Cascader
              options={optionsLocations}
              multiple
              maxTagCount="responsive"
              placeholder="Location"
              defaultValue={hotel.Services}
              className="cascader"
            />
          </div>
          <div>
            <Link to="/home">
              <button type="submit" className="btnEditPost">
                Enviar
              </button>
            </Link>
          </div>
        </form>
      </div>
    </Modal>
  );
}
