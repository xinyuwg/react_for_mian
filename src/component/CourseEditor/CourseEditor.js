import React from "react";
import CourseEditorNavBar from "./CourseEditorNavBar";

const CourseEditor = ({history,match}) =>
    <CourseEditorNavBar courseId={match.params.courseId}/>
;

export default CourseEditor;