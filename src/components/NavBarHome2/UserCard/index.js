import userImg from '../../../assets/img/user_default.png'
import '../../../assets/css/NavBarHome/UserCard/styles.scss'
import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'
import { googleLogOut } from '../../../FilesStore/Actions'
import { useDispatch } from 'react-redux'
const UserCard = ({user})=>{
    const dispatch = useDispatch()
    const options = useRef(null)
    const [visible,setVisible] = useState(false)

    const appear = ()=>{
        setVisible(!visible)
        if(visible){
            options.current.style.transform = 'scale(1)'
        }else{
            options.current.style.transform = 'scale(0)'
        }
    }
    const logout = ()=>{
        dispatch(googleLogOut())
    }
    return(
        <div className='UserCard_profilePic' >
            <div onClick={appear} >
                <span>{ user.result.firstName }</span>
                <img src={ user.result.profilePic || userImg } alt="profile-pic" />
            </div>
            <div ref={options} >
                <Link to='/profile' >Profile</Link><br/>
                <Link to='/' >Become a host</Link>
                <button onClick={logout} >Cerrar sesión</button>
            </div>
        </div>
    )
}
export default UserCard