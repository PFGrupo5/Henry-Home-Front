// Styles
import "../../assets/css/NavBarHome/styles.scss";
// Components

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
// react hooks
import { useEffect, useRef, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

import UserCard from "./UserCard";
import { useDispatch, useSelector } from "react-redux";

import { cleanError, googleLogOut } from "../../FilesStore/Actions";
import { message } from "antd";
/* const provincias = [
  "buenos aires",
  "catamarca",
  "chaco",
  "chubut",
  "cordoba",
  "corrientes",
  "entre rios",
  "formosa",
  "jujuy",
  "la pampa",
  "la rioja",
  "mendoza",
  "misiones",
  "neuquen",
  "río negro",
  "salta",
  "san juan",
  "san luis",
  "santa cruz",
  "santa fe",
  "santiago del estero",
  "tierra del fuego",
  "tucuman",
]; */

const NavBarHome2 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const { errors } = useSelector((state) => state);
  // referencia al contenedor de los formularios
  const formularios = useRef(null);
  // estado para hacer visible determinado formulario en el contenedor
  const [visible, setVisible] = useState(true);
  const [display, setDisplay] = useState(true);
  // instancias para los datos de registro

  // instancias para los datos de login

  // console.log(location)
  const logout = () => {
    dispatch(googleLogOut());
    history.push("/home");
    setUser(null);
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
    if (Object.keys(errors).length) {
      message.error(errors.response.data.message);
      dispatch(cleanError());
    }
  }, [dispatch, errors, location]);

  const handleForm = (e) => {
    setDisplay(true);
    const text = e.target.innerText;
    if (text === "Registro") {
      setVisible(false);
      formularios.current.style.transform = "scale(1)";
    } else if (text === "Ingreso") {
      setVisible(true);
      formularios.current.style.transform = "scale(1)";
    } else {
      formularios.current.style.transform = "scale(0)";
    }
  };
  const handlerDisplay = (e) => {
    e.stopPropagation();

    if (e.target.classList[0] === "NavBarHome_forms") setDisplay(false);
  };

  const path = history.location.pathname;
  return (
    <>
      <div className="NavBarHome_container">
        <div className="NavBarHome_logo">
          <Link to="/" className="NavBarHome_linkHome">
            Henry <span>Home</span>{" "}
            {path === "/owners" && <span id="owners"> - Propietario</span>}
            {path === "/admins" && <span id="owners"> - Administrador</span>}
          </Link>
        </div>
        <div className="NavBarHome_btnContainer">
          {user ? (
            <UserCard user={user} logout={logout} />
          ) : (
            <>
              {path === "/" ? (
                <>
                  <a href="#registro">
                    <button className="btn-registro">Registro</button>
                  </a>
                  <a href="#registro">
                    <button className="btn-ingreso">Ingreso</button>
                  </a>{" "}
                </>
              ) : (
                <>
                  <button onClick={handleForm} className="btn-registro">
                    Registro
                  </button>
                  <button onClick={handleForm} className="btn-ingreso">
                    Ingreso
                  </button>
                </>
              )}
            </>
          )}
        </div>
      </div>
      {/* FORMULARIOS DE INGRESO Y REGISTRO */}
      {
        <div
          ref={formularios}
          className={`NavBarHome_forms ${display ? "" : "noShow"}`}
          onClick={(e) => handlerDisplay(e)}
        >
          {visible ? (
            <LoginForm
              setDisplay={setDisplay}
            />
          ) : (
            <RegisterForm
              setDisplay={setDisplay}
            />
          )}
        </div>
      }
    </>
  );
};
export default NavBarHome2;
