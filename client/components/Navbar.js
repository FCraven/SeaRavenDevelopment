import React, { Component } from 'react'

export default class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
      <header>SeaRaven Development</header>
      <h1> tomorrow begin crushing it</h1>
      <h1>Navbar</h1>
      <a>Certifications</a>
      <a>Education</a>
      <a>Experience</a>
      <a>Projects</a>
      <a>About Me</a>
      </div>
    )
  }
}
