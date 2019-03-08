import React, { Component } from 'react'
import Hero from './Hero'
import Stack from './Stack'
import NavFooter from './NavFooter'

export default class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Hero />
        <Stack />
        <NavFooter />
      </div>
        )
      }
    }


    // npmuse connect from react-redux to get slices of state
    // don't forget to map state and map dispatches to new componenets that need it

    //Add Header, Footer and some body components

    //Install Authentication stuff so you can log in and use the app

    // Think about DB schemas and what you'd like to add to theis thing



