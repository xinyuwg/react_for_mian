import React from "react";
import {connect} from "react-redux";
import {Alert, Button, ButtonGroup, Icon, Nav} from "rsuite";
import * as topicService from "../../../services/TopicService";
import * as topicAction from "../../../actions/topicActions";

class TopicPills extends React.Component {

    componentDidMount() {
        // this.props.findLessonForModule(this.props.moduleId);
    }

    render() {
        return (
            // <Nav appearance="subtle" justified>
            //     {this.props.lessons && this.props.lessons.map((lesson, index) =>
            //         <LessonTabPill
            //             lesson={lesson}
            //             index={index}
            //             match={this.props.match}
            //             history={this.props.history}
            //         />
            //     )}
            //     <Nav.Item
            //         eventKey={"create"}
            //         onClick={() => this.props.createLesson(this.props.moduleId)}>
            //         <Icon icon={"plus-square-o"}/> Add Lesson
            //     </Nav.Item>
            // </Nav>
            <ButtonGroup style={{marginTop:12}} justified>
                <Button appearance={"ghost"}>Add Topic</Button>
            </ButtonGroup>
        )
    }
}

const stateToPropertyMapper = (state) => {
    return {
        topics: state.topics.topics

    }
};

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findTopicForLesson: (lessonId) => {
            topicService.findTopicForLesson(lessonId)
                .then(topics => dispatch(
                    topicAction.findTopicForLesson(topics)))
        },
        createTopic: (lessonId) =>
            topicService.createTopic(lessonId)
                .then(topic => {
                    dispatch(topicAction.createTopic(topic));
                    Alert.success("Create Topic Successfully")
                })
    }

};

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(TopicPills);