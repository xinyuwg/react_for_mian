import {SERVICE_URL} from "../common/constants";

export const findTopicForLesson = (lessonId) =>
    fetch(`${SERVICE_URL}/lessons/${lessonId}/topics`)
        .then(response => response.json());

export const deleteTopic = (topicId) =>
    fetch(`${SERVICE_URL}/topics/${topicId}`, {
        method: "DELETE"
    });

export const createTopic = (lessonId) =>
    fetch(`${SERVICE_URL}/lessons/${lessonId}/topics`, {
        method: "POST",
        body: JSON.stringify({title: "New Topic"}),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

export const updateTopic= (topicId,newTopic)=>
    fetch(`${SERVICE_URL}/topics/${topicId}`,
    {
        method: 'PUT',
        body: JSON.stringify(newTopic),
        headers: {
            "content-type": "application/json"
        }
    });
