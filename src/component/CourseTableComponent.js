import React from "react";
import CourseTableRowContainer from "../containers/CourseTableRowContainer";

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
                    return <CourseTableRowContainer course={course} key={course._id} deleteCourse={deleteCourse} setSet={setSet}/>
                })}
                </tbody>


            </table>
            <div>
                <button type="button" className="float-right btn btn-light"
                        onClick={() => setSet({layout: "grid"})}>
                    <i className="fas fa-th mx-1"/>
                    Grid view
                </button>
            </div>
        </div>
    );

};

export default CourseTableComponent;
