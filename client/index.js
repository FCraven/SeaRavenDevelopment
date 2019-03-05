import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/styles.css'
import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Main from './components/Main'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import App from './App'


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  ,
  document.getElementById('app')
)

