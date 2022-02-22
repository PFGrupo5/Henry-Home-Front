import axios from "axios";
import { URL_BACK } from "../config";
import iconProvider from "../utils/IconProvider";
import { Popconfirm, message, Alert } from "antd";
import { useHistory } from "react-router-dom";

const ListHouses = ({ houseInfo, onClick, setHouse, user, setCreateHouse }) => {
  const {
    id,
    images,
    name,
    description,
    pricePerNight,
    status,
    numberOfPeople,
    houseRules,
    services,
    facilities,
    LocationId,
    numberOfBeds,
  } = houseInfo;

  const history = useHistory();

  const clickHandler = () => {
    setCreateHouse(false);
    setHouse((prev) => ({
      ...prev,
      id,
      images,
      name,
      description,
      pricePerNight,
      status,
      numberOfPeople,
      houseRules,
      numberOfBeds,
      services,
      facilities,
      LocationId,
    }));
    onClick();
  };
  const confirm = () => {
    axios
      .delete(`${URL_BACK}/houses/${id}`, {
        headers: {
          authorization: user.token,
        },
      })
      .then(({ data }) => {
        message.success(data.message);
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  function cancel(e) {
    console.log(e);
  }

  let imgs = images.find((e) => e !== null);

  return (
    <div className="row item" key={id}>
      <div className="cell ">
        <img
          src={imgs}
          alt=""
          onClick={() => history.push(`/home/${id}`)}
          className="image-home-list"
        />
      </div>
      <div className="cell">{name}</div>
      <div className="cell">{description}</div>
      <div className="cell">{pricePerNight}</div>
      <div className="cell">{status}</div>
      <div className="cell btn-container">
        <Popconfirm
          onConfirm={confirm}
          onCancel={cancel}
          title="Seguro que quieres eliminar esta casa?"
          okText="Si"
          cancelText="No"
        >
          <button className="delete">{iconProvider("delete")}</button>
        </Popconfirm>
        <button onClick={clickHandler} className="edit">
          {iconProvider("edit")}
        </button>
      </div>
    </div>
  );
};

export default ListHouses;
