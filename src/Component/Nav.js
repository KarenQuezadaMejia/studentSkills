import React, { Component } from 'react';
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap'

class HeaderNav extends Component {
    render() {
        return (

            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">

                <Nav.Link eventKey="disabled" disabled>Dashboard</Nav.Link>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Students</Nav.Link>
                    <Nav.Link eventKey="disabled" disabled>Teachers</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar>
        )
    }
}

export default HeaderNav;