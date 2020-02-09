import React from "react";
import {Navbar} from "rsuite";
import {findCourseById} from "../../services/CourseService";

class CourseEditorNavBar extends React.Component {
    state = {};


    componentDidMount = async () => {
        this.setState({course: await findCourseById(this.props.courseId)});
    };

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <span className={"navbar-brand logo mx-2"}>{this.state.course && this.state.course.title}</span>
                </Navbar.Header>

            </Navbar>
        )
    }
}


export default CourseEditorNavBar;