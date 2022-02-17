import { Input } from 'antd'
import axios from 'axios'
import { URL_LOCAL } from '../../../config'
const RegisterForm = ({setRegisterData,handleForm,registerData})=>{
    
    const register = ()=>{
        axios.post(`${URL_LOCAL}/user/register`,registerData)
        .then(res=>{
            console.log(res)
            setRegisterData({firstName:'',lastName:'',inputPassword:'',confirmPassword:'',email:''})
        })
        .catch(err=>console.log(err.response.data))
    }

    return(
        <form onSubmit={e=>e.preventDefault()}>
            <div>
                <span onClick={handleForm} >x</span>
            </div>
            <h3>Registro</h3>
            <Input 
                name='email' 
                onChange={e=>setRegisterData({...registerData,[e.target.name]:e.target.value})} 
                type='email' 
                placeholder='Email'
                value={registerData.email}
            />
            <Input 
                name='inputPassword' 
                type='password' 
                placeholder='Contreseña'
                onChange={e=>setRegisterData({...registerData,[e.target.name]:e.target.value})}
                value={registerData.inputPassword}
            />
            <Input 
                name='confirmPassword' 
                type='password' 
                placeholder='Confirmar contraseña'
                onChange={e=>setRegisterData({...registerData,[e.target.name]:e.target.value})}
                value={registerData.confirmPassword}
            />
            <Input 
                name='firstName' 
                type='text' 
                placeholder='Nombre'
                onChange={e=>setRegisterData({...registerData,[e.target.name]:e.target.value})}
                value={registerData.firstName}
            />
            <Input 
                name='lastName' 
                type='text' 
                placeholder='Apellido'
                onChange={e=>setRegisterData({...registerData,[e.target.name]:e.target.value})}
                value={registerData.lastName}
            />
            <button onClick={register} className='NavBarHome_loginBtn'>Registrarse</button>
        </form>
    )
}
export default RegisterForm