// Styles
import "../../assets/css/NavBarHome/styles.scss";
// Components

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
// react hooks
import { useEffect, useRef, useState,  } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

import UserCard from "./UserCard";
import { useDispatch } from "react-redux";

import { googleLogOut } from "../../FilesStore/Actions";
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
  // referencia al contenedor de los formularios
  const formularios = useRef(null);
  // estado para hacer visible determinado formulario en el contenedor
  const [visible, setVisible] = useState(true);
  const [display, setDisplay] = useState(true);
  // instancias para los datos de registro
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    inputPassword: "",
    confirmPassword: "",
    email: "",
    role: "Client",
  });
  // instancias para los datos de login
  const [loginData, setLoginData] = useState({
    email: "",
    inputPassword: "",
    role: "Client",
  });


  // console.log(location)
  const logout = () => {
    dispatch(googleLogOut());
    history.push("/home");
    setUser(null);
  };



  useEffect(() => {
   setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);


  const handleForm = (e) => {
    setDisplay(true)
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
const handlerDisplay = (e)=>{
  e.stopPropagation();
  console.log(e.target.classList[0]);
  if (e.target.classList[0] === "NavBarHome_forms") setDisplay(false);
}
  return (
    <>
      <div className="NavBarHome_container">
        <div className="NavBarHome_logo">
          <Link to="/" className="NavBarHome_linkHome">
            Henry <span>Home</span>
          </Link>
        </div>
        {/* <div className="NavBarHome_selector">
          <Selects options={provincias} />
        </div> */}
        <div className="NavBarHome_btnContainer">
          {user ? (
            <UserCard user={user} logout={logout} />
          ) : (
            <>
              <button onClick={handleForm}>Registro</button>
              <button onClick={handleForm}>Ingreso</button>
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
              setLoginData={setLoginData}
              handleForm={handleForm}
              loginData={loginData}
              setUser={setUser}
              setDisplay={setDisplay}
              />
              ) : (
                <RegisterForm
                setRegisterData={setRegisterData}
                handleForm={handleForm}
                registerData={registerData}
                setDisplay={setDisplay}
            />
          )}
        </div>
      }
    </>
  );
};
export default NavBarHome2;
