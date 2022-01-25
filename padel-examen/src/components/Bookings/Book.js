import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import server from "../Global/Server";
import axios from 'axios';
import "react-calendar/dist/Calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Available from "./Available";

function Book() {
    
  const userId = localStorage.getItem("user_id");

  const useGetAvailable = () => {
    const [bookInfo, setBookInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userInfo, setUserInfo] = useState([]);
    const getDate = async () => {
      try {
        const response = await axios.get(`${server}/api/Availables`);
        // for(let i = 0; i < response.data.length; i++){
        //   setBookInfo({...bookInfo, date: response.data[i]})
        // }
        const resp = await axios.get(`${server}/api/Users/${userId}`)
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

  const { bookInfo, loading, userInfo } = useGetAvailable();

  if(!loading) {
    console.log(userInfo)
  }

  return (
    <>
      <br />
      <br />
      <br />
      <br />

      {!loading  ? <Available hasBooked ={userInfo.hasBooked} dates={bookInfo} /> : <></>}
 
    </>
  );
}

export default Book;
