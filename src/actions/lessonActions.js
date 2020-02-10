
export const CREATE_LESSON = "CREATE_LESSON";
export const DELETE_LESSON = "DELETE_LESSON";
export const FIND_LESSON_FOR_MODULE = "FIND_LESSON_FOR_MODULE";
// export const FIND_LESSON = "FIND_LESSON";
export const UPDATE_LESSON = "UPDATE_LESSON";
export const EDIT_LESSON_LIST = "EDIT_LESSON_LIST";
export const SAVE_LESSON_LIST = "SAVE_LESSON_LIST";
export const CHANGE_LESSON_INPUT_CACHE = "CHANGE_LESSON_INPUT_CACHE";
export const CHANGE_HIGHLIGHT_TAB_INDEX = "CHANGE_HIGHLIGHT_TAB_INDEX";

export const createLesson = (lesson) => ({
    type: CREATE_LESSON,
    lesson: lesson
});

export const deleteLesson = (lessonId) => ({
    type: DELETE_LESSON,
    lessonId: lessonId
});

export const findLessonForModule = (lessons) => ({
    type: FIND_LESSON_FOR_MODULE,
    lessons: lessons
});

export const editLessonList = (editingTabIndex, editingTabValue) => ({
    type: EDIT_LESSON_LIST,
    editingTabIndex:editingTabIndex,
    editingTabValue:editingTabValue
});

export const changeHighlightPill = (tabIndex) => ({
    type: CHANGE_HIGHLIGHT_TAB_INDEX,
    tabIndex: tabIndex
});

export const changeLessonInputCache = (newCacheValue) => ({
    type: CHANGE_LESSON_INPUT_CACHE,
    newCacheValue: newCacheValue
});

export const updateLesson = (lessonId, newLesson) => ({
    type: UPDATE_LESSON,
    lessonId: lessonId,
    newLesson: newLesson
});

export const saveLessonList = () => ({
    type: SAVE_LESSON_LIST
});