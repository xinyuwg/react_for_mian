import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const NavBarComponent = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <span className="mx-2"><i className="far fa-calendar-check"/></span>
                    Course List</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Form className="inline mx-2 my-2">
                            <FormControl type="text" placeholder="Type to search course" className="mr-sm-2"/>
                        </Form>
                        <Button variant="danger mx-2 my-auto">
                            logout
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
};

export default NavBarComponent