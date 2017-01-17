import React from 'react'
import { Link, IndexLink } from 'react-router'

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-toggleable-md fixed-top">
        <button className="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link to="/" className="navbar-brand">
          <img src="/images/logo.png" />
        </Link>
        <div className="navbar-collapse collapse" id="navbarsExampleDefault" aria-expanded="false">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <IndexLink to="/" activeClassName="active" className="nav-link">Home</IndexLink>
            </li>
            <li className="nav-item">
              <Link to="/search" activeClassName="active" className="nav-link">Search</Link>
            </li>
            <li className="nav-item">
              <Link to="/cms" activeClassName="active" className="nav-link">Cms</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
