import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
// import AdminDashboard from "./Pages/AdminDashboard";
// import AdvertisementDetail from "./Pages/AdvertisementDetail";
// import AdvertisementListing from "./Pages/AdvertisementListing";
import Login from "./Pages/Login";
import Register from "./Pages/Register"
import UserProfile from "./Pages/UserProfile";
import Error from "./Pages/Error";
// import NavBar from './Components/Navvbbar';

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <h1>SELL & BUY APP</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/adminDashboard' element={<AdminDashboard />} />
        <Route path='/advertisementDetail/:id' element={<AdvertisementDetail />} />
        <Route path='/advertisementListing' element={<AdvertisementListing />} /> */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/userprofile' element={<UserProfile />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;


