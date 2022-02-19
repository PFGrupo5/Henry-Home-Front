import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHotels, adminStatus, postServices, postFacilities } from "../FilesStore/Actions/index.js";
import Cards from "../components/Cards";
// import Loading from "../components/Loading";
import Pages from "../components/Pages";

import "../assets/css/DashboardAdmin/DashboardAdmin.scss";

export default function DashboardAdmin() {

    const [page, setPage] = useState(1)
    const [size] = useState(6)
    const [services, setServices] = useState("")
    const [facilities, setFacilities] = useState("")

    const dispatch = useDispatch();
    const allHotels = useSelector((state) => state.hotels);
    const count = useSelector((state) => state.count);


    const changePage = (e) => {
        setPage(e)
    }

    const modifyStatus = (id, status) => {
        dispatch(adminStatus({ id, status }));
        dispatch(getHotels(page, size, { status: "Pending" }));
    }

    useEffect(() => {
        dispatch(getHotels(page, size, { status: "Pending" }));
    }, [dispatch, page, size]);

    console.log(allHotels)

    const handleChangeS = (e) => {
        console.log(services)
        setServices(e.target.value)
    }

    const handleChangeF = (e) => {
        console.log(facilities)
        setFacilities(e.target.value)
    }

    const sendServices = () => {
        console.log(services)
        dispatch(postServices({ name: services }))
    }

    const sendFacilities = () => {
        console.log(facilities)
        dispatch(postFacilities({ name: facilities }))
    }




    return (
        <div className="cardsHome">
            {/* if (allHotels?.length === 0) {
                return (
                    <div>
                        <Loading />
                    </div>
                );
            } else { */}
            <Pages pages={Math.ceil(count / size)} actualPage={page} changePage={changePage} />
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
            {/* } */}

            <input type="text" value={services} onChange={handleChangeS} />
            <button onClick={sendServices} >Agregar Servicio</button>

            <input type="text" value={facilities} onChange={handleChangeF} />
            <button onClick={sendFacilities} >Agregar Instalaciones</button>
        </div>
    );
}