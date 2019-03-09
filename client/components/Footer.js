import React, { Component } from 'react'
import { NavLink }  from 'react-router-dom'

export default class Footer extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h1>Footer</h1>
        <ul className='footer-list'>
          <li className='footer-navlink'>
            <NavLink to='About Me'>About Me
            </NavLink>

          </li>
        </ul>
      </div>
    )
  }
}
