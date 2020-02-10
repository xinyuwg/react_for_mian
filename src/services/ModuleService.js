import {SERVICE_URL} from "../common/constants";

export const findModuleForCourse = (courseId) =>
    fetch(`${SERVICE_URL}/courses/${courseId}/modules`)
        .then(response => response.json());

export const deleteModule = (moduleId) =>
    fetch(`${SERVICE_URL}/modules/${moduleId}`, {
        method: "DELETE"
    });

export const createModule = (courseId) =>
    fetch(`${SERVICE_URL}/courses/${courseId}/modules`, {
        method: "POST",
        body: JSON.stringify({title: "New Module"}),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

export const updateModule = (moduleId,newModule)=>
    fetch(`${SERVICE_URL}/modules/${moduleId}`,
    {
        method: 'PUT',
        body: JSON.stringify(newModule),
        headers: {
            "content-type": "application/json"
        }
    });
