import React, { useState } from "react"
import axios from "axios"
import { URL_BACK } from "../config"
import "../assets/css/ReviewsCards/ReviewsCards.scss"

export const Popup = ({ e, review, token, setpopup, setReview }) => {

  const [error, setError] = useState(false)
  const [newReview, setNewReview] = useState({
    stars: review?.stars,
    description: review?.description
  })
  const onClick = async (e) => {
    e.preventDefault();
    if (newReview.description.length <= 160) {

      try {
        var json = await axios.patch(`${URL_BACK}/reviews`, { stars: newReview.stars, description: newReview.description, id: review.id },
          {
            headers: {
              Authorization: token,
            },
          }
        )
        console.log(json.data)
        setpopup()
        setReview()


      } catch (error) { console.log(error) }
    }
  }
  const onChangeStarsMore = (e) => {
    e.preventDefault()

    if (newReview.stars < 5)
      setNewReview({
        ...newReview,
        stars: newReview.stars + 1
      });
    console.log(newReview)
  }

  const onChangeStarsLess = (e) => {
    e.preventDefault()
    if (newReview.stars > 1)
      setNewReview({
        ...newReview,
        stars: newReview.stars - 1
      });
    console.log(newReview)
  }

  const onChangeDescription = (e) => {
    e.preventDefault()
    setNewReview({
      ...newReview,
      description: e.target.value,

    });
    if (newReview.description.length <= 160) {
      setError(false)
    } else {
      setError(true)
    }
  }


  if (e) {
    return (
      <form>
        <div>
          <div>
            <>Estrellas:</>

            <button className="buttonPoP" onClick={onChangeStarsLess}>-</button>
            <>{newReview.stars}</>
            <button className="buttonPoP" onClick={onChangeStarsMore}>+</button>
          </div>
          <div>
            <textarea placeholder="Description (160 char max)" onChange={onChangeDescription} value={newReview.description}></textarea>
            {error && <p className="error">Ha excedido el limite de caracteres</p>}
          </div>
          <button className="publicar" onClick={onClick} >Publicar</button>
        </div>
      </form>
    )
  }
  return (<div></div>)

}