import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Nav variant="pills" as="ul">
            <Nav.Item as="li">
                <Nav.Link as={NavLink} activeClassName="active" to="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link as={NavLink} activeClassName="active" to="/popular">Popular</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Navigation