import axios from "axios"
import { URL_BACK } from "../config"
import iconProvider from "../utils/IconProvider"
import { Popconfirm, message } from 'antd';
import { useHistory } from "react-router-dom";




const ListHouses = ({
  houseInfo,
  onClick,
  setHouse,
  user
}) => {
  const { id, images, name, description, pricePerNight, status, numberOfPeople, houseRules, services, facilities, LocationId } = houseInfo
  const history = useHistory()
  
  console.log(services, facilities, LocationId)
  
  const clickHandler = () => {
    setHouse(prev => (
      {
        ...prev,
        id, images, name, description, pricePerNight, status, numberOfPeople, houseRules, services, facilities, LocationId
      }))
      onClick()
    }
  const confirm = () => {
    console.log(user.token);
    console.log(id);


    axios.delete(`${URL_BACK}/houses/${id}`, {
      headers: {
        authorization: user.token
      },
    })
      .then(({ data }) => {
        message.success(data.message)
        window.location.reload()
   
      })
      .catch((error) => console.log(error))
  }


  function cancel(e) {
    console.log(e);

  }

  return (
    <div class="row item" key={id}>
      <div class="cell ">
        <img src={images[0]} alt=""  onClick={()=>history.push(`/home/${id}`)}/>
      </div >
      <div class="cell">
        {name}
      </div >
      <div class="cell">{description}</div >
      <div class="cell">{pricePerNight}</div >
      <div class="cell">{status}</div>
      <div class="cell btn-container">
        <Popconfirm onConfirm={confirm} onCancel={cancel} title="Seguro que quieres eliminar esta casa?" okText="Si"
          cancelText="No">
          <button  className="delete">{iconProvider("delete")}</button>
        </Popconfirm>
        <button onClick={clickHandler} className="edit">{iconProvider("edit")}</button>
      </div>
    </div>
  )
}

export default ListHouses