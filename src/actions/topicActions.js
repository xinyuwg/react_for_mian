export const CREATE_TOPIC = "CREATE_TOPIC";
export const DELETE_TOPIC = "DELETE_TOPIC";
export const FIND_TOPIC_FOR_LESSON = "FIND_TOPIC_FOR_LESSON";
// export const FIND_TOPIC = "FIND_TOPIC";
export const UPDATE_TOPIC = "UPDATE_TOPIC";
export const EDIT_TOPIC_LIST = "EDIT_TOPIC_LIST";
export const SAVE_TOPIC_LIST = "SAVE_TOPIC_LIST";
export const CHANGE_TOPIC_INPUT_CACHE = "CHANGE_TOPIC_INPUT_CACHE";
export const CHANGE_HIGHLIGHT_TAB_INDEX = "CHANGE_HIGHLIGHT_TAB_INDEX";

export const createTopic = (topic) => ({
    type: CREATE_TOPIC,
    topic: topic
});

export const deleteTopic = (topicId) => ({
    type: DELETE_TOPIC,
    topicId: topicId
});

export const findTopicForLesson = (topics) => ({
    type: FIND_TOPIC_FOR_LESSON,
    topics: topics
});

export const editTopicList = (editingTabIndex, editingTabValue) => ({
    type: EDIT_TOPIC_LIST,
    editingTabIndex:editingTabIndex,
    editingTabValue:editingTabValue
});

export const changeHighlightPill = (tabIndex) => ({
    type: CHANGE_HIGHLIGHT_TAB_INDEX,
    tabIndex: tabIndex
});

export const changeTopicInputCache = (newCacheValue) => ({
    type: CHANGE_TOPIC_INPUT_CACHE,
    newCacheValue: newCacheValue
});

export const updateTopic = (topicId, newTopic) => ({
    type: UPDATE_TOPIC,
    topicId: topicId,
    newTopic: newTopic
});

export const saveTopicList = () => ({
    type: SAVE_TOPIC_LIST
});