import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import { FaCartPlus } from "react-icons/fa6";


const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand"><img src="/images/DruGo.png" alt="Logo" height={50} /></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link text-primary" aria-current="page" >Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/category" className="nav-link text-primary" aria-current="page" >Categories</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to ="/register" className="nav-link text-primary">Register</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to ="/login" className="nav-link text-primary">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to ="/cart" className="nav-link text-primary"><FaCartPlus size={32}/>(0)</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Header
