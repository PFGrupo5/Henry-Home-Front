import { Button , Input } from 'antd'
import { GoogleLogin } from 'react-google-login'
import { useDispatch } from 'react-redux'
import { googleLogIn } from '../../../FilesStore/Actions'
import axios from 'axios'
import { URL_BACK } from '../../../config'
import { useState } from 'react'

const LoginForm = ({setLoginData,handleForm,loginData})=>{

    const dispatch = useDispatch()

    const [error,setError] = useState('')

    const googleResponse = (response)=>{
        console.log(response)
    }
    
    const login = ()=>{
        if(!loginData.email || !loginData.inputPassword){
            console.log('Llenar formulario por favor')
        }else{
            axios.post(`${URL_BACK}/user/login`,loginData)
            .then(res=>{
                const { data } = res
                dispatch(googleLogIn(data.result,data.token))
                setLoginData({email:'',inputPassword:'',role:'Client'})
                if(error){
                    setError('')
                }
            })
            .catch(err=>{
                setError(err.response.data.message)
            })
        }
    }

    return(
        <form onSubmit={e=>e.preventDefault()}>
            <div>
                <span onClick={handleForm} >x</span>
            </div>
            <h3>Ingreso</h3>
            <Input 
                name='email' 
                type='email' 
                placeholder='Email'
                onChange={e=>setLoginData({...loginData,[e.target.name]:e.target.value})}
                value={loginData.email}
            />
            <Input 
                name='inputPassword'
                type='password' 
                placeholder='Password'
                onChange={e=>setLoginData({...loginData,[e.target.name]:e.target.value})}
                value={loginData.inputPassword}
            />
            <span className='NavBarHome_errorMsg' >{error}</span>
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
                onSuccess={googleResponse}
                onFailure={googleResponse}
            />
        </form>
    )
}
export default LoginForm