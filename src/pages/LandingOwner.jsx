import Form from '../components/Form'
import React from 'react'
import NavBarOwner from '../components/NavBarOwner'

const LandingOwner = () => {
  return (
    <div>
      <NavBarOwner />
      <Form role="Moderator" google={false}/>
     
    </div>
  )
}

export default LandingOwner