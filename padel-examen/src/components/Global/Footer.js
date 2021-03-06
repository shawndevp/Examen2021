import React from "react";
import { Link } from "react-router-dom";

//function to transport the user to the top of the page when the user clickes on a link in the header or footer
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
// Footer that is visibale on almost every page. etc not Register.js
function Footer() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
        integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
        crossorigin="anonymous"
      />
      <footer class="footer-section">
        <div class="container">
          <div class="footer-cta pt-5 pb-5">
            <div class="row">
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="cta-text">
                    <h4>Hitta oss</h4>
                    <span>Forumvägen 14, 131 53 Nacka, Sverige</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="fas fa-phone"></i>
                  <div class="cta-text">
                    <h4>Ring oss</h4>
                    <span>07123-456789</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="far fa-envelope-open"></i>
                  <div class="cta-text">
                    <h4>Maila oss</h4>
                    <span>NackaPDL@info.se</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-content pt-5 pb-5">
            <div class="row">
              <div class="col-xl-4 col-lg-4 mb-50">
                <div class="footer-widget">
                  <div class="footer-logo">
                      <img
                        src="https://stromstadpadel.se/wp-content/uploads/2021/05/Stro%CC%88mstad-Padel-logo.png"
                        class="img-fluid"
                        alt="logo"
                      />
                  </div>
                  <div class="footer-text">
                    <p>
                      Nacka PDL är den ledande koncernen inom padelsporten i
                      hela Nacka län. Vi har funnits i 5 år nu och levererar
                      alltid den bästa upplevelsen för padel.
                    </p>
                  </div>
                  <div class="footer-social-icon">
                    <span>Följ oss</span>
                    <Link to="/" onClick={scrollToTop}>
                      <i class="fab fa-facebook-f facebook-bg"></i>
                    </Link>
                    <Link to="/" onClick={scrollToTop}>
                      <i class="fab fa-twitter twitter-bg"></i>
                    </Link>
                    <Link to="/" onClick={scrollToTop}>
                      <i class="fab fa-instagram google-bg"></i>
                    </Link>
                  </div>
                  {/* React-Router-Dom V6 have no docs on how to redirect to external url so this will be empty for now. Have done this in V5 that is working*/}
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3>Användbara Länkar</h3>
                  </div>
                  <ul>
                    <li>
                      <Link to="/" role="button">
                        Hem
                      </Link>
                    </li>
                    <li>
                      <Link to="/Priser" role="button">
                        Priser
                      </Link>
                    </li>
                    <li>
                      <Link to="/Spelet" role="button">
                        Spelet
                      </Link>
                    </li>
                    <li>
                      <Link to="/Profil" role="button">
                        Konto
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3>Prenumerera</h3>
                  </div>
                  <div class="footer-text mb-25">
                    <p>
                      Missa inte att prenumerera till våra nyheter, vänligen
                      fyll i formuläret nedan.
                    </p>
                  </div>
                  <div class="subscribe-form">
                    <form action="#">
                      <input type="text" placeholder="Email Adress" />
                      <button>
                        <i class="fab fa-telegram-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright-area">
          <div class="container">
            <div class="row">
              <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                <div class="copyright-text">
                  <p>
                    Copyright &copy; 2022, <Link to="/">NackaPDL</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
