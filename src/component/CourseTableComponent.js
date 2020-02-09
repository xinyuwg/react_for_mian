import React from "react";
import CourseTableRowContainer from "../containers/CourseTableRowContainer";
import {Link} from "react-router-dom";

const CourseTableComponent = ({courses, deleteCourse, setSet}) => {
    return (
        <div className={"container"}>
            <table className={"table table-light table-striped"}>
                <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col" className="d-none d-md-table-cell ">Owned by</th>
                    <th scope="col" className=" d-none d-md-table-cell">Last Modified</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {courses.map(function (course) {
                    return <CourseTableRowContainer course={course} key={course._id} deleteCourse={deleteCourse}
                                                    setSet={setSet}/>
                })}
                </tbody>


            </table>
            <div>
                <Link to={"/grid"}>
                    <button type="button" className="float-right btn btn-light">
                        <i className="fas fa-th mx-1"/>
                        Grid view
                    </button>
                </Link>
            </div>
        </div>
    );

};

export default CourseTableComponent;
