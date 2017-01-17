'use strict'

import React, { Component } from 'react'
import { Button } from 'reactstrap'


class CmsPage extends Component {
  render() {
    return (
      <div className="cms">
        <div className="container">
          <div className="row">
            <div className="jumbotron">
              <div className="container-fluid">
                <h1>Hi there I am the cms page</h1>
                <Button outline color="primary">primary</Button>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CmsPage
