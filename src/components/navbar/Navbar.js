import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom"
import "./Navbar.css"
import { RxHamburgerMenu } from "react-icons/rx"
import { CgClose } from "react-icons/cg"

const Navbar = () => {

  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      {/* <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">NewsScoop</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>

              <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/">General</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>


            </ul>
          </div>
        </div>
      </nav> */}
      <div className={`news-navbar ${isActive ? 'active' : ''}`}>
        <div className="left-nav" style={{ fontFamily: 'Lobster', fontSize: '40px' }}>
          <Link className="logo-name" to="/">NewsScoop</Link>

        </div>
        <div className="right-nav">
          <ul className="navbar-ul">
            <li className="nav-item"><Link className="nav-link" aria-current="page" to="/" onClick={() => { toggleNavbar() }}>Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/business" onClick={() => { toggleNavbar() }}>Business</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/entertainment" onClick={() => { toggleNavbar() }}>Entertainment</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/" onClick={() => { toggleNavbar() }}>General</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/health" onClick={() => { toggleNavbar() }}>Health</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/science" onClick={() => { toggleNavbar() }}>Science</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/sports" onClick={() => { toggleNavbar() }}>Sports</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/technology" onClick={() => { toggleNavbar() }}>Technology</Link></li>


          </ul>
        </div>

        <div class="mobile-navbar-btn" onClick={() => { toggleNavbar() }}>
          <RxHamburgerMenu name="menu-outline" className="mobile-nav-icon" />
          <CgClose name="close-outline" className="mobile-nav-icon" />
          {/* <ion-icon></ion-icon>
          <ion-icon ></ion-icon> */}
        </div>

      </div>
      {/* <header class="header">
        <img
          src="images/thapa_logo.png"
          alt="thapa technical logo"
          class="logo"
        />

        <nav class="navbar">
          <ul class="navbar-list">
            <li><a class="navbar-link" href="#">Home</a></li>
            <li><a class="navbar-link" href="#">About</a></li>
            <li><a class="navbar-link" href="#">Services</a></li>
            <li><a class="navbar-link" href="#">Gallery</a></li>
            <li>
              <a
                class="navbar-link"
                href="https://www.instagram.com/thapatechnical/"
                target="_blank"
              >Contact</a
              >
            </li>
          </ul>
        </nav>

        <div class="mobile-navbar-btn" onClick={() => { toggleNavbar() }}>
          <ion-icon name="menu-outline" class="mobile-nav-icon"></ion-icon>
          <ion-icon name="close-outline" class="mobile-nav-icon"></ion-icon>
        </div>
      </header> */}

    </div>
  )
}



export default Navbar
