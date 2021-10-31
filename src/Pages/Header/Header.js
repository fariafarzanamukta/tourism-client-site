import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand as={HashLink} to="/home#home">

                        Al-Fath <i className="fas fa-plane-departure"></i> Tourism

                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/packages">Packages</Nav.Link>
                        <Nav.Link as={HashLink} to="/events">Events</Nav.Link>
                        <Nav.Link as={HashLink} to="/about">About</Nav.Link>
                        <Nav.Link as={HashLink} to="/contact">Contact</Nav.Link>
                        <Nav.Link as={HashLink} to="/addPackages">Add Package</Nav.Link>
                        <Nav.Link as={HashLink} to="/myOrder">My Order</Nav.Link>

                        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">LogIn</Nav.Link>}
                        <Navbar.Text className="mx-2">
                            <strong> User:</strong> <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;