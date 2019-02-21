import React, { Component } from 'react'
import { Navbar as BootNav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <BootNav fixed="top" bg="dark" variant="dark">
          <BootNav.Brand href="#">
            <img
              alt="a white raven"
              src="/seaRavenLight.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {' SeaRaven Development'}
          </BootNav.Brand>
        </BootNav>
      </div>
    )
  }
}

{/* <div>
<header>SeaRaven Development</header>
<h1> tomorrow begin crushing it</h1>
<h1>Navbar</h1>
<a>Certifications</a>
<a>Education</a>
<a>Experience</a>
<a>Projects</a>
<a>About Me</a>
</div> */}
