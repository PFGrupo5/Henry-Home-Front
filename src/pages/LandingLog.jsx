import React from 'react'
import Form from '../components/Form'
import "../assets/css/NavBarHome/styles.scss";


const LandingOwner = (role) => {
  console.log(role)
  return (
    <div>
      <Form role={role} google={false} />
    </div>
  )
}

export default LandingOwner