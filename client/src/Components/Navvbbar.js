import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../JS/actions/user';


const NavBar = () => {
  const isAuth = useSelector(state => state.userReducer.isAuth);
  const dispatch = useDispatch();

  return (
    <header>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">SELL&BUY</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {isAuth && <Nav.Link href="/profile">Profile</Nav.Link>}
            {isAuth && <Nav.Link href="/add">Add Post</Nav.Link>}
          </Nav>
          <div className="login">
            {isAuth ? (
              <button className="logout" onClick={() => dispatch(logout())}>
                Logout
              </button>
            ) : (
              <>
                <Link to="/login">
                  <button>Login</button>
                </Link>
                <Link to="/register">
                  <button>Register</button>
                </Link>
              </>
            )}
          </div>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavBar;
