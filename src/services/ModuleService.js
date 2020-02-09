import {SERVICE_URL} from "../common/constants";

export const findModuleForCourse = (courseId) =>
    fetch(`${SERVICE_URL}/courses/${courseId}/modules`)
        .then(response => response.json());

export const deleteModule = (moduleId) =>
    fetch(`${SERVICE_URL}/modules/${moduleId}`, {
        method: "DELETE"
    });