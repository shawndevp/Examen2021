import React from "react";
import Footer from "./Footer";

function Prices() {
  const imgOpen =
    "https://images.unsplash.com/photo-1508962914676-134849a727f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";

  const imgPrice =
    "https://images.unsplash.com/photo-1534951009808-766178b47a4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";

  const imgInfo =
    "https://images.unsplash.com/photo-1501618669935-18b6ecb13d6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1449&q=80";

  // set constants for images to put in src

  const css = `
    html {
        background-color: #c2c2a3
    }

    .App {
        background-color: #c2c2a3
    }

    `;

  // quick css fix with bg-color for just the "prices.js" page.

  return (
    <>
      <style>{css}</style>
      <div className="card-deck" style={{ marginTop: "250px" }}>
        <div className="card">
          <img className="card-img-top" src={imgOpen} alt="Öppetider" />
          <div className="card-body">
            <h5 className="card-title">Öppetider 🚪</h5>
            <p className="card-text">06:00-23:00 alla dagar</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Senast uppdaterad 2021-12-01</small>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src={imgPrice} alt="Pris bild" />
          <div className="card-body">
            <h5 className="card-title">Priser 💰</h5>
            <p className="card-text">
              Varje bokad bana är på 1 timme lång. <br /> 06:00-22:00 → 350kr/h{" "}
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Senast uppdaterad 2021-12-01</small>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src={imgInfo} alt="Information" />
          <div className="card-body">
            <h5 className="card-title">Övrigt ℹ️</h5>
            <p className="card-text">
              Racket och boll finns att låna kostnadsfritt tills vidare. Ljuset
              på banan tänds med automatik på din bokade tid. <br /> Betalningen
              sker vid ingång till reception. Så kom i god tid innan din bokade
              tid.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Senast uppdaterad 2021-12-01</small>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Prices;
