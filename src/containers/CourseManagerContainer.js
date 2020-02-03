import React from "react";
import NavBarComponent from "../component/NavBarComponent";
import {deleteCourse, findAllCourses} from "../services/CourseService";
import CourseTableComponent from "../component/CourseTableComponent";


class CourseManagerContainer extends React.Component {
    state = {
        layout: "table",
        editingCourse: false,
        newCourseTitle: "",
        courses: []
    };

    componentDidMount = async () => {
        const courseFromService = await findAllCourses();
        this.setState({
            courses: courseFromService
        });
    };

    deleteCourse = async(courseId)=>{
        await deleteCourse(courseId);
        const courseFromService = await findAllCourses();
        this.setState({
            courses:courseFromService
        });
    };

    render() {
        return (
            <div>
                <NavBarComponent/>
                <CourseTableComponent courses={this.state.courses} deleteCourse={this.deleteCourse} />
            </div>
        );
    }
}


export default CourseManagerContainer;