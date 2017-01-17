'use strict'

import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
console.log(' whats is ', process.env.WEBPACK);
require('./HomePage.scss');

class HomePage extends Component {
  render() {
    return (
      <div className="home">

        <div className="row category-list container-fluid">
          <div className="col">
            <h1 className="text-center">Hi there I am the homepage</h1>
          </div>
        </div>

        <div className="row data-list">
          <div className="container">
            <h4>Data list here</h4>

              <ListGroup>
                <ListGroupItem className="col-md-12">

                    <div className="col-md-2">
                      <img src="/images/venues/pic01.jpg" className="img-thumbnail" />
                    </div>

                    <div className="col-md-5">
                      <span className="venue-info">
                        <span className="venue-title">
                          Cras justo odio
                        </span>
                        <span className="venue-rating">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                        <span className="venue-summary">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae elit lorem
                        </span>
                      </span>
                    </div>

                    <div className="col-md-3">
                      <span className=" venue-address">
                        <span className="town">Aldgate</span>
                        <span className="street">1A New Street</span>
                        <span className="city-postcode">London EC2M 4TP</span>
                        <span className="phone-number">Phone number 020 7929 2207</span>
                      </span>
                    </div>

                </ListGroupItem>

                <ListGroupItem className="col-md-12">
                  <div className="col-md-2">
                    <img src="/images/venues/pic02.jpg" className="img-thumbnail" />
                  </div>

                  <div className="col-md-5">
                    <span className="venue-info">
                      <span className="venue-title">
                        Morbi leo risus
                      </span>
                      <span className="venue-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </span>
                      <span className="venue-summary">
                        Mauris nibh libero, molestie in condimentum a, viverra nec nisl. Curabitur pellentesque nibh lacus, a dapibus neque sollicitudin vel. Quisque aliquam tortor et justo dignissim
                      </span>
                    </span>
                  </div>

                  <div className="col-md-3">
                    <span className=" venue-address">
                      <span className="town">Aldgate</span>
                      <span className="street">1A New Street</span>
                      <span className="city-postcode">London EC2M 4TP</span>
                      <span className="phone-number">Phone number 020 7929 2207</span>
                    </span>
                  </div>
                </ListGroupItem>
                <ListGroupItem>Morbi leo risus</ListGroupItem>
                <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Morbi leo risus</ListGroupItem>
                <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>

          </div>
        </div>
      </div>
    )
  }
}

export default HomePage
