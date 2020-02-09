import {SERVICE_URL} from "../common/constants";

export const findAllCourses = async () => {
    const response = await fetch(`${SERVICE_URL}/courses`);
    return await response.json();
};

export const deleteCourse = async (courseId) => {
    return await fetch(`${SERVICE_URL}/courses/${courseId}`, {
        method: "DELETE"
    });
};

export const updateCourse = async (courseId, course) => {
    return await fetch(`${SERVICE_URL}/courses/${courseId}`,
        {
            method: 'PUT',
            body: JSON.stringify(course),
            headers: {
                "content-type": "application/json"
            }
        });
};

export const createCourse = async (course) => {
    return await fetch(`${SERVICE_URL}/courses`, {
        method: 'POST',
        body: JSON.stringify(course),
        headers: {
            "content-type": "application/json"
        }
    })
};

export const findCourseById =  async (courseId) => {
    const response = await fetch(`${SERVICE_URL}/courses/${courseId}`);
    return await response.json();
};

