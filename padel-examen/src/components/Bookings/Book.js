import React, { useState, useEffect } from "react";
import server from "../Global/Server";
import axios from "axios";
import "react-calendar/dist/Calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Available from "./Available";

function Book() {
  // PROP FOR Available.js//

  const userId = localStorage.getItem("user_id");
  //Get localstorage

  const useGetAvailable = () => {
    const [bookInfo, setBookInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userInfo, setUserInfo] = useState([]);
    // Setting states
    const getDate = async () => {
      try {
        const response = await axios.get(`${server}/api/Availables`);
        const resp = await axios.get(`${server}/api/Users/${userId}`);
        setUserInfo(resp.data);
        setBookInfo(response.data);
      } catch (err) {
        console.log(err);
      }

      setLoading(false);
    };

    useEffect(() => {
      getDate();
    }, []);

    return {
      bookInfo,
      loading,
      userInfo,
    };
  };
  // Get dates from Available DB  and pass them into calls with constants that calls to the whole arrow function

  const { bookInfo, loading, userInfo } = useGetAvailable();

  if (!loading) {
    console.log(userInfo);
  }

  // Send the props that i want to use into Available.js
  return (
    <>
      <br />
      <br />
      <br />
      <br />

      {!loading ? (
        <Available hasBooked={userInfo.hasBooked} dates={bookInfo} />
      ) : (
        <></>
      )}
    </>
  );
}

export default Book;
