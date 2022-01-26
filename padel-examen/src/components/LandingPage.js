import React, { useState } from "react";
import style from "./style.css";
import { Link } from "react-router-dom";
import Google from "../components/Global/Google";
import Footer from "./Global/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function LandingPage() {
  const [token] = useState(localStorage.getItem("jwt"));

  return (
    <>
      <div className="runningVid">
        <div className="overlay"></div>

        <video
          playsinline="playsinline"
          autoplay="autoplay"
          muted="muted"
          loop="loop"
        >
          <source
            src="https://media.istockphoto.com/videos/paddle-tennis-balls-in-court-sport-image-padel-class-video-id1276391971"
            type="video/mp4"
          />
        </video>

        <div className="container h-100">
          <div className="d-flex h-100 text-center align-items-center">
            <div className="w-100 text-white">
              <h1 className="display-3">
                Klara... Färdiga
                <br />
                Padel
              </h1>

              {token ? (
                <Link to="/Boka" target="_blank" role="button">
                  <button type="button" class="btn btn-success btn-lg">
                    Boka Padel Tid <i class="bi-calendar-date"></i>
                  </button>
                </Link>
              ) : (
                <Link to="/Registrera" target="_blank" role="button">
                  <button type="button" class="btn btn-success btn-lg">
                    Boka Padel Tid <i class="bi-calendar-date"></i>
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <section id="process" className="process">
        <div className="container-fluid container-fluid-max">
          <div className="row text-center py-5">
            <div className="col-12 pb-4">
              <h2 className="text-success">Hur det fungerar</h2>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <span className="iconHur bi bi-person-badge"></span>
              <h3 className="mt-3 text-success h4">Skapa ett konto</h3>
              <p>
                Genom att skapa ett konto kan du enkelt hålla koll på dina
                bokningar.
              </p>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <span className="iconHur bi bi-eyeglasses"></span>
              <h3 className="mt-3 text-success h4">Titta runt</h3>
              <p>
                Efter ett skapat konto kan du se tillgänliga padel tider och
                mycket mer!
              </p>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <span className="iconHur bi bi-calendar4-week"></span>
              <h3 className="mt-3 text-success h4">Boka Padel bana</h3>
              <p>
                Endast personer med ett registrerat konto kan boka en padel bana
                <br /> och se tillgänliga tider
              </p>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <span className="iconHur bi bi-door-open"></span>
              <h3 className="mt-3 text-success h4">
                Anländ till din bokade bana
              </h3>
              <p>
                När bokningen är genomförd så kan du enkelt komma till vår arena{" "}
                <br /> och börja spela padel på bokad padel bana!{" "}
              </p>
            </div>
            <div className="col-12 pt-3">
              {token ? (
                <Link
                  to="/Profil"
                  className="btn bg-secondary text-white"
                  role="button"
                >
                  Till ditt konto →
                </Link>
              ) : (
                <Link
                  to="/Registrera"
                  className="btn bg-secondary text-white"
                  target="_blank"
                  role="button"
                >
                  Logga in / Registrera →
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
      <Google />
      <Footer />
      {/* Display Google & Footer in landingPage.*/}
    </>
  );
}

export default LandingPage;
