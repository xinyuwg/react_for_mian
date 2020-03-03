import {
    CHANGE_TOPIC_HIGHLIGHT_TAB_INDEX, CHANGE_TOPIC_INPUT_CACHE,
    CREATE_TOPIC, DELETE_TOPIC,
    EDIT_TOPIC_LIST,
    FIND_TOPIC_FOR_LESSON, SAVE_TOPIC_LIST, UPDATE_TOPIC
} from "../actions/topicActions";

const initialState = {
    editingTabIndex: -1,
    topicHighlightTabIndex: -1,
    editingInputCache: "",
    topics: undefined
};

const topicReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_TOPIC_FOR_LESSON:
            return {
                ...state,
                topics: action.topics
            };

        case CREATE_TOPIC:
            return {
                ...state,
                topics: [
                    ...state.topics,
                    action.topic
                ]
            };

        case EDIT_TOPIC_LIST:
            return {
                ...state,
                editingTabIndex: action.editingTabIndex,
                editingInputCache: action.editingTabValue
            };

        case CHANGE_TOPIC_HIGHLIGHT_TAB_INDEX:
            return {
                ...state,
                topicHighlightTabIndex: action.tabIndex
            };
        case CHANGE_TOPIC_INPUT_CACHE:
            return {
                ...state,
                editingInputCache: action.newCacheValue
            };
        case DELETE_TOPIC:
            return {
                ...state,
                topics: state.topics.filter(topic => topic.id !== action.topicId)
            };
        case SAVE_TOPIC_LIST:
            return {
                ...state,
                editingTabIndex: -1
            };
        case UPDATE_TOPIC:
            return {
                ...state,
                topics: state.topics.map(topic => {
                    if (topic.id === action.topicId) {
                        topic.title = action.newTopic.title;
                        return topic;
                    } else {
                        return topic;
                    }
                })
            };
        default:
            return state;
    }
};


export default topicReducer;