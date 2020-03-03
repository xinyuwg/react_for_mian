import {JPA_SERVICE_URL} from "../common/constants";

export const findTopicForLesson = (lessonId) =>
    fetch(`${JPA_SERVICE_URL}/api/lessons/${lessonId}/topics`)
        .then(response => response.json());

export const deleteTopic = (topicId) =>
    fetch(`${JPA_SERVICE_URL}/api/topics/${topicId}`, {
        method: "DELETE"
    });

export const createTopic = (lessonId) =>
    fetch(`${JPA_SERVICE_URL}/api/lessons/${lessonId}/topics`, {
        method: "POST",
        body: JSON.stringify({title: "New Topic"}),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

export const updateTopic= (topicId,newTopic)=>
    fetch(`${JPA_SERVICE_URL}/api/topics/${topicId}`,
    {
        method: 'PUT',
        body: JSON.stringify(newTopic),
        headers: {
            "content-type": "application/json"
        }
    });
