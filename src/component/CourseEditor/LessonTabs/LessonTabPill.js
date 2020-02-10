import React from "react";
import * as lessonService from "../../../services/LessonService";
import * as lessonAction from "../../../actions/lessonActions";
import {connect} from "react-redux";
import {Alert, Icon, Input, InputGroup, Nav, Row} from "rsuite";

class LessonTabPill extends React.Component {

    componentDidMount() {
        if (this.props.match.params.lessonId) {
            console.log(this.props.index);
            if (this.props.match.params.lessonId === this.props.lesson._id) {
                this.props.changeHighlightIndex(this.props.index)
            }
        }
    }

    plainText = () => {
        return (

            <Nav.Item
                eventKey={this.props.index}
                onClick={() => {
                    this.props.changeHighlightIndex(this.props.index);
                    this.props.history.push(`/course-editor/${this.props.match.params.courseId}/module/${this.props.match.params.moduleId}/lesson/${this.props.lesson._id}`)
                }}
                active={this.props.index === this.props.highlightTabIndex}>
                {this.props.lessons[this.props.index].title}
                <Icon icon={"edit"}
                      className={"mx-2"}
                      onClick={() => this.props.editLessonList(this.props.index, this.props.lesson.title)}/>
            </Nav.Item>
        )
    };

    editingText = () => {
        return (

            <Nav.Item
                eventKey={this.props.index}
                onClick={() => {
                    this.props.changeHighlightIndex(this.props.index);
                }}
                active={this.props.index === this.props.highlightTabIndex}>

                <Row className="show-grid">
                    <InputGroup inside={true}>
                        <Input style={{width: "80%"}}
                               value={this.props.editingInputCache}
                               size="xs"
                               onChange={value => this.props.changeInputCache(value)}/>
                        <Icon icon={"trash-o"}
                              className={"mx-1"}
                              onClick={() => this.props.deleteLesson(this.props.lesson._id)}/>
                        <Icon icon={"save"}
                              className={"mx-1"}
                        onClick={()=>this.props.saveLessonList(
                            this.props.lesson._id,
                            {title:this.props.editingInputCache}
                        )}/>
                    </InputGroup>

                </Row>

            </Nav.Item>
        )
    };


    render() {
        if (this.props.editingTabIndex === this.props.index) {
            return (
                this.editingText()
            );
        } else {
            return (
                this.plainText()
            );
        }

    }


};

const stateToPropertyMapper = (state) => {
    return {
        lessons: state.lessons.lessons,
        editingTabIndex: state.lessons.editingTabIndex,
        editingInputCache: state.lessons.editingInputCache,
        highlightTabIndex: state.lessons.highlightTabIndex
    }
};

const dispatchToPropertyMapper = (dispatch) => {
    return {

        deleteLesson: (lessonId) =>
            lessonService.deleteLesson(lessonId)
                .then(status => {
                    dispatch(lessonAction.deleteLesson(lessonId));
                    // dispatch(lessonAction.saveLessonList());
                    Alert.info("Delete Lesson Successfully");

                }),

        editLessonList: (editingTabIndex, editingTabValue) =>
            dispatch(lessonAction.editLessonList(editingTabIndex, editingTabValue)),

        changeHighlightIndex: (tabIndex) => {
            dispatch(lessonAction.changeHighlightPill(tabIndex));
        },


        saveLessonList: (lessonId, newLesson) => {
            lessonService.updateLesson(lessonId, newLesson)
                .then(r => dispatch(lessonAction.updateLesson(lessonId, newLesson)));
            dispatch(lessonAction.saveLessonList());
            Alert.success("Update Lesson Successfully");


        },
        changeInputCache: (newInputCache) => {
            dispatch(lessonAction.changeLessonInputCache(newInputCache));
        }

    }

};

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(LessonTabPill);