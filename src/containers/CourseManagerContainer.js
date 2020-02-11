import React from "react";
import NavBarContainer from "./NavBarContainer";
import {deleteCourse, findAllCourses} from "../services/CourseService";
import CourseTableComponent from "../component/CourseTableComponent";
import CourseGridComponent from "../component/CourseGridComponent";
import {Router, Route,Bro} from "react-router-dom";
import CourseEditor from "../component/CourseEditor/CourseEditor";
import history from "../history";

class CourseManagerContainer extends React.Component {
    constructor() {
        super();
    }
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
            <Router history={history}>
                <Route path={"/"}
                       exact={true}
                       render={() => this.courseTableView()}/>

                <Route path={"/table"}
                       exact={true}
                       render={() => this.courseTableView()}/>

                <Route path={"/grid"}
                       exact={true}
                       render={() => this.courseGridView()}/>
                <Route path={"/course-editor/:courseId"}
                       exact={true}
                       render={(props) => <CourseEditor {...props}/>}
                />
                <Route path={"/course-editor/:courseId/module/:moduleId"}
                       exact={true}
                       render={(props) => <CourseEditor {...props}/>}
                />
                <Route path={"/course-editor/:courseId/module/:moduleId/lesson/:lessonId"}
                       exact={true}
                       render={(props) => <CourseEditor {...props}/>}
                />
            </Router>
        );
    }
}


export default CourseManagerContainer;