import React, { useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../JS/Actions/user';

const Login = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null); // Add state for error handling
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.userReducer.isAuth);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const handleUser = async (e) => {
    e.preventDefault();
    try {
      await dispatch(login(user));
      if (isAuth) {
        navigate('/');
      }
    } catch (err) {
      setError(err.response?.data?.errors[0].msg || 'An error occurred.');
    }
  }

  return (
    <div className='loogin'>
      <h1>Login User</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} />
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Enter password" name="password" onChange={handleChange} />
      <Button className='btn-login' variant="primary" type="submit" onClick={handleUser}>Login</Button>
    </div>
  );
}

export default Login;













