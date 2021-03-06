import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import register from "../register.css";
import server from "../Global/Server";

function Register() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [togglePanel, setTogglePanel] = useState("f-container");
  const [jwt, setJwt] = useState();
  // Set constants for togglepanel in login/register, tokens, error and navigate.

  const css = `
    @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;800&display=swap");

    :root {
      --main-color: #000000;
      --color-nr2: rgb(46, 173, 68);
      --secondary-color: #188114;
      --gradient: linear-gradient(
        135deg,
        var(--main-color),
        var(--secondary-color)
      );
    }
    
    * {
      box-sizing: border-box;
    }
    
    body {
      background: #f6f5f7;
      font-family: "Nunito", sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      margin: 1rem 0;
    }

    a {
      color: #333;
      font-size: 14px;
      text-decoration: none;
      margin: 15px 0;
    }

    button {
      cursor: pointer;
      border-radius: 20px;
      border: 1px solid var(--color-nr2);
      background: var(--color-nr2);
      color: #fff;
      font-size: 12px;
      font-weight: bold;
      padding: 12px 45px;
      letter-spacing: 1px;
      text-transform: uppercase;
      transition: transform 80ms ease-out;
    }
    
    button:hover {
      background: var(--secondary-color);
    }
    
    button:active {
      transform: scale(0.95);
    }
    
    button:focus {
      outline: none;
    }
    
    button.ghost {
      background-color: transparent;
      border-color: #fff;
    }
    
    button.ghost:hover {
      background: #fff;
      color: var(--secondary-color);
    }
    
    `;

  // Custom css just to be displayed at /Registrera for the component.

  function toggleReg() {
    setTogglePanel("right-panel-active f-container");
  }

  function toggleSign() {
    setTogglePanel("f-container");
  }
  // Function to toggle between register and login that changes css.

  const handleSubmitReg = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    axios
      .post("http://localhost:1337/api/auth/local/register", {
        Firstname: data.get("F??rnamn"),
        Lastname: data.get("Efternamn"),
        username: data.get("Anv??ndarnamn"),
        email: data.get("Email"),
        password: data.get("L??senord"),
      })
      .then((resp) => {
        navigate("/Registrera");
        console.log(resp);
      })
      .catch(showError);
    console.log(showError);
  };

  function showError(e) {
    setError(true);
  }

  // Handling registration that posts into DB

  const handleSubmitSign = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    axios
      .post(`${server}/api/auth/local`, {
        identifier: data.get("identifier"),
        password: data.get("L??senord"),
      })
      .then((resp) => {
        localStorage.setItem("firstname", resp.data.user.Firstname);
        localStorage.setItem("jwt", resp.data.jwt);
        localStorage.setItem("user_id", resp.data.user.id);
        localStorage.setItem("username", resp.data.user.username);
        navigate("/");
        window.location.reload();
        console.log(resp);
      })
      .catch(showErrors);
    console.log(showErrors);
  };

  function showErrors(e) {
    setError(true);
  }

  // Handling signIn and setting localstorage for the user into DB and local

  useEffect(() => {
    const JWT = localStorage.getItem("jwt");
    setJwt(JWT);
    console.log(JWT);
  }, []);

  return (
    <>
      <br />
      <br />
      <br />
      <style>{css}</style>
      {/* Getting the css constant*/}

      <div className={togglePanel} id="f-container">
        <div className="form-container sign-up-container">
          <form className="formReg" onSubmit={handleSubmitReg}>
            <h1 className="headingNr1 pt-1">Registrera dig</h1>
            <span className="social-container"></span>
            <span className="spanNr1">Med uppgifter som kr??vs nedan</span>
            <input
              className="inputReg"
              name="F??rnamn"
              type="text"
              placeholder="F??rnamn"
              id="Firstname"
            />
            <input
              className="inputReg"
              name="Efternamn"
              type="text"
              placeholder="Efternamn"
              id="Lastname"
            />
            <input
              className="inputReg"
              name="Anv??ndarnamn"
              type="text"
              placeholder="Anv??ndarnamn"
              id="username"
            />
            <input
              className="inputReg"
              name="Email"
              type="email"
              placeholder="Email"
              id="email"
            />
            <input
              className="inputReg"
              name="L??senord"
              type="password"
              placeholder="L??senord"
              id="password"
            />
            {error ? (
              <p className="text-danger">
                Email eller Anv??ndarnamn <br /> ??r redan taget.
              </p>
            ) : (
              <></>
            )}
            <button className="regSignBTN" type="submit" value="submit">
              Registrera dig
            </button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form className="formReg" onSubmit={handleSubmitSign}>
            <h1 className="headingNr1">Logga In</h1>
            <div className="social-container"></div>
            <span className="spanNr1">
              Med de uppgifter n??r du skapade ditt konto
            </span>
            <input
              className="inputReg"
              name="identifier"
              type="email"
              placeholder="Email"
              id="identifier"
            />
            <input
              className="inputReg"
              name="L??senord"
              type="password"
              placeholder="L??senord"
              id="password"
            />

            {error ? (
              <p className="text-danger">Email eller L??senord ??r inkorrekt.</p>
            ) : (
              <></>
            )}
            <button className="regSignBTN">Logga in</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="headingNr1">V??lkommen tillbaka!</h1>
              <p className="paragraphNr1">
                V??nligen logga in med dina personliga uppgifter
              </p>
              <button className="ghost" id="signIn" onClick={toggleSign}>
                Logga In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="headingNr1">Hej d??r!</h1>
              <p className="paragraphNr1">
                Ange dina personliga uppgifter och b??rja din padel resa med oss
                p?? NackaPDL
              </p>
              <button className="ghost" id="signUp" onClick={toggleReg}>
                Registrera
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
