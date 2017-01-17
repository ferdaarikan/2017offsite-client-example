'use strict';

import React, { Component } from 'react'

class SearchPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchResults: []
    }
  }
  render() {
    return (
      <div className="search container">

        <div className="row">
          <div className="col-md-12">
            <h1 className="align-center">Hi there I am the Search Page</h1>
          </div>
        </div>

        <div className="row">
          <div className="jumbotron col-md-12">
            <form>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for a venue..." aria-describedby="searchInput" />
                <span className="input-group-addon" id="basic-addon2">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </span>
              </div>
            </form>


          </div>
        </div>

        <div className="row">
          <div className="search-results">
            {this.state.searchResults}
          </div>
        </div>
      </div>
    )
  }
}

export default SearchPage
