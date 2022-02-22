import React, { useState, useEffect } from 'react';
import { Modal, Cascader, message } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import "../assets/css/DashboardOwner/DashboardOwner.scss";
import { getFacilities, getLocations, getServices, getUserDetail } from "../FilesStore/Actions";
import ListHouses from "../components/ListHouses";
import axios from 'axios';
import { URL_BACK } from '../config';
import iconProvider from '../utils/IconProvider';
import FileBase from "react-file-base64";
import { ValidateFormCreate } from '../utils/ValidateFormCreate';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

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
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null,
  })
  const [location, setLocation] = useState("")
  const settLocation= async (e)=>{
    setLocation(e)
    var results
    try{
       results = await geocodeByAddress(e)
    }catch{ results={lat: null, lng: null,}}
    setCoordinates(results)
    setFormErrors(ValidateFormCreate({ ...house, location: e }))
    console.log(location)
  }
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [house, setHouse] = useState({
    name: "",
    pricePerNight: null,
    numberOfPeople: null,
    numberOfBeds: null,
    description: "",
    houseRules: "",
    services: [],
    facilities: [],
    location: null,
    images: null,
  });
  const handleLocSelect = async e=>{

    const results = await geocodeByAddress(e)
    const ubicacion= await getLatLng(results[0])

    setLocation(e)
    setCoordinates(ubicacion)
    setFormErrors(ValidateFormCreate({ ...house, location: e }))
    console.log(results)
  }
  const [createHouse, setCreateHouse] = useState(false);
  const [formErrors, setFormErrors] = useState({ msg: "Error" });

  const { services, facilities, userDetail } = useSelector((state) => state);

  const optionsServices = services.map((e) => {
    return { label: e.name[0].toUpperCase() + e.name.slice(1), value: e.name };
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
    setFormErrors(ValidateFormCreate({ ...house, [name]: value }));
  };
  console.log({ formErrors }, "form Errors");

  const serviceHandler = (e) => {
    setHouse((prev) => ({
      ...prev,
      services: e,
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
      facilities: facilitiesFlat,
      images: [house.image1, house.image2, house.image3]/* .filter(e => e !== undefined) */
    }

    if (Object.keys(formErrors).length) return message.error("Error en los datos")
    if (!houseUpdate.images.some(i => i !== undefined)) return message.error("Subir una imagen del alojamiento")
    if (createHouse) {
      axios.post(`${URL_BACK}/houses`, {...houseUpdate, location: location, coordinates:coordinates}, {
        headers: {
          authorization: user.token
        }
      })
        .then(({ data }) => {
          message.success(data.message)
          dispatch(getUserDetail(id, role));
        })
        .catch(error => message.error(error.response.data.message))
    } else {
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
    }
    setIsModalVisible(false);
    clean()
  };

  const handleCancel = () => {
    console.log('holis');
    setIsModalVisible(false);
    clean()
  };

  const createHouseHandler = () => {
    showModal()
    setCreateHouse(true)
  }
  const clean = () => {
    setHouse({
      name: "",
      pricePerNight: "",
      numberOfPeople: "",
      numberOfBeds: "",
      description: "",
      houseRules: "",
      services: [],
      facilities: [],
      location: null,
      images: [],
    })
    setLocation(null)
  }
  console.log(location)

  if (!userDetail || userDetail.role !== "Moderator") return (<div>Cargando</div>)
  const { Housings } = userDetail

  return (
    <div className="container-moderator">
      <div>
        <h2 className="titleAdmin">Mis Alojamientos</h2>
        <div className="btn-create-container">
          <button onClick={createHouseHandler}> Agregar casa {iconProvider("add")}</button>
        </div>
      </div>
      <>
        <div className="container-table100">
          <div className="wrap-table100">
            <div className="table">
              <div className="table-container">
                <div className="table">
                  <div className="row header">
                    <div className="cell">Imagen</div>
                    <div className="cell">Nombre</div>
                    <div className="cell">Descripción</div>
                    <div className="cell">Precio por noche</div>
                    <div className="cell">Status</div>
                    <div className="cell">Acción</div>
                  </div>
                </div>
                {(Housings.length) ? Housings?.map((e) =>
                (
                  <ListHouses
                    user={user}
                    houseInfo={e}
                    onClick={showModal}
                    setHouse={setHouse}
                    setCreateHouse={setCreateHouse}
                  />
                )) : (<div><p className='no-home-message'>No hay alojamientos</p></div>)}
                <div>
                  <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} className="modal" okText="Confimar" cancelText="Cancelar" title={createHouse ? "Crear alojamiento" : "Editar alojamiento"}>
                    <div className='modal-container'>
                      <div className='input-container'>
                        <span>Nombre</span>
                        <input
                          type="text"
                          value={house.name}
                          name="name"
                          onChange={inputFormHanlder}
                        />
                        <p className="error-message">
                          {formErrors.name ? formErrors.name : "ㅤㅤ"}
                        </p>
                      </div>
                      <div className='input-container'>
                        <span>Precio por noche</span>
                        <input
                          type="number"
                          key="price"
                          value={house.pricePerNight}
                          name="pricePerNight"
                          onChange={inputFormHanlder}
                          defaultValue="0"
                        />
                        <p className="error-message">
                          {formErrors.pricePerNight ? formErrors.pricePerNight : "ㅤㅤ"}
                        </p>
                      </div>
                      <div className='input-container'>
                        <span>Número de personas</span>
                        <input
                          type="number"
                          key="people"
                          value={house.numberOfPeople}
                          name="numberOfPeople"
                          onChange={inputFormHanlder}
                        />
                        <p className="error-message">
                          {formErrors.numberOfPeople ? formErrors.numberOfPeople : "ㅤㅤ"}
                        </p>
                      </div>
                      <div className='input-container'>
                        <span>Número de camas</span>
                        <input
                          type="number"
                          key="numberOfPeople"
                          value={house.numberOfBeds}
                          name="numberOfBeds"
                          onChange={inputFormHanlder}
                        />
                        <p className="error-message">
                          {formErrors.numberOfBeds ? formErrors.numberOfBeds : "ㅤㅤ"}
                        </p>
                      </div>
                      <div className='input-container'>
                        <span>Descripción</span>
                        <textarea
                          type="text"
                          key="description"
                          value={house.description}
                          name="description"
                          onChange={inputFormHanlder}
                          rows="4"
                          cols="55"

                        />
                        <p className="error-message">
                          {formErrors.description ? formErrors.description : "ㅤㅤ"}
                        </p>
                      </div>
                      <div className='input-container'>
                        <span>Reglas de la casa</span>
                        <textarea
                          type="text"
                          value={house.houseRules}
                          name="houseRules"
                          onChange={inputFormHanlder}
                          rows="4"
                          cols="55"
                        />
                        <p className="error-message">
                          {formErrors.houseRules ? formErrors.houseRules : "ㅤㅤ"}
                        </p>
                      </div>
                      <div className='input-container'>
                        <Cascader
                          options={optionsServices}
                          multiple
                          maxTagCount="responsive"
                          placeholder="Servicios"
                          value={house.services}
                          onChange={serviceHandler}
                          className="Cascader"
                        />

                      </div>

                      <div className='input-container'>
                        <Cascader
                          options={optionsFacilities}
                          multiple
                          maxTagCount="responsive"
                          placeholder="Instalaciones"
                          value={house.facilities}
                          onChange={facilitiesHandler}
                          className="Cascader"
                        />

                      </div>
                      <div className='input-container'>
                      <PlacesAutocomplete 
                      value={location} 
                      onChange={(e)=>settLocation(e)}
                      onSelect={handleLocSelect}
                      >
                      {({ getInputProps, suggestions, getSuggestionItemProps, loading })=>( <div>
             <input {...getInputProps({ placeholder:"Ubicacion..." })} />

             <div>
               {loading ? <div>...cargando</div> : null}
               {suggestions.map((suggestion)=>{

                 const style={
                   backgroundColor: suggestion.active ? "#bbbaba" :"#fff"
                 }
               return <div {...getSuggestionItemProps(suggestion,{style})} >

                 {suggestion.description}
                 </div>
                 
                      })}
             </div>
             </div>)
             }

          </PlacesAutocomplete>
                        {/* <Cascader
                          options={optionsLocations}
                          maxTagCount="responsive"
                          placeholder="Ubicación"
                          value={house.location}
                          onChange={locationHandler}
                          className="Cascader"
                        /> */}
                        <p className="error-message">
                          {formErrors.location ? formErrors.location : "ㅤㅤ"}
                        </p>
                      </div>
                      <div>
                        <FileBase
                          type="file"
                          multiple={false}
                          onDone={({ base64 }) => {
                            setHouse({ ...house, image1: base64 })
                          }
                          }
                        />

                        <FileBase
                          type="file"
                          multiple={false}
                          onDone={({ base64 }) => {
                            console.log(base64)
                            setHouse({ ...house, image2: base64 })
                          }
                          }
                        />
                        <FileBase
                          type="file"
                          multiple={false}
                          onDone={({ base64 }) => {
                            console.log(base64)
                            setHouse({ ...house, image3: base64 })

                          }
                          }
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