// Importing all diff components that have their own page or that are global.

import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Header";
import LandingPage from "../LandingPage";
import Register from "../Users/Register";
import ProfileInfo from "../Users/ProfileInfo";
import Test from "../Users/test";
import Book from "../Bookings/Book";
import BookingsInfo from "../Users/BookingsInfo";

function AppRoute() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="Registrera" element={<Register />} />
          <Route exact path="Profil" element={<ProfileInfo />} />
          <Route exact path="Bokningar" element={<BookingsInfo />} />
          <Route exact path="Test" element={<Test />} />
          <Route exact path="Boka" element={<Book />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoute;
