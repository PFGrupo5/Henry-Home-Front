import { Button, Input } from 'antd'
import { GoogleLogin } from 'react-google-login'
import { useDispatch } from 'react-redux'
import { googleLogIn, SignIn } from '../../../FilesStore/Actions'

import { useHistory } from 'react-router-dom'

const LoginForm = ({ setLoginData, handleForm, loginData, setDisplay }) => {
    const history = useHistory()
    const dispatch = useDispatch()

    // const [error, setError] = useState('')

    const googleSuccess = async (res) => {
        const result = res?.profileObj;

        try {
            dispatch(googleLogIn(result, "Client"));
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
        if (!loginData.email || !loginData.inputPassword) {
            console.log('Llenar formulario por favor')
        } else {
            dispatch(SignIn(loginData, history));
            setLoginData({
                email: "",
                inputPassword: "",
                role: "Client",
            })
            setDisplay(false)
        }
    }

    return (
        <form onSubmit={e => e.preventDefault()}>
            <div>
                <span onClick={handleForm} >x</span>
            </div>
            <h3>Ingreso</h3>
            <Input
                name='email'
                type='email'
                placeholder='Email'
                onChange={e => setLoginData({ ...loginData, [e.target.name]: e.target.value })}
                value={loginData.email}
            />
            <Input
                name='inputPassword'
                type='password'
                placeholder='Password'
                onChange={e => setLoginData({ ...loginData, [e.target.name]: e.target.value })}
                value={loginData.inputPassword}
            />
            {/* <span className='NavBarHome_errorMsg' >{error}</span> */}
            <Button type='text'>¿Olvidaste tu contraseña?</Button>
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