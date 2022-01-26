import React, { useState, useEffect } from "react";
import axios from "axios";
import server from "../Global/Server";
import Profile from "../Users/Profile";

function ProfileInfo() {
  const userId = localStorage.getItem("user_id");

  //Get user and connect server conn

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

  if (!loading) {
    console.log(userInfo);
  }
  return (
    <>
      {!loading ? (
        <Profile
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
        />
      ) : (
        <> </>
      )}
    </>
  );
  // Mapp through props (child) we want to send to profile.js
}

export default ProfileInfo;
