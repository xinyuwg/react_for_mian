import {CREATE_WIDGET, DELETE_WIDGET, FIND_ALL_WIDGETS_FOR_TOPIC, UPDATE_WIDGET} from "../actions/widgetActions";

const initialState = {
    widgets: undefined
};


const widgetReducer = (state=initialState, action) => {
    switch (action.type) {
        case FIND_ALL_WIDGETS_FOR_TOPIC:
            return {
                ...state,
                widgets: action.widgets
            };

        case DELETE_WIDGET:
            return {
                ...state,
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
            };

        case CREATE_WIDGET:
            return {
                ...state,
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            };
        case UPDATE_WIDGET:
            return {
                ...state,
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.widgetId) {
                        return action.widget
                    } else {
                        return widget;
                    }
                })
            };
        default:
            return state;
    }

};

export default widgetReducer;