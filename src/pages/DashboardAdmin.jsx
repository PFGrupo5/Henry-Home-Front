import React, { useState, useEffect } from "react";
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { getHotels, adminStatus } from "../FilesStore/Actions/index.js";
import { getFacilities, getServices } from "../FilesStore/Actions/index"
import { Cascader, message } from "antd";
import Cards from "../components/Cards";
import Loading from "../components/Loading";
import Pages from "../components/Pages";

import "../assets/css/DashboardAdmin/DashboardAdmin.scss";

export default function DashboardAdmin() {

    const user = JSON.parse(localStorage.getItem("profile"))
    const [page, setPage] = useState(1)
    const [size] = useState(6)
    const [services, setServices] = useState("")
    const [facilities, setFacilities] = useState("")
    const viewFacilities = useSelector((state) => state.facilities);
    const viewServices = useSelector((state) => state.services);

    const dispatch = useDispatch();
    const allHotels = useSelector((state) => state.hotels);
    const count = useSelector((state) => state.count);

    useEffect(() => {
        dispatch(getHotels(page, size, { status: "Pending" }));
        dispatch(getFacilities());
        dispatch(getServices());
    }, [dispatch, page, size]);

    const changePage = (e) => {
        setPage(e)
    }

    const modifyStatus = (id, status) => {
        dispatch(adminStatus());
        axios.patch(
            `https://henry-home-back.herokuapp.com/api/houses/status`,
            { id, status }
        ).then((response) => {
            console.log(response)
            message.success(response.data.message)
            dispatch(getHotels(page, size, { status: "Pending" }));
        }).catch((error) => {
            console.log({ error });
            message.error(error.response.data.message);
        })
    }


    const handleChangeS = (e) => {
        setServices(e.target.value)
    }

    const handleChangeF = (e) => {
        setFacilities(e.target.value)
    }

    const sendServices = () => {
        axios.post(`https://henry-home-back.herokuapp.com/api/services`,
            { name: services },
            { headers: { Authorization: user.token } }
        ).then((response) => {
            console.log(response)
            message.success(response.data.message)
            setServices("")
            dispatch(getServices());

        }).catch((error) => {
            console.log({ error });
            message.error(error.response.data.message);
        })
    }

    const sendFacilities = () => {
        axios.post(`https://henry-home-back.herokuapp.com/api/facilities`,
            { name: facilities },
            { headers: { Authorization: user.token } }
        ).then((response) => {
            console.log(response)
            message.success(response.data.message)
            setFacilities("")
            dispatch(getFacilities());

        }).catch((error) => {
            console.log({ error });
            message.error(error.response.data.message);
        })
    }

    const optionsServices = viewServices?.map((e) => {
        return { label: e.name[0].toUpperCase() + e.name.slice(1), value: e.name }
    })

    const optionsFacilities = viewFacilities?.map((e) => {
        return { label: e.name[0].toUpperCase() + e.name.slice(1), value: e.name }
    })
    if (user?.result.role === "Admin") {

        return (
            <div className="allAdmin">
                {
                    typeof allHotels !== "string" ? (
                        <div>
                            <Pages pages={Math.ceil(count / size)} actualPage={page} changePage={changePage} />

                            {allHotels?.length ?
                                <div className="cardsDash">
                                    {allHotels.map((e) => {
                                        return (
                                            <div className="adminCards">
                                                <Cards
                                                    name={e.name}
                                                    id={e.id}
                                                    location={e.Location.name}
                                                    img={e.images}
                                                    price={e.pricePerNight}
                                                />
                                                <section>
                                                    <button className="accepted" onClick={() => modifyStatus(e.id, "Accepted")}> Aceptar </button>
                                                    <button className="rejected" onClick={() => modifyStatus(e.id, "Rejected")}> Rechazar </button>
                                                </section>
                                            </div>
                                        )
                                    })}
                                </div>
                                :
                                <Loading />
                            }
                        </div>
                    ) :
                        <div className="cardsDash">
                            <h2>Ya no hay casas para revisar</h2>
                        </div>

                }
                <div className="inputsDash">
                    <div className="create">
                        <div className="sectionsInputDash">
                            <label >Servicios</label>
                            <input type="text" placeholder="Agregar servicios..." value={services} onChange={handleChangeS} />
                            <button className="" onClick={sendServices} >Agregar Servicio</button>
                        </div>

                        <div className="sectionsInputDash">
                            <label >Instalaciones</label>
                            <input type="text" placeholder="Agregar instalaciones..." value={facilities} onChange={handleChangeF} />
                            <button onClick={sendFacilities} >Agregar Instalación</button>
                        </div>
                    </div>
                    <div className="view">
                        <div className="each">
                            <h2>Lista de Servicios</h2>
                            <Cascader
                                options={optionsServices}
                                maxTagCount="responsive"
                                placeholder="Servicios"
                                allowClear={false}
                            />
                        </div>

                        <div className="each">
                            <h2>Lista de Instalaciones</h2>
                            <Cascader
                                options={optionsFacilities}
                                maxTagCount="responsive"
                                placeholder="Instalaciones"
                                allowClear={false}
                            />
                        </div>

                    </div>

                </div>
            </div>
        );
    } else {
        return (
            <div className="allAdmin">
                <h2>Necesitas ser admin para entrar</h2>
            </div>
        )
    }
}