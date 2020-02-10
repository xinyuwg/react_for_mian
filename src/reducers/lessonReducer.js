import {
    CREATE_LESSON,
    FIND_LESSON_FOR_MODULE,
    EDIT_LESSON_LIST,
    CHANGE_HIGHLIGHT_TAB_INDEX, CHANGE_LESSON_INPUT_CACHE, DELETE_LESSON, SAVE_LESSON_LIST, UPDATE_LESSON
} from "../actions/lessonActions";

const initialState = {
    editingTabIndex: -1,
    highlightTabIndex: -1,
    editingInputCache: "",
    lessons: undefined
};

const lessonReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_LESSON_FOR_MODULE:
            return {
                ...state,
                lessons: action.lessons
            };

        case CREATE_LESSON:
            return {
                ...state,
                lessons: [
                    ...state.lessons,
                    action.lesson
                ]
            };

        case EDIT_LESSON_LIST:
            return {
                ...state,
                editingTabIndex: action.editingTabIndex,
                editingInputCache: action.editingTabValue
            };

        case CHANGE_HIGHLIGHT_TAB_INDEX:
            return {
                ...state,
                highlightTabIndex: action.tabIndex
            };
        case CHANGE_LESSON_INPUT_CACHE:
            return {
                ...state,
                editingInputCache: action.newCacheValue
            };
        case DELETE_LESSON:
            return {
                ...state,
                lessons: state.lessons.filter(lesson => lesson._id !== action.lessonId)
            };
        case SAVE_LESSON_LIST:
            return {
                ...state,
                editingTabIndex: -1
            };
        case UPDATE_LESSON:
            return {
                ...state,
                lessons: state.lessons.map(lesson => {
                    if (lesson._id === action.lessonId) {
                        lesson.title = action.newLesson.title;
                        return lesson;
                    } else {
                        return lesson;
                    }
                })
            };
        default:
            return state;
    }
};


export default lessonReducer;