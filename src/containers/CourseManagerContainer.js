import React from "react";
import NavBarContainer from "./NavBarContainer";
import {deleteCourse, findAllCourses} from "../services/CourseService";
import CourseTableComponent from "../component/CourseTableComponent";


class CourseManagerContainer extends React.Component {
    state = {
        layout: "table",
        editingCourse: false,
        courses: [],
        newCourseTitle: ""
    };

    componentDidMount = async () => {
        const courseFromService = await findAllCourses();
        this.setState({
            courses: courseFromService
        });
    };

    deleteCourse = async (courseId) => {
        await deleteCourse(courseId);
        const courseFromService = await findAllCourses();
        this.setState({
            courses: courseFromService
        });
    };

    setSet(obj) {
        this.setState(obj);
    }

    render() {
        return (
            <div>
                <NavBarContainer
                    setSet={this.setSet.bind(this)}
                    newCourseTitle={this.state.newCourseTitle}
                    courses={this.state.courses}/>
                {this.state.layout === "table" && <CourseTableComponent
                    courses={this.state.courses}
                    deleteCourse={this.deleteCourse}
                    setSet={this.setSet.bind(this)}/>}
            </div>
        );
    }
}


export default CourseManagerContainer;