import React from "react";
import {connect} from "react-redux";
import {Alert, Icon, Nav} from "rsuite";
import * as lessonService from "../../../services/LessonService";
import * as lessonAction from "../../../actions/lessonActions";
import LessonTabPill from "./LessonTabPill";

class LessonTabs extends React.Component {

    componentDidMount() {
        this.props.findLessonForModule(this.props.moduleId);
    }

    render() {
        return (
            <Nav appearance="subtle" >
                {this.props.lessons && this.props.lessons.map((lesson, index) =>
                    <LessonTabPill
                        lesson={lesson}
                        index={index}
                        match={this.props.match}
                        history={this.props.history}
                    />
                )}
                <Nav.Item
                    eventKey={"create"}
                    onClick={() => this.props.createLesson(this.props.moduleId)}>
                    <Icon icon={"plus-square-o"}/> Add Lesson
                </Nav.Item>
            </Nav>
        )
    }
}

const stateToPropertyMapper = (state) => {
    return {
        lessons: state.lessons.lessons

    }
};

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findLessonForModule: (moduleId) => {
            lessonService.findLessonsForModule(moduleId)
                .then(lessons => dispatch(
                    lessonAction.findLessonForModule(lessons)))
        },
        createLesson: (moduleId) =>
            lessonService.createLesson(moduleId)
                .then(lesson => {
                    dispatch(lessonAction.createLesson(lesson));
                    Alert.success("Create Lesson Successfully")
                })
    }

};

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(LessonTabs);