import React from "react";
import {connect} from "react-redux";
import {Alert, Button, ButtonGroup, Icon, Nav} from "rsuite";
import * as topicService from "../../../services/TopicService";
import * as topicAction from "../../../actions/topicActions";
import TopicPillsItem from "./TopicPillsItem";
// import TopicPillsItem from "./TopicPillsItem";
// import LessonTabPill from "../LessonTabs/LessonTabPill";

class TopicPills extends React.Component {

    componentDidMount() {
        this.props.findTopicForLesson(this.props.lessonId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.lessonId !== this.props.lessonId) {
            this.props.findTopicForLesson(this.props.lessonId);
        }

    }

    render() {
        return (
            <>
                <Nav appearance="tabs" justified>
                    {this.props.topics && this.props.topics.map((topic, index) =>
                        <TopicPillsItem
                            topic={topic}
                            index={index}
                            match={this.props.match}
                            history={this.props.history}
                        />
                    )}
                    <Nav.Item  onClick={() => this.props.createTopic(this.props.match.params.lessonId)}>Add Topic</Nav.Item>
                </Nav>

            </>


        );
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