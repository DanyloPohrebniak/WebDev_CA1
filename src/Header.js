import { React, useState, useContext } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


import { UserContext } from '../src/data/userData.jsx'


function Header({ setSelectedCategory, cartItems, searchItem }) {
    const { user, setUser } = useContext(UserContext);

    const navigate = useNavigate();

    // handles log out button submition
    const handleLogOut = () => {
        setUser(null);
    };

    return(
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">Козачка Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>

                    <NavDropdown title="Categories" id="navbarScrollingDropdown">
                    <NavDropdown.Item onClick={() => setSelectedCategory("All")}>
                        All Products
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={() => setSelectedCategory("Plants")}>
                        Plants
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => setSelectedCategory("Tools")}>
                        Tools
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => setSelectedCategory("Garden Care")}>
                        Garden Care
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>

                <Button 
                    id="cart" 
                    style={{ marginRight: '10px', backgroundColor: '#6c757d', borderColor: '#6c757d' }} 
                    as={Link} to="/cart">

                    <FontAwesomeIcon icon={faCartShopping} style={{color: "#000000",}} />
                    <span>({cartItems.length})</span>
                </Button>
                
                <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={(e) => searchItem(e.target.value)}
                    />
                    <Button variant="success">Search</Button>
                </Form>

                

                {!user ? (
                // if user doesn't registered, shows button sign up
                <Button
                    variant="secondary"
                    id="login"
                    style={{ marginLeft: "10px" }}
                    as={Link}
                    to="/sign-up"
                >
                    Sign Up
                </Button>
                ) : (
                // if user registered, whows its icon with hover window
                <Dropdown align="end" className="ms-3">
                    <Dropdown.Toggle
                        variant="light"
                        id="dropdown-user"
                        className="border-0"
                    >
                        <FontAwesomeIcon icon={faUser} size="lg" color="#000000" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="shadow-sm">
                        <Dropdown.Header>
                            <strong>Username: {user.name}</strong><br />
                            <small className="text-muted">Number: {user.number}</small>
                        </Dropdown.Header>

                        <Dropdown.Divider />

                        <Dropdown.Item as={Button} onClick={handleLogOut}>
                        Log Out
                        </Dropdown.Item>
                    </Dropdown.Menu>
                    
                </Dropdown>
                )}
                </Navbar.Collapse>
                </Container>
            </Navbar>            
        </>
    );
}

export default Header;