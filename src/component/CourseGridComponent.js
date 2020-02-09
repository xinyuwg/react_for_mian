import React from "react";
import CourseGridCardContainer from "../containers/CourseGridCardContainer";
import {Link} from "react-router-dom";


const CourseGridComponent = ({courses, deleteCourse, setSet}) => {
    return (
        <div className={"container"}>

            <div className={"row"}>
                {/*<div className={"col mb-4"}>*/}
                {courses.map(function (course) {
                    return <CourseGridCardContainer course={course}
                                                    key={course._id}
                                                    deleteCourse={deleteCourse}
                                                    setSet={setSet}/>
                })}
                {/*</div>*/}
            </div>
            <div>
                <Link to={"/table"}>
                    <button type="button" className="float-right btn btn-light my-2">
                        <i className="fas fa-table mx-1"/>
                        Table view
                    </button>
                </Link>
            </div>


        </div>
    );
};

export default CourseGridComponent;
