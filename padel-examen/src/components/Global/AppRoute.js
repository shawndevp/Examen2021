// Importing all diff components that have their own page or that are global.

import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Header";
import LandingPage from "../LandingPage";
import Register from "../Users/Register";
import ProfileInfo from "../Users/ProfileInfo";
import Book from "../Bookings/Book";
import BookingsInfo from "../Users/BookingsInfo";
import Prices from "../Global/Prices";
import Game from "./Game";

//routing all the imported components and also external page links
function AppRoute() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/Priser" element={<Prices />} />
          <Route exact path="/Spelet" element={<Game />} />
          <Route exact path="Registrera" element={<Register />} />
          <Route exact path="Profil" element={<ProfileInfo />} />
          <Route exact path="Bokningar" element={<BookingsInfo />} />
          <Route exact path="Boka" element={<Book />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem", marginTop: "250px" }}>
                <section className="page_404">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12 ">
                        <div className="col-sm-10 col-sm-offset-1  text-center">
                          <div className="four_zero_four_bg">
                            <h1 className="text-center">404</h1>
                          </div>

                          <div className="contant_box_404">
                            <h3 className="h2">
                              Ser ut som att du har hamnat lite fel
                            </h3>

                            <p>sidan du leter efter finns inte!</p>

                            <Link to="/" className="link_404">
                              Hem
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoute;
