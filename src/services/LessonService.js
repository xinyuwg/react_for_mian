import {SERVICE_URL} from "../common/constants";

export const findLessonsForModule = (moduleId) =>
    fetch(`${SERVICE_URL}/modules/${moduleId}/lessons`)
        .then(response => response.json());

export const deleteLesson = (lessonId) =>
    fetch(`${SERVICE_URL}/lessons/${lessonId}`, {
        method: "DELETE"
    });

export const createLesson = (moduleId) =>
    fetch(`${SERVICE_URL}/modules/${moduleId}/lessons`, {
        method: "POST",
        body: JSON.stringify({title: "New Lesson"}),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

export const updateLesson= (lessonId,newLesson)=>
    fetch(`${SERVICE_URL}/lessons/${lessonId}`,
    {
        method: 'PUT',
        body: JSON.stringify(newLesson),
        headers: {
            "content-type": "application/json"
        }
    });
