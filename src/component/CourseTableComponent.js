import React from "react";
import CourseTableRowContainer from "../containers/CourseTableRowContainer";

const CourseTableComponent = ({courses,deleteCourse}) => {
    return (
        <div className={"container"}>
            <table className={"table table-light table-striped"}>
                <thead>
                <tr>
                    <th>Title</th>
                    <th scope="col" className="d-none d-md-table-cell ">Owned by</th>
                    <th scope="col" className=" d-none d-md-table-cell">Last Modified
                    </th>
                    <th scope="col" className="text-center">Action</th>
                </tr>
                </thead>
                <tbody>
                {courses.map(function(course){
                    return <CourseTableRowContainer course={course} key={course._id} deleteCourse={deleteCourse}/>
                })}
                </tbody>


            </table>

        </div>
    );

};

export default CourseTableComponent;
