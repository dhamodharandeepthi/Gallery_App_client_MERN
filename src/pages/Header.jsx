import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
            <Navbar.Brand as={Link} to="/">
                My Gallery
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/add-image">
                        <Button variant="info" className="mx-2">Add Image</Button>
                    </Nav.Link>
                    <Nav.Link as={Link} to="/add-category">
                        <Button variant="info" className="mx-2">Add Category</Button>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
