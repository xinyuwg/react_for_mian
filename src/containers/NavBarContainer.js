import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import {createCourse, findAllCourses} from "../services/CourseService";

class NavBarContainer extends React.Component {


    addNewCourse = async () => {
        const newCourse = {title: this.props.newCourseTitle};
        await createCourse(newCourse);
        this.props.setSet({
            courses: await findAllCourses(),
            newCourseTitle: ""

        })

    };


    render() {
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
                                <input type="text" placeholder="New course name"
                                       value={this.props.newCourseTitle}
                                       onChange={event => {
                                           this.props.setSet({newCourseTitle: event.target.value})

                                       }}
                                       className="mr-sm-2 form-control"/>
                            </Form>
                            <button className="btn btn-outline-success mx-2 my-auto"
                                    onClick={event => this.addNewCourse()}>
                                Add
                            </button>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
}

export default NavBarContainer