export const CREATE_MODULE = "CREATE_MODULE";
export const DELETE_MODULE = "DELETE_MODULE";
export const FIND_MODULE_FOR_COURSE = "FIND_MODULE_FOR_COURSE";
// export const FIND_MODULE = "FIND_MODULE";
export const UPDATE_MODULE = "UPDATE_MODULE";
export const EDIT_MODULE_LIST = "EDIT_MODULE_LIST";
export const SAVE_MODULE_LIST = "SAVE_MODULE_LIST";
export const CHANGE_MODULE_INPUT_CACHE = "CHANGE_MODULE_INPUT_CACHE";
export const CLOSE_EDITOR = "CLOSE_EDITOR";
export const CHANGE_HIGHLIGHT_ROW_INDEX = "CHANGE_HIGHLIGHT_ROW_INDEX";

export const createModule = (module) => ({
    type: CREATE_MODULE,
    module: module
});

export const deleteModule = (moduleId) => ({
    type: DELETE_MODULE,
    moduleId: moduleId
});

export const findModuleForCourse = (modules) => ({
    type: FIND_MODULE_FOR_COURSE,
    modules: modules
});

// export const findModule = (moduleId) => ({
//     type: FIND_MODULE,
//     moduleId: moduleId
// });

export const updateModule = (moduleId, newModule) => ({
    type: UPDATE_MODULE,
    moduleId: moduleId,
    newModule: newModule
});

export const editModuleList = (editingRowIndex,editingRowValue) => ({
    type: EDIT_MODULE_LIST,
    editingRowIndex:editingRowIndex,
    editingRowValue:editingRowValue
});

export const saveModuleList = () => ({
    type: SAVE_MODULE_LIST
});

export const changeModuleInputCache = (newCacheValue) => ({
    type: CHANGE_MODULE_INPUT_CACHE,
    newCacheValue: newCacheValue
});

export const closeEditor = () => ({
    type: CLOSE_EDITOR
});

export const changeHighlightRow = (rowIndex) => ({
    type: CHANGE_HIGHLIGHT_ROW_INDEX,
    rowIndex: rowIndex
});