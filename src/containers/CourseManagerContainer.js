import React from "react";
import NavBarContainer from "./NavBarContainer";
import {deleteCourse, findAllCourses} from "../services/CourseService";
import CourseTableComponent from "../component/CourseTableComponent";
import CourseGridComponent from "../component/CourseGridComponent";
import CourseEditorComponent from "../component/CourseEditorComponent";


class CourseManagerContainer extends React.Component {
    state = {
        layout: "table",
        editingCourse: false,
        courses: [],
        newCourseTitle: "",
        editedCourseTitle: ""
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

    courseListText = () => {
        return (
            <div>
                <NavBarContainer
                    setSet={this.setSet.bind(this)}
                    newCourseTitle={this.state.newCourseTitle}
                    courses={this.state.courses}/>
                {
                    this.state.layout === "table" && <CourseTableComponent
                        courses={this.state.courses}
                        deleteCourse={this.deleteCourse}
                        setSet={this.setSet.bind(this)}/>}
                {
                    this.state.layout === "grid" && <CourseGridComponent
                        courses={this.state.courses}
                        deleteCourse={this.deleteCourse}
                        setSet={this.setSet.bind(this)}/>}

            </div>
        )
    };


    render() {
        return (
            <>
                {this.state.editingCourse ? <CourseEditorComponent
                    editedCourseTitle={this.state.editedCourseTitle}
                    setSet={this.setSet.bind(this)}/> : this.courseListText()}
            </>
        );
    }
}


export default CourseManagerContainer;