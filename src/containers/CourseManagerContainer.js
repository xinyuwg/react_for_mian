import React from "react";
import NavBarContainer from "./NavBarContainer";
import {deleteCourse, findAllCourses} from "../services/CourseService";
import CourseTableComponent from "../component/CourseTableComponent";
import CourseGridComponent from "../component/CourseGridComponent";
import {BrowserRouter as Router, Route} from "react-router-dom";


class CourseManagerContainer extends React.Component {
    state = {
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

    courseTableView = () => {
        return (
            <div>
                <NavBarContainer
                    setSet={this.setSet.bind(this)}
                    newCourseTitle={this.state.newCourseTitle}
                    courses={this.state.courses}/>

                <CourseTableComponent
                    courses={this.state.courses}
                    deleteCourse={this.deleteCourse}
                    setSet={this.setSet.bind(this)}/>
            </div>
        )
    };

    courseGridView = () => {
        return (
            <div>
                <NavBarContainer
                    setSet={this.setSet.bind(this)}
                    newCourseTitle={this.state.newCourseTitle}
                    courses={this.state.courses}/>

                <CourseGridComponent
                    courses={this.state.courses}
                    deleteCourse={this.deleteCourse}
                    setSet={this.setSet.bind(this)}/>
            </div>
        )
    };

    render() {
        return (
            <Router>
                <Route path={"/"}
                       exact={true}
                       render = {()=>this.courseTableView()}/>

                <Route path={"/table"}
                       exact={true}
                       render = {()=>this.courseTableView()}/>

                <Route path={"/grid"}
                       exact={true}
                       render = {()=>this.courseGridView()}/>
            </Router>
        );
    }
}


export default CourseManagerContainer;