import React, { useState, useEffect } from "react";
import axios from "axios";
import server from "../Global/Server";
import Bookings from "../Users/Bookings";

function BookingsInfo() {

    const userId = localStorage.getItem("user_id");

    //Get user and connect server conn
  
    const useGetProfileInfo = () => {
      const [userInfo, setUserInfo] = useState([]);
      const [loading, setLoading] = useState(true);
  
      const getProfileInfo = async () => {
        try {
          const response = await axios.get(`${server}/api/Users/${userId}`);
          setUserInfo(response.data);
          console.log(setUserInfo(response.data))
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
  
    
    if(!loading ) {
      console.log(userInfo);
    }
    
    return (
        <>

{!loading?

<Bookings

  username={userInfo.username}
  email={userInfo.email}
  firstname={userInfo.Firstname}
  lastname={userInfo.Lastname}
  adress={userInfo.Adress}
  country={userInfo.Country}
  city={userInfo.City}
  zip={userInfo.Zip}
  created={userInfo.createdAt}
  profilepicture={userInfo.Profilepicture}
  booking={userInfo.Booking}
  
/>

:<> </>}


        </>
    )
    // Mapp through props (child) we want to send to Bookings.js
}

export default BookingsInfo
