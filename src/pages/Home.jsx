import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
// import NavBarHome2 from "../components/NavBarHome2/NavBarHome2.js";
import Loading from "../components/Loading";
import { AddFav, DelFav, getHotels, getUserDetail } from "../FilesStore/Actions/index.js";
import Aside from "../components/Aside";
import "../assets/css/Home/Home.scss";
import Pages from "../components/Pages";

export default function Home() {
  const dispatch = useDispatch();
  const User = JSON.parse(localStorage.getItem("profile"));
  const infoUser = User ? User.result : { id: null, role: null }
  const [renderFav, setRenderFav] = useState(1)
  const userDetail = useSelector((state) => state.userDetail);

  var favsIds = userDetail && userDetail.favs ? userDetail.favs.map(e => e.id) : 0;

  const onClickFav = (e, id, excusa) => {
    setRenderFav(renderFav + 1)

    e < 0 ?
      dispatch(AddFav(id, User.token)) :
      dispatch(DelFav(id, User.token))
    e === 0 ?
      excusa(e - 1) :
      excusa(e * -1)
  }
  //filtros
  const [Info, setInfo] = useState({
    status: "Accepted",
    stars: 0, // min de estrellas
    numberOfPeople: null, // numero de gente 
    numberOfBeds: null, // numero de camas
    location: null, // all-created-notCreated
    minPrice: null,
    maxPrice: null,
  })
  const setearInfo = (e) => {
    setInfo(e)
  }

  //paginado
  const [page, setPage] = useState(1)
  const [size] = useState(6)

  const allHotels = useSelector((state) => state.hotels);
  const count = useSelector((state) => state.count);

  const userRole = User?.result.role;
  const changePage = (e) => {
    setPage(e)
  }

  const findHouses = (e) => {
    dispatch(getHotels(page, size, Info))
  }
  const findAllHouses = (e) => {
    dispatch(getHotels(page, size, {
      status: "Accepted",
      stars: 0,
      numberOfPeople: null,
      numberOfBeds: null,
      location: null,
      minPrice: null,
      maxPrice: null,
    }))
  }

  useEffect(() => {
    dispatch(getHotels(page, size, { status: "Accepted" }));
    infoUser.id && dispatch(getUserDetail(infoUser.id, infoUser.role));

  }, [dispatch, page, size, infoUser.id, infoUser.role, renderFav]);


  // if (allHotels?.length === 0 && (User && (favsIds === null || userDetail?.favs))) {
  //   return (
  //     <div>
  //       <Loading />
  //     </div>
  //   );
  // } else {
  return (
    <main >
      <div className="over-home-containter">
        <div className="home-containter">
          <Aside findHouses={findHouses} setInfo={setearInfo} Info={Info} findAllHouses={findAllHouses} />
          <div className="cards-container">
            <div className="cardsHome">
              {allHotels?.length ? allHotels.map((e) => {
                return (
                  <Cards
                    key={e.id}
                    name={e.name}
                    id={e.id}
                    location={e.Location.name}
                    img={e.images}
                    price={e.pricePerNight}
                    favs={favsIds ? favsIds.indexOf(e.id) : -1}
                    role={userRole}
                    click={onClickFav}

                  />
                );
              }) : <Loading />}
            </div>
            <Pages pages={Math.floor(count / size)} actualPage={page} changePage={changePage} />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
