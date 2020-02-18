import React from "react";
import CourseEditorNavBar from "./CourseEditorNavBar";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import moduleReducer from "../../reducers/moduleReducer";
import ModuleList from "./ModuleList/ModuleList";
import {Grid, Row, Col, Placeholder} from "rsuite";
import LessonTabs from "./LessonTabs/LessonTabs";
import lessonReducer from "../../reducers/lessonReducer";
import topicReducer from "../../reducers/topicReducer";
import TopicPills from "./TopicPills/TopicPills";
import widgetReducer from "../../reducers/widgetReducer";
import WidgetListComponent from "./WidgetList/WidgetListComponent";

const rootReducer = combineReducers({
    modules: moduleReducer,
    lessons: lessonReducer,
    topics: topicReducer,
    widgets: widgetReducer
});

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const CourseEditor = ({history, match}) =>
    <Provider store={store}>
        <CourseEditorNavBar
            courseId={match.params.courseId}
            history={history}/>

        <Grid className={"my-4"}>
            <Row className={"show-grid"}>
                <Col xs={8}>
                    <ModuleList match={match}
                                courseId={match.params.courseId}
                                history={history}/>
                </Col>
                <Col xs={15} xsOffset={1}>
                    {match.params.moduleId ?
                        <LessonTabs
                            match={match}
                            moduleId={match.params.moduleId}
                            history={history}
                            style={{marginTop: "15px"}}/> :
                        <Placeholder.Grid rows={10} columns={6}/>}
                    {match.params.lessonId ?
                        <TopicPills
                            match={match}
                            lessonId={match.params.lessonId}
                            history={history}
                            className={"my-3"}/> :
                        <Placeholder.Paragraph rows={3} style={{marginTop: "15px"}}/>}
                    {(match.params.topicId) && <WidgetListComponent
                        match={match}
                        history={history}/>
                    }

                </Col>
            </Row>
        </Grid>

    </Provider>
;

export default CourseEditor;