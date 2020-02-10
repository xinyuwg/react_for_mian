import React from "react";
import CourseEditorNavBar from "./CourseEditorNavBar";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import moduleReducer from "../../reducers/moduleReducer";
import ModuleList from "./ModuleList/ModuleList";
import {Grid, Row, Col} from "rsuite";

const rootReducer = combineReducers({
    modules: moduleReducer
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
                    <ModuleList courseId={match.params.courseId}/>
                </Col>
            </Row>
        </Grid>

    </Provider>
;

export default CourseEditor;