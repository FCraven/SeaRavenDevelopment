import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (

    <div>
      <nav className="navbar navbar-expand-md sticky-top navbar-light bg-light shadow-lg">
        <div className='container-fluid'>
          <NavLink className="navbar-brand" to="#">
            <img src="seaRavenLight.png" width="30" height="30" className="d-inline-block align-top" alt=""/>
            SeaRaven Development
          </NavLink>
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarResponsive'>
            <span className='navbar-toggler-icon'/>
          </button>
          <div className='collapse navbar-collapse' id='navbarResponsive'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item navbar-light'>
                <NavLink className='nav-link' to='/skills'>Skills</NavLink>
              </li>
              <li className='nav-item navbar-light'>
                <NavLink className='nav-link' to='/projects'>Projects</NavLink>
              </li>
              <li className='nav-item navbar-light'>
                <NavLink className='nav-link' to='/education'>Education</NavLink>
              </li>
              <li className='nav-item navbar-light'>
                <NavLink className='nav-link' to='/aboutme'>About Me</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
      )
    }

    export default Navbar
