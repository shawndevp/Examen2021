// Importing all diff components that have their own page or that are global.

import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Header';
import LandingPage from '../LandingPage';
import Register from '../Users/Register';
import Profile from '../Users/Profile';
import ProfileInfo from '../Users/ProfileInfo';



function AppRoute() {
    return (
       <>
       <BrowserRouter>
       <Header/>
       <Routes>

       <Route exact path="/" element={<LandingPage />} />
       <Route exact path="Registrera" element={<Register />} />
       <Route exact path="Profil" element={<ProfileInfo />} />
       </Routes>

       </BrowserRouter>
       </>
    )
}

export default AppRoute
