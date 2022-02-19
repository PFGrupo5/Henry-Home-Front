import userImg from "../../../assets/img/user_default.png";
import "../../../assets/css/NavBarHome/UserCard/styles.scss";
import { Link } from "react-router-dom";
import { Dropdown, Menu } from "antd";
const UserCard = ({ user, logout }) => {

  const menu = (
    <Menu>
      {user?.result?.role === "Moderator" ? (
        <Menu.Item>
          <Link to={`/owner/${user?.result?.id}`}>Perfil Dueño</Link>
        </Menu.Item>
      ) : (
        user?.result?.role === "Admin" ? (
          <Menu.Item>
            <Link to={`/adminDash`}>Perfil Admin</Link>
          </Menu.Item>
        ) : (
          <>
            <Menu.Item>
              <Link to={`/user/${user?.result?.id}`}>Perfil</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/owners">Convertirse en dueño</Link>
            </Menu.Item>
          </>
        ))}

      <Menu.Item>
        <p onClick={logout}>Cerrar sesión</p>
      </Menu.Item>
    </Menu >
  );

  return (
    <div className="UserCard_profilePic">
      <div >
        <Dropdown overlay={menu} placement="bottomLeft" arrow>
          <span className="user-name">{user.result?.firstName || user.result?.lastName || "Admin"}</span>
        </Dropdown>
        <img src={user.result.profile_img || userImg} alt="profile-pic" />
      </div>
    </div>
  );
};
export default UserCard;
