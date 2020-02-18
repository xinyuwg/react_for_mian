export const CREATE_WIDGET = "CREATE_WIDGET";
export const DELETE_WIDGET = "DELETE_WIDGET";
export const UPDATE_WIDGET = "UPDATE_WIDGET";
export const FIND_ALL_WIDGETS_FOR_TOPIC = "FIND_ALL_WIDGETS_FOR_TOPIC";


export const createWidget = (topicId, widget) => ({
    type: CREATE_WIDGET,
    topicId: topicId,
    widget: widget
});

export const deleteWidget = (widgetId) => ({
    type: DELETE_WIDGET,
    widgetId: widgetId
});

export const updateWidget = (widgetId, widget) => ({
    type: UPDATE_WIDGET,
    widgetId: widgetId,
    widget: widget
});

export const findAllWidgetsForTopic = (widgets) => ({
    type: FIND_ALL_WIDGETS_FOR_TOPIC,
    widgets: widgets
});
