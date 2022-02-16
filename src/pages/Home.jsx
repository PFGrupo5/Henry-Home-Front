import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import NavBar from "../components/NavBarHome";
import Loading from "../components/Loading";
import { AddFav, DelFav, getHotels, getUserDetail } from "../FilesStore/Actions/index.js";
import Aside from "../components/Aside";
import "../assets/css/Home/Home.scss";
import Pages from "../components/Pages";

export default function Home() {
  const dispatch = useDispatch();
  //usuario
  const User = JSON.parse(localStorage.getItem("profile"));
  const infoUser = User? User.result : {id:null, role:null}
  const [renderFav, setRenderFav] = useState(1)
  const userDetail = useSelector((state) => state.userDetail);

  console.log(userDetail)
  var favsIds = userDetail&&userDetail.favs? userDetail.favs.map(e=>e.id) : 0
console.log("ARRAY",favsIds)
  const onClickFav = (e,id, excusa)=>{
    setRenderFav(renderFav+1)
    
    e < 0 ?
    dispatch(AddFav(id,User.token)) :
    dispatch(DelFav(id,User.token)) 
    e=== 0 ?
    excusa(e-1) :
    excusa(e*-1)
  }
  const resetHome = ()=>{
    setRenderFav(renderFav+1)
    console.log("EMMMMMM")
  }
  
  
  
  
  //paginado
  const [page, setPage] = useState(1)
  const [size] = useState(6)
  
  const allHotels = useSelector((state) => state.hotels);
  const count = useSelector((state) => state.count);
  
  const changePage = (e) => {
    setPage(e)
  }
  useEffect(() => {
    dispatch(getHotels(page, size));
    infoUser.id && dispatch(getUserDetail(infoUser.id, infoUser.role));
  }, [dispatch, page, size,infoUser.id, infoUser.role, renderFav]);

  

  if (allHotels?.length === 0 && (User && (favsIds===null || userDetail.favs )) ) {
    return (
      <div>
        <Loading />
      </div>
    );
  } else {
    return (
      <div className="fullHome">
        <NavBar resetHome={resetHome}/>
        <Pages pages={Math.floor(count / size)} actualPage={page} changePage={changePage} />
        <Aside />
        <div className="home">
          <div className="cardsHome">
            {allHotels.map((e) => {
               
              
              return (
                
                <Cards
                  name={e.name}
                  id={e.id}
                  location={e.Location.name}
                  img={e.images}
                  price={e.pricePerNight}
                  favs={ favsIds? favsIds.indexOf(e.id): -1}
                  role={User&&User.result.role}
                  click={onClickFav}
                  
                />
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}