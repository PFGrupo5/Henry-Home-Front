import { message } from 'antd'
import * as Unicons from "@iconscout/react-unicons";
import { GoogleLogin } from 'react-google-login'
import { useDispatch } from 'react-redux'
import { googleLogIn, SignIn } from '../../../FilesStore/Actions'
import { ValidateForm } from "../../../utils/ValidateForm"
import { useHistory } from 'react-router-dom'
import { useState } from 'react';

const LoginForm = ({ setDisplay }) => {
    const history = useHistory()
    const dispatch = useDispatch()

    const [loginData, setLoginData] = useState({
        email: "",
        inputPassword: "",
        role: "Client",
    });
    const [formErrors, setFormErrors] = useState({});

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch(googleLogIn(result, token));
            setDisplay(false)
            history.push("/home");
        } catch (error) {
            console.log(error);
        }
    };

    const googleFailure = (error) => {
        console.log("googleError", error);
    };

    const login = () => {
        if (!loginData.email.trim().length) {
            return message.error("Colocar Email");
        }
        if (!loginData.inputPassword.trim().length) {
            return message.error("Colocar Contraseña");
        }
        if (formErrors.email || formErrors.inputPassword)
            return message.error("Error con los datos");
            dispatch(SignIn(loginData, history));
            setLoginData({
                email: "",
                inputPassword: "",
                role: "Client",
            })
            setDisplay(false)
        } 
        
    

    const inputFormHandler = (e)=>{
        const {name,value} = e.target
        setLoginData(prev=>({ ...prev, [name]: value }))
        setFormErrors(ValidateForm({ ...loginData, [name]: value }));
    }



   

    return (
        <form onSubmit={e => e.preventDefault()} className="ingresar">
            <h3>Ingreso</h3>
            <div className='inputContainer'>
                <input
                    name='email'
                    type='email'
                    placeholder='Email'
                    onChange={inputFormHandler}
                    value={loginData.email}
                />
                <p className="error-message">
                    {formErrors.email ? formErrors.email : "ㅤㅤ"}
                </p>
            </div>
            <div className='inputContainer'>
                <input
                    name='inputPassword'
                    type='password'
                    placeholder='Password'
                    onChange={inputFormHandler}
                    value={loginData.inputPassword}
                />
                <p className="error-message">
                    {formErrors.inputPassword ? formErrors.inputPassword : "ㅤㅤ"}
                </p>
            
            </div>
            <p type='text'>¿Olvidaste tu contraseña?</p>
            <button onClick={login} className='NavBarHome_loginBtn'>Ingresar</button>
            <GoogleLogin
                clientId="109526159096-dk6c06q28lkm7uq041ievngdekh1p8k2.apps.googleusercontent.com"
                // personalización del boton de google
                render={(renderProps) => (
                    <button
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        className="NavBarHome_googleBtn"
                    >
                        <Unicons.UilGoogle />
                        Ingresar con Google
                    </button>
                )}
                onSuccess={googleSuccess}
                onFailure={googleFailure}
            />
        </form>
    )
}
export default LoginForm