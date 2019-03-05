import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (

    <div>
      <nav className="navbar navbar-dark bg-dark fixed-top shadow">
        <a className="navbar-brand" href="#">
          <img src="seaRavenLight.png" width="30" height="30" className="d-inline-block align-top " alt="" />
          SeaRaven Development
        </a>

      </nav>
    </div>
      )
    }

    export default Navbar
