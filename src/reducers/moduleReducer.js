import {
    CREATE_MODULE,
    DELETE_MODULE,
    EDIT_MODULE_LIST,
    FIND_MODULE_FOR_COURSE, SAVE_MODULE_LIST,
    UPDATE_MODULE
} from "../actions/moduleActions";

const initialState = {
    modulusListEditingStatus: false,
    modules: []
};

const moduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_MODULE_FOR_COURSE:
            return {
                ...state,
                modules: action.modules
            };

        case CREATE_MODULE:
            return {
                ...state,
                modules: [
                    ...state.modules,
                    action.module
                ]
            };
        case DELETE_MODULE:
            return {
                ...state,
                modules: state.modules.filter(module => module._id !== action.moduleId)
            };

        case UPDATE_MODULE:
            return {
                ...state,
                modules: state.modules.map(module => {
                    if (module._id === action.moduleId) {
                        return action.newModule;
                    } else {
                        return module;
                    }
                })
            };

        case EDIT_MODULE_LIST:
            return {
                ...state,
                modulusListEditingStatus: true
            };

        case SAVE_MODULE_LIST:
            return {
                ...state,
                modulusListEditingStatus: false
            };
        default:
            return state;

    }
};


export default moduleReducer;