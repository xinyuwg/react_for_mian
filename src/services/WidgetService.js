import {JPA_SERVICE_URL} from "../common/constants";

export const createWidget = (tid, widget) =>
    fetch(`${JPA_SERVICE_URL}/api/topics/${tid}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

export const findWidgetsForTopic = (tid) =>
    fetch(`${JPA_SERVICE_URL}/api/topics/${tid}/widgets`)
        .then(response => response.json());


export const findWidgetById = (wid) =>
    fetch(`${JPA_SERVICE_URL}/api/widgets/${wid}`)
        .then(response => response.json());

export const updateWidget = (wid, widget) =>
    fetch(`${JPA_SERVICE_URL}/api/widgets/${wid}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            "content-type": "application/json"
        }
    });

export const deleteWidget = (wid) =>
    fetch(`${JPA_SERVICE_URL}/api/widgets/${wid}`, {
        method: "DELETE"
    });

