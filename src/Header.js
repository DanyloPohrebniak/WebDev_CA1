import { React, useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


function Header({ setSelectedCategory, cartItems, searchItem }) {
    const [showSignUp, setShowSignUp] = useState(false);

    const handleSignUpOpen = () => setShowSignUp(true);
    const handleSignUpClose = () => setShowSignUp(false);
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
                    <Nav.Link href="http://localhost:3000/">Home</Nav.Link>

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

                </Navbar.Collapse>
                
                <Button
                    variant="secondary"
                    id="login"
                    style={{ marginLeft: '10px'}}
                    as={Link} to="/sign-up"
                >
                    Sign Up
                </Button>
                {/* <FontAwesomeIcon icon={faUser} style={{color: "#000000",}} /> */}
            </Container>
            </Navbar>            
        </>
    );
}

export default Header;