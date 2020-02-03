import React from "react";
import CourseGridCardContainer from "../containers/CourseGridCardContainer";


const CourseGridComponent = ({courses, deleteCourse, setSet}) => {
    return (
        <div className={"container"}>

            <div className={"card-deck my-3"}>
                {courses.map(function (course) {
                    return <CourseGridCardContainer course={course} key={course._id} deleteCourse={deleteCourse}/>
                })}
            </div>
            <div>
                <button type="button" className="float-right btn btn-light"
                        onClick={ () => setSet({layout: "table"})}>
                    <i className="fas fa-table mx-1"/>
                    Table view</button>
            </div>

        </div>
    );
};

export default CourseGridComponent;
