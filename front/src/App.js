import React, { useEffect } from 'react';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Admin from './Pages/Admin';
import AnnonceDetail from './Pages/AnnonceDetail';
import Annonces from './Pages/Annonces';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import Error from './Pages/Error';
import AddPost from './Components/AddPost'; 
import { useDispatch } from 'react-redux';
import { current } from './JS/Actions/user';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(current());
    }
  }, [dispatch]);  
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/AnnonceDetail/:id' element={<AnnonceDetail />} />
        <Route path='/annonces' element={<Annonces />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/add' element={<AddPost />} />
        <Route path='/*' element={<Error />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
