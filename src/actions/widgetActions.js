export const CREATE_WIDGET = "CREATE_WIDGET";
export const DELETE_WIDGET = "DELETE_WIDGET";
export const UPDATE_WIDGET = "UPDATE_WIDGET";
export const FIND_ALL_WIDGETS_FOR_TOPIC = "FIND_ALL_WIDGETS_FOR_TOPIC";
export const UPDATE_WIDGET_LOCALLY = "UPDATE_WIDGET_LOCALLY";
export const SAVE_WIDGET_LIST = "SAVE_WIDGET_LIST";
export const CHANGE_ORDER = "CHANGE_ORDER";

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


// export const updateWidgetLocally = (widget, wid) => ({
//     type: UPDATE_WIDGET_LOCALLY,
//     widget: widget,
//     wid: wid
// });

export const saveWidgetList = (widgets) => ({
    type: SAVE_WIDGET_LIST,
    widgets: widgets
});

export const changeOrder = (widgetId, order,direction) => ({
    type: CHANGE_ORDER,
    widgetId: widgetId,
    direction: direction,
    order: order
});