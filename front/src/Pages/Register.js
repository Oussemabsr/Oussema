import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../JS/Actions/user'


const Register = () => {
    const [newUser, setNewUser] = useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleChange = (e) => {
        setNewUser({...newUser, [e.target.name]: e.target.value})
    }

    const handleUser = (e) => {
        e.preventDefault();
        dispatch(register(newUser))
        navigate('/')
    }

    return (
        <div className='register'>
            <h1>Register User</h1>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" name="name" onChange={handleChange}  />
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange}  />
            <Form.Label>Password</Form.Label>
            <Form.Control type="text" placeholder="Enter password" name="password" onChange={handleChange}  />
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" placeholder="Enter phone" name="phone" onChange={handleChange} />
            <Link to='/profile'><Button className='btn-register' variant="primary" type="submit" onClick={handleUser} >Register</Button></Link>
        </div>
    )
}

export default Register