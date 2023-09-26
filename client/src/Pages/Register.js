import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../JS/actions/user';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

const Register = () => {
const [newUser, setNewUser] = useState({})

  const dispatch = useDispatch();
  //  const error = useSelector((state) => state.user.error);
  // const history = useHistory();

  const handleChange = (e) => {
    setNewUser({...newUser, [e.target.name] : e.target.value})
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // const newUser = { username, email, password, phone, address };
    dispatch(register(newUser));
    // history.push('/profile'); // Navigate to the profile page after successful registration
  };

  return (
    <div>
      <h1>Register</h1>
      {/* {error && <div>{error}</div>} */}
      <form onSubmit={handleRegister}>
        <input type="text" name="name"  onChange={handleChange} placeholder="Username" />
        <input type="email" name="email"  onChange={handleChange} placeholder="Email" />
        <input type="password" name="password"  onChange={handleChange} placeholder="Password" />
        <input type="text" name="phone"  onChange={handleChange} placeholder="Phone" />
        <input type="text" name="address"  onChange={handleChange} placeholder="Address" />
        <Link to='/userprofile'><button type="submit" onClick={handleRegister} >Register</button></Link> 
      </form>
    </div>
  );
};

export default Register;
