import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Header() {

  const [offset, setOffset] = useState(0);

  var nav = document.querySelector('nav');

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
      nav.classList.add('bg-dark', 'shadow');
    } else {
      nav.classList.remove('bg-dark', 'shadow');
    }
  });

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, []);

    return (
        <>




    <nav className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
      <div className="container">
        <a className="navbar-brand" href="#">Nacka PDL</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="mx-auto"></div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Länk1</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Länk2</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Länk3</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Länk3</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Konto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>




        </>
    )
}

export default Header
