import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from "../../travel-img/logo.png";
import { GiHamburgerMenu } from 'react-icons/gi';

const NavBar = () => {
    return (
        <div className="row d-flex bg-light align-items-center py-3 justify-content-between text-center">
            <div className="col-md-4">
                <NavLink to="/">
                    <img className="img-fluid w-25" src={logo} alt="" />
                </NavLink>
            </div>
            <div className="col-md-4">
                <Navbar bg="light" variant="light">
                    <Container>
                        {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">About</Nav.Link>
                            <Nav.Link href="#pricing">Toures</Nav.Link>
                            <Nav.Link href="#pricing">Contact</Nav.Link>
                            <Nav.Link href="#pricing">Login</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>


            </div>
            <div className="col-md-4">
                <GiHamburgerMenu />
            </div>
        </div>
    );
};

export default NavBar;