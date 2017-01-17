'use strict'

import React, { Component, PropTypes } from 'react'
import 'jquery'
// import 'bootstrap-loader'

import Header from '../components/common/Header.jsx'
import Footer from '../components/common/Footer.jsx'
import '../styles/styles.scss'

// if(process.env.WEBPACK) require('bootstrap/dist/css/bootstrap.css')

class App extends Component {
  render() {
    return (
      <div>
        <Header />
          <div className="main">
            {this.props.children}
          </div>
        <Footer/>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object
}

export default App
