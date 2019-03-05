import React, { Component } from 'react'
import { Navbar, Main, Footer } from './components/index'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className='app'>
        <Navbar />
        <Main />
        <Footer />
      </div>
    )
  }
}
