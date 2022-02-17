import userImg from '../../../assets/img/user_default.png'
import '../../../assets/css/NavBarHome/UserCard/styles.scss'
import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'
import {  Dropdown, Menu } from 'antd'
import { useSelector } from 'react-redux'
const UserCard = ({ user, logout }) => {
  
  const options = useRef(null);
  const [visible, setVisible] = useState(false);
    const { userDetail} = useSelector(state=>state)

  const appear = () => {
    setVisible(!visible);
    if (visible) {
      options.current.style.transform = "scale(1)";
    } else {
      options.current.style.transform = "scale(0)";
    }
  };
  const menu = (
    <Menu>
      <Menu.Item>
        <Link to={`user/${userDetail?.result?.id}`}>Perfil</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/owners">Convertirse en dueño</Link>
      </Menu.Item>
      <Menu.Item>
        <p onClick={logout}>Cerrar sesión</p>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="UserCard_profilePic">
      <div onClick={appear}>
        <Dropdown overlay={menu} placement="bottomLeft" arrow>
        <span>{user.result.firstName || user.result.givenName}</span>
        </Dropdown>
        <img src={user.result.imageUrl || userImg} alt="profile-pic" />
      </div>
    </div>
  );
};
export default UserCard