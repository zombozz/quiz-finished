import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div className='navbar'>
        <Link to="/"><img src="./images/download.svg"></img></Link>
        <div className='name-email'>
        <h1>Name: {localStorage.getItem("name")}</h1>
        <h1>Email: {localStorage.getItem("email")}</h1>
        </div>
    </div>
  )
}

export default navbar