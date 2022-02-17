// Styles
import '../../assets/css/NavBarHome/styles.scss'
// Components
import { Selects } from '../../UI/Input'
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
// react hooks
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserCard from './UserCard';


const provincias = [
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
  ];
const NavBarHome2 = ()=>{

    const user = useSelector(state=>state.authData)
    console.log(user)

    // referencia al contenedor de los formularios
    const formularios = useRef(null)
    // estado para hacer visible determinado formulario en el contenedor
    const [ visible,setVisible ] = useState(true)
    // instancias para los datos de registro
    const [registerData,setRegisterData] = useState({firstName:'',lastName:'',inputPassword:'',confirmPassword:'',email:''})
    // instancias para los datos de login
    const [loginData,setLoginData] = useState({email:'',inputPassword:'',role:'Client'})

    const handleForm = (e)=>{
        const text = e.target.innerText
        if(text === 'Registro'){
            setVisible(false)
            formularios.current.style.transform = "scale(1)"
        }else if(text === 'Ingreso'){
            setVisible(true)
            formularios.current.style.transform = "scale(1)"
        }
        else{
            formularios.current.style.transform = "scale(0)"
        }
    }   
    
    return(
        <>
            <div className="NavBarHome_container">
                <div className='NavBarHome_logo'>
                    <Link to='/' className='NavBarHome_linkHome'>
                        Henry <span>Home</span>
                    </Link>
                </div>
                <div className='NavBarHome_selector'>
                    <Selects options={provincias}/>
                </div>
                <div className='NavBarHome_btnContainer'>
                    {user?
                    <UserCard user={user}/>
                    :
                    <>
                        <button onClick={handleForm} >
                            Registro
                        </button>
                        <button onClick={handleForm}>
                            Ingreso
                        </button>
                    </>
                    }
                </div>
            </div>
            {/* FORMULARIOS DE INGRESO Y REGISTRO */}
            <div ref={formularios} className='NavBarHome_forms'>
                { visible ?
                <LoginForm setLoginData={setLoginData} handleForm={handleForm} loginData={loginData} />
                :
                <RegisterForm setRegisterData={setRegisterData} handleForm={handleForm} registerData={registerData} />
                }
            </div>
        </>
    )
}
export default NavBarHome2