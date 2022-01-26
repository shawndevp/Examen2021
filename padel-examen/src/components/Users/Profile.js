import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import server from "../Global/Server";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ChangeImg from "./ChangeImg";
import Footer from "../Global/Footer";

function Profile({
  username,
  email,
  firstname,
  lastname,
  adress,
  country,
  city,
  zip,
  created,
  profilepicture,
}) {
  // Get props from ProfileInfo.js
  const [img, setImg] = useState(
    "https://cdn4.iconfinder.com/data/icons/unisex-avatar/1000/safety_vest_unisex_avatar-512.png"
  );

  // Preset img for every new user

  useEffect(() => {
    if (profilepicture) {
      const profilePicImg = profilepicture.formats.small.url;
      setImg(server + profilePicImg);
    }
  }, []);

  // const qs = require('qs');
  // const query = qs.stringify({
  //     filters:{
  //         user:{
  //             id: {
  //               $eq:userId
  //             }

  //         }
  //     },
  //     pagination: {
  //         page:1,
  //         pageSize:5
  //     },
  //     fields: ['id']
  // }, {
  //   encodeValuesOnly: true,
  // });

  //!!IMPORTANT. populate & query not working to find "profilepicture" cant display the new users image thats putting in to DB. I have done this in Bookings.js which works but for some reason it does not work here in profile where i want to specify and get "profilepicture" I can altough save the image that has been uploaded but not display Strapi V4 have no docs about this issue!!

  const userId = localStorage.getItem("user_id");
  const splitCreated = created.split("T");
  const [token] = useState(localStorage.getItem("jwt"));
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);

  // create constants for localstorage, split, navigation and toggle modal when deleting user.

  const useGetProfileInfo = () => {
    const [userInfo, setUserInfo] = useState([]);
    const [loading, setLoading] = useState(true);

    const getProfileInfo = async () => {
      try {
        const response = await axios.get(`${server}/api/Users/${userId}`);
        setUserInfo(response.data);
      } catch (err) {
        console.log(err);
      }

      setLoading(false);
    };

    useEffect(() => {
      getProfileInfo();
    }, []);

    return {
      userInfo,
      loading,
    };
  };

  // arrow function with axios req to get the user that is registered

  const { userInfo, loading } = useGetProfileInfo();

  let editValues = {
    username: username,
    email: email,
    firstname: firstname,
    lastname: lastname,
    adress: adress,
    country: country,
    city: city,
    zip: zip,
    created: created,
  };

  // initial values that can be edited in profile

  const [editUserValue, setEditValue] = useState(editValues);

  function editUser(e) {
    e.preventDefault();

    const editUserValues = async () => {
      await axios
        .put(`${server}/api/Users/${userId}`, {
          Firstname: editUserValue.firstname,
          Lastname: editUserValue.lastname,
          Adress: editUserValue.adress,
          Country: editUserValue.country,
          City: editUserValue.city,
          Zip: editUserValue.zip,
          email: editUserValue.email,
        })
        .then(window.location.reload());
    };
    editUserValues();
  }
  // Function to change values and directly changes and sends in to DB/Strapi
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  // Function to automaticly capitalize the first letter thats being edited in the input.

  function onChangeUser(e) {
    setEditValue({
      ...editUserValue,
      [e.target.name]: capitalizeFirstLetter(e.target.value),
    });
  }

  // Function to mark the correct values so that it aggres with whats been written in.

  function deleteUser(e) {
    e.preventDefault();
    const deletePerson = async () => {
      const response = await axios
        .delete(`${server}/api/Users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(localStorage.clear(), navigate("/"), window.location.reload());
      console.log(response);
    };
    deletePerson();
  }

  // Delete user function -> clear localstorage -> send user to the login/signup page.

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        backdrop="static"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Du är påväg att radera ditt konto
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>Är du helt säker på att du vill radera ditt konto?</strong>
            <br />
            Detta kommer resultera i att ditt konto försvinner helt från
            <br />
            vår databas och du kommer inte att kunna återställa detta konto.
            <br />
            <br />∼ <i>Nacka PDL</i>
          </p>
        </Modal.Body>
        <Modal.Footer
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            onClick={props.onHide}
            className="btn btn-secondary"
            type="submit"
          >
            <i className="bi bi-x"></i>
            <span> Tillbaka</span>
          </button>
          <button className="btn btn-outline-danger" onClick={deleteUser}>
            <i className="bi bi-person-x-fill fa-lg"></i>
            <span> Radera</span>
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
  // Modal function when clickling "Radera konto" to toggle. Done with react-bootstrap/modal.

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
        crossorigin="anonymous"
      />

      <div className="profile-container pt-5" style={{ backgroundColor: "" }}>
        <div className="row justify-content-center pt-5">
          <div className="col-12 col-lg-10 col-xl-8 mx-auto">
            <h2 className="h3 mb-4 page-title">Inställningar</h2>
            {/* <p>{!loading?userInfo.Firstname:<></>}</p> */}
            <div className="my-4">
              <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
                <li className="nav-item">
                  <Link
                    to="/Profil"
                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="false"
                  >
                    Profil
                  </Link>
                </li>
                <li className="nav-item pl-2">
                  <Link
                    to="/Bokningar"
                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="false"
                  >
                    Bokningar
                  </Link>
                </li>
              </ul>
              <form>
                <div className="row mt-5 align-items-center">
                  <div className="col-md-3 text-center mb-5">
                    <div className="avatar avatar-xl">
                      <img
                        src={img}
                        alt="..."
                        className="avatar-img rounded-circle"
                      />
                      <br />
                      <ChangeImg />
                    </div>
                  </div>
                  <div className="col">
                    <div className="">
                      <div className="col-md-7">
                        <h4 className="mb-1">
                          {firstname}
                          <span className="p-1"></span>
                          {lastname}
                        </h4>
                        <p className="medium mb-3">
                          <span className="badge badge-dark">
                            Användarnamn: {editUserValue.username}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-md-7">
                        <p className="text-muted">
                          NackaPDL respekterar alla användares och
                          upphovsrättsinnehavares rättigheter. Följaktligen gör
                          all information som visas på denna webbplats, med
                          användarens eller upphovsrättsinnehavarens samtycke.
                        </p>
                      </div>
                      <div className="col">
                        <p className="small mb-0 text-muted">Konto skapat:</p>
                        <p className="small mb-0 text-muted">
                          {splitCreated[0]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="firstname">Förnamn</label>
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      className="form-control"
                      placeholder="Förnamn"
                      onChange={onChangeUser}
                      value={editUserValue.firstname}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="lastname">Efternamn</label>
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      className="form-control"
                      placeholder="Efternamn"
                      onChange={onChangeUser}
                      value={editUserValue.lastname}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="adress">Adress</label>
                    <input
                      type="text"
                      name="adress"
                      id="adress"
                      className="form-control"
                      placeholder="Sveavägen 120"
                      onChange={onChangeUser}
                      value={editUserValue.adress}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="country">Land</label>
                    <select
                      id="country"
                      name="country"
                      className="form-control"
                      onChange={onChangeUser}
                      value={editUserValue.country}
                    >
                      <option selected="">Välj...</option>
                      <option>Sverige</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputState5">Stad</label>
                    <select
                      id="inputState5"
                      name="city"
                      className="form-control"
                      onChange={onChangeUser}
                      value={editUserValue.city}
                    >
                      <option selected="">Välj...</option>
                      <option>Stockholm</option>
                      <option>Göteborg</option>
                      <option>Malmö</option>
                      <option>Uppsala</option>
                      <option>Linköping</option>
                      <option>Örebro</option>
                      <option>Västerås</option>
                      <option>Norrköping</option>
                      <option>Helsingborg</option>
                      <option>Jönköping</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label for="inputZip5">Postnr</label>
                    <input
                      type="text"
                      name="zip"
                      pattern="/d*"
                      maxlength="5"
                      className="form-control"
                      id="inputZip5"
                      placeholder="123 45"
                      onChange={onChangeUser}
                      value={editUserValue.zip}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label for="inputEmail4">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="din@Email.se"
                    onChange={onChangeUser}
                    value={editUserValue.email}
                  />
                </div>
                <hr className="my-4" />
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={editUser}
                >
                  Spara inställningar
                </button>
                <span className="pl-3"></span>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => setModalShow(true)}
                >
                  <i className="bi bi-person-x-fill fa-lg"></i>
                  <span> Radera konto</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Footer />
    </>
  );
}

export default Profile;
