import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import style from "../style.css";
import server from "../Global/Server";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ChangeImg from "./ChangeImg";

function Test() {

    const userId = localStorage.getItem("user_id");

    const [token] = useState(localStorage.getItem("jwt"));
    const navigate = useNavigate();
    const [modalShow, setModalShow] = React.useState(false);


    const qs = require('qs');
    const query = qs.stringify({
        fields: ['Firstname', 'Lastname'],
      }, {
        encodeValuesOnly: true,
      });

    const useGetProfileInfo = () => {
        const [userInfo, setUserInfo] = useState([]);
        const [loading, setLoading] = useState(true);
    
        const getProfileInfo = async () => {
          try {
            const response = await axios.get(`${server}/api/Users?${query}`);
            setUserInfo(response.data);
            console.log(response)
            // const test = await axios.get(`${server}/api/users/${query}&&populate=*`);
            // console.log(test)
            // const imgResp = await axios.get(`${server}/api/upload/files/${}`);
            // console.log(response.data);
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

    return (
        <>

        </>
    )
}

export default Test
