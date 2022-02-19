import { useEffect } from "react"




const ListHouses = ({
  houseInfo,
  onClick,
  setHouse
}) => {
  const { id, images, name, description, pricePerNight, status, numberOfPeople, houseRules, services, facilities, location} = houseInfo

  const clickHandler = ()=>{
    setHouse(prev => (
      {
        ...prev,
        id, images, name, description, pricePerNight, status, numberOfPeople, houseRules, services, facilities, location
      }))
    onClick()
  }

  return (
    <tr key={id}>
      <td>
        <img src={images[0]} alt="" width="200px" />
      </td>
      <td>
        {name}
      </td>
      <td>{description}</td>
      <td>{pricePerNight}</td>
      <td>{status}</td>
      <td>
        <button onClick={() => console.log("holis")}>Eliminar</button>
        <button onClick={clickHandler}>Editar</button>
      </td>
    </tr>
  )
}

export default ListHouses