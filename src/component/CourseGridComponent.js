import React from "react";
import CourseGridCardContainer from "../containers/CourseGridCardContainer";


const CourseGridComponent = ({courses, deleteCourse, setSet}) => {
    return (
        <div className={"container"}>

            <div className={"row row-cols-1"}>
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
                <button type="button" className="float-right btn btn-light my-2"
                        onClick={() => setSet({layout: "table"})}>
                    <i className="fas fa-table mx-1"/>
                    Table view
                </button>
            </div>


        </div>
    );
};

export default CourseGridComponent;
