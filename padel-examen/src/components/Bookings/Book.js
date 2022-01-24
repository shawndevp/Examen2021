import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import server from "../Global/Server";
import axios from 'axios';
import "react-calendar/dist/Calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Available from "./Available";

function Book() {
    


  const useGetAvailable = () => {
    const [bookInfo, setBookInfo] = useState([]);
    const [loading, setLoading] = useState(true);

    const getDate = async () => {
      try {
        const response = await axios.get(`${server}/api/Availables`);
        // for(let i = 0; i < response.data.length; i++){
        //   setBookInfo({...bookInfo, date: response.data[i]})
        // }

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
    };
  };

  const { bookInfo, loading } = useGetAvailable();

  if(!loading) {
    console.log(bookInfo)
  }

  return (
    <>
      <br />
      <br />
      <br />
      <br />

      {!loading ? <Available dates={bookInfo} /> : <></>}
 
    </>
  );
}

export default Book;
