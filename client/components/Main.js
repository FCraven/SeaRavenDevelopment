import React, { Component } from 'react'

export default class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div >
      <h1> Hello World. I exist.</h1>
      </div>
    )
  }
}


//use connect from react-redux to get slices of state
// don't forget to map state and map dispatches to new componenets that need it
