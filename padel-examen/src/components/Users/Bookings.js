import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import server from "../Global/Server";
import ChangeImg from '../Users/ChangeImg';

function Bookings({
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
    booking
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


    const userId = localStorage.getItem("user_id");
  const splitCreated = created.split("T");
  const [token] = useState(localStorage.getItem("jwt"));
  const navigate = useNavigate();

  const qs = require('qs');
  const query = qs.stringify({
      filters:{
          users_permissions_user:{
              id: {
                $eq:userId
              }
              

          }
      },
      pagination: {
          page:1,
          pageSize:5
      },
      fields: ['id']
  }, {
    encodeValuesOnly: true,
  });

  // qs,populate,query for v4 handling of strapi. to filter out and get the specific data from DB.

  const useGetProfileInfo = () => {
    const [userInfo, setUserInfo] = useState([]);
    const [loading, setLoading] = useState(true);

    const getProfileInfo = async () => {
      try {
        const response = await axios.get(`${server}/api/Bookings?${query}&&populate=*`);
        setUserInfo(response.data);
        console.log(response)
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

  const { userInfo, loading } = useGetProfileInfo();


  function deleteBooking(e) {
    e.preventDefault();
    if(!loading) {

    const availableId = userInfo.data[0].attributes.available.data.id
    const bookingUserId = userInfo.data[0].attributes.users_permissions_user.data.id
    const bookingId = userInfo.data[0].id;
    const deleteBookedTime = async () => {
      const response = await axios
        .delete(`${server}/api/Bookings/${bookingId}`, {
       
        })
        await axios.put(`${server}/api/Availables/${availableId}`, {
            'data':{
                'isBooked': false
            }
          });
          await axios.put(`${server}/api/users/${bookingUserId}`, {
                    
            'hasBooked': false
        
      })
        .then( 
            navigate("/"),
            window.location.reload()
        );
      console.log(response);
    };
    deleteBookedTime();
}
  }

  // Delete user function -> clear localstorage -> send user to the login/signup page.
  if(!loading) {
      const getDate = userInfo.data[0].attributes.available.data.attributes.Date.split('T')
      const getSplitZ = getDate[1].split('Z')
      const getSplitZ1 = getDate[0].split('00')
      console.log(getDate)
      console.log(getSplitZ)
      console.log(getSplitZ1)
  }
    return (
        
        <>

<link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
        crossorigin="anonymous"
      />
    {token ? 
      <div className="profile-container pt-5" style={{ backgroundColor: "" }}>
        <div className="row justify-content-center pt-5">
          <div className="col-12 col-lg-10 col-xl-8 mx-auto">
            <h2 className="h3 mb-4 page-title">Dina bokningar</h2>
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
                    <div className="row align-items-center">
                      <div className="col-md-7">
                        <h4 className="mb-1">
                          {firstname}
                          <span className="p-1"></span>
                          {lastname}
                        </h4>
                        <p className="medium mb-3">
                          <span className="badge badge-dark">
                            Användarnamn: {username}
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

                </form>
                <div className="card text-center">
  <div className="card-header">
    Bokning
  </div>
  <div className="card-body">
    <h5 className="card-title">Din bokad tid</h5>
    <p className="card-text">{!loading && userInfo.data[0].attributes.available.data.attributes.Date }</p> 
    <button type="button" className="btn btn-danger" onClick={deleteBooking}>Släpp bokad tid</button>
  </div>
  <div className="card-footer text-muted">
    "tid för bokad tid"
  </div>
</div>
            </div>
          </div>
        </div>
      </div>

    : <></>}
        </>
    )
}

export default Bookings
