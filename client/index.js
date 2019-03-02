import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/styles.css'
import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Main from './components/Main'
import Footer from './components/Footer'



ReactDOM.render(
  <Provider store={store}>
    <Main />
    <Footer />
  </Provider>
  ,
  document.getElementById('app')
)

