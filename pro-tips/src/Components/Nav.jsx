import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/Registration'
import Contact from '../Pages/Contact'

function Navbar() {
  return (
    <div>
      <nav>
        <Link to={"/"}>
            <h1 style={{color:"white", marginRight:"15px", marginLeft:"15px"}}>Kalvium ❤️</h1>
        </Link>
        <div className='flex'>
            <Link to={"/Contact"}> 
                <h3>Contact</h3>
            </Link>
            <Link to={"/About"}>
                <h3>Registration Form</h3>
            </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar