import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Scrollspy from 'react-scrollspy';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
      <Link className="navbar-brand" to="/">Welcome Inn Fish Bar Ltd.</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">

        <Scrollspy items={ ['home','about','menuSection','deliveroo', 'contact'] } offset={-300} className="navbar-nav" currentClassName="current-nav">
          <li className="nav-link">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link className="nav-link" to="/#about">About</Link>
          </li>
          <li className="nav-link">
            <Link className="nav-link" to="/menu">Menu</Link>
          </li>
          <li className="nav-link">
            <HashLink className="nav-link" to="/#deliveroo">Online Orders</HashLink>
          </li>
          <li className="nav-link">
            <HashLink className="nav-link" to="/#contact">Contact</HashLink>
          </li>
          </Scrollspy>
      </div>
    </nav>
  );
}

export default Nav;
