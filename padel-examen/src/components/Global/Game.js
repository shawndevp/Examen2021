import React from "react";
import Footer from "./Footer";

function Game() {
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

      <div class="container" style={{ marginTop: "25%" }}>
        <div class="row">
          <div class="col-sm-6 text-picture__text">
            <h1>
              Spelet. <br />
              <small>Regler och poäng</small>
            </h1>
            <p className="mt-5" style={{ letterSpacing: "2px" }}>
              <strong>Spelets idé!</strong>
              <br />
              <br />I padeltennis spelar man dubbel, det är en del av charmen.
              Normalt så delar de två som spelar ihop på sin halva, den ena
              spelaren tar ansvarar för vänster del, den andre för höger del.
              Egna laget vinner poäng när bollen studsar två gånger på
              motståndarnas sida eller när de slår i nät.
            </p>
            <p className="mt-5" style={{ letterSpacing: "2px" }}>
              <strong>Att serva</strong>
              <br />
              <br />
              Alla servar i padeltennis slås underifrån, eller under midjehöjd.
              Studsen ska vara bakom egen servruta. Serven ska gå diagonalt och
              studsa i motståndarens serveruta. Serven är även giltig om den
              studsar upp i motståndarens glasvägg, men inte när den studsar i
              gallret. Man har två servar, precis som i tennis.
            </p>
            <p className="mt-5" style={{ letterSpacing: "2px" }}>
              <strong>Att använda väggarna</strong>
              <br />
              <br />
              Att använda glasväggarna är en del av spelet. Bollen är
              fortfarande levande om den studsat först i marken och sedan i
              glaset. Man kan även använda sin egen glasvägg för att slå
              tillbaka bollen. Gallret får bollen endast studsa upp på när man
              ska ta emot en boll. Om en boll går direkt i motståndarens galler
              eller glas, så räknas bollen som ute.
            </p>
            <p className="mt-5" style={{ letterSpacing: "2px" }}>
              <strong>Att räkna poäng</strong>
              <br />
              <br />
              Att räkna poäng i padel är precis som tennis. Man spelar bäst av 3
              eller 5 set och i varje set gäller det att vinna 6 game. I ett
              game räknar man: 0, 15, 30, 40 och game. Om ställningen är 40-40
              så måste man vinna med två poäng för att gamet ska avgöras. I ett
              set gäller det att komma först till 6 vunna game. Om ställningen
              däremot blir 5-5 så spelar man till 7 vunna game. Om ställningen
              är 6-6 så spelar man ett avgörande game, kallat tiebreak. Tiebreak
              spelas först till 7 vunna poäng, där man också måste vinna med
              minst två poäng.
            </p>

            <h2 className="mt-5">Lycka till!</h2>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Game;
