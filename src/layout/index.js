import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Layout extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">VEER CORPORATION<br />VEER SHUTTERING PVT. LTD.</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1}>
                            <Link to="/profile">Company Profile</Link>
                        </NavItem>
                        <NavItem eventKey={2}>
                            <Link to="/products">Products</Link>
                        </NavItem>
                        <NavItem eventKey={3}>
                            <Link to="/gallery">Gallery</Link>
                        </NavItem>
                        <NavItem eventKey={4}>
                            <Link to="/services">Services</Link>
                        </NavItem>
                        <NavItem eventKey={5}>
                            <Link to="/contact">Contact us</Link>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Layout;
