import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Header() {

  const [offset, setOffset] = useState(0);
  const [token] = useState(localStorage.getItem("jwt"));

  let nav = document.querySelector('nav');

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 15) {
      nav.classList.add('bg-success', 'shadow');
    } else {
      nav.classList.remove('bg-success', 'shadow');
    }
  });

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, []);

  function signOut() {
    localStorage.clear();
    Navigate('/');
    window.location.reload();
    
  }

    return (
        <>




    <nav className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
      <div className="container">
        <Link
                to="/"
                className="navbar-brand"
                role="button"
              >
                Nacka PDL
              </Link>
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
              <Link
                to="#"
                className="nav-link text-white"
                role="button"
              >
                Länk1
              </Link>
            </li>
            <li className="nav-item">
            <Link
                to="#"
                className="nav-link text-white"
                role="button"
              >
                Länk2
              </Link>
            </li>
            <li className="nav-item">
            <Link
                to="#"
                className="nav-link text-white"
                role="button"
              >
                Länk3
              </Link>
            </li>
            <li className="nav-item">
              {token?
                <Link
                to="#"
                className="nav-link text-white"
                role="button"
                onClick={signOut}
              >
                Logga ut
              </Link>
              :
            <Link
                to="#"
                className="nav-link text-white"
                role="button"
              >
                Länk4
              </Link>
               }
            </li>
            <li className="nav-item">

              {token ?
              
              <Link
                to="/Profil"
                className="nav-link text-white"
                role="button"
              >
                Konto
              </Link>
              :
              <Link
                to="/Registrera"
                className="nav-link text-white"
                role="button"
              >
                Konto
              </Link>
              } 
            </li>
          </ul>
        </div>
      </div>
    </nav>




        </>
    )
}

export default Header
