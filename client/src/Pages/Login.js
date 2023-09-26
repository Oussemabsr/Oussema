import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../JS/actions/user';
import { useHistory } from 'react-router-dom';

const Login = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  // const error = useSelector((state) => state.user.error);
  // const history = useHistory();

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   switch (name) {
  //     case 'email':
  //       setEmail(value);
  //       break;
  //     case 'password':
  //       setPassword(value);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   const user = { email, password };
  //   dispatch(login(user));
  //   history.push('/profile'); // Navigate to the profile page after successful login
  // };

  return (
    <div>
      <h1>Login</h1>
      {/* <form onSubmit={handleLogin}> */}
        {/* <input type="email" name="email" value={email} onChange={handleChange} placeholder="Email" />
        <input type="password" name="password" value={password} onChange={handleChange} placeholder="Password" />
        <button type="submit">Login</button> 
      </form> */}
    </div>
  );
};

export default Login;
