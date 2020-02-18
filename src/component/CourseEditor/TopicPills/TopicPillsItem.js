import React from "react";
import * as topicService from "../../../services/TopicService";
import * as topicAction from "../../../actions/topicActions";
import {connect} from "react-redux";
import {Alert, Icon, Input, InputGroup, Nav, Row} from "rsuite";

class TopicPillsItem extends React.Component {
    //
    // componentDidMount() {
    //     if (this.props.match.params.topicId) {
    //         console.log(this.props.index);
    //         if (this.props.match.params.topicId === this.props.topic._id) {
    //             this.props.changeHighlightIndex(this.props.index)
    //         }
    //     }
    // }

    plainText = () => {
        return (

            <Nav.Item appearance={"ghost"}
                // eventKey={this.props.index}
                      onClick={() => {
                          this.props.changeHighlightIndex(this.props.index);
                          this.props.history.push(`/course-editor/${this.props.match.params.courseId}/module/${this.props.match.params.moduleId}/lesson/${this.props.match.params.lessonId}/topic/${this.props.topic._id}`)
                      }}
                      active={this.props.index === this.props.highlightTabIndex}>
                    {this.props.topics[this.props.index].title}
                <Icon icon={"edit"}
                      className={"mx-2"}
                      onClick={() => this.props.editTopicList(this.props.index, this.props.topic.title)}
                />
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
                active={this.props.index === this.props.topicHighlightTabIndex}>

                <Row className="show-grid">
                    <InputGroup inside={true}>
                        <Input style={{width: "80%"}}
                               value={this.props.editingInputCache}
                               size="xs"
                               onChange={value => this.props.changeInputCache(value)}/>
                        <Icon icon={"trash-o"}
                              className={"mx-1"}
                              onClick={() => this.props.deleteTopic(this.props.topic._id)}/>
                        <Icon icon={"save"}
                              className={"mx-1"}
                              onClick={() => this.props.saveTopicList(
                                  this.props.topic._id,
                                  {title: this.props.editingInputCache}
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
        // return(
        //     this.plainText()
        // )
    }


}

const stateToPropertyMapper = (state) => {
    return {
        topics: state.topics.topics,
        editingTabIndex: state.topics.editingTabIndex,
        editingInputCache: state.topics.editingInputCache,
        topicHighlightTabIndex: state.topics.topicHighlightTabIndex
    }
};

const dispatchToPropertyMapper = (dispatch) => {
    return {

        deleteTopic: (topicId) =>
            topicService.deleteTopic(topicId)
                .then(status => {
                    dispatch(topicAction.deleteTopic(topicId));
                    // dispatch(lessonAction.saveLessonList());
                    Alert.info("Delete Topic Successfully");

                }),

        editTopicList: (editingTabIndex, editingTabValue) =>
            dispatch(topicAction.editTopicList(editingTabIndex, editingTabValue)),

        changeHighlightIndex: (tabIndex) => {
            dispatch(topicAction.changeHighlightPill(tabIndex));
        },


        saveTopicList: (topicId, newTopic) => {
            topicService.updateTopic(topicId, newTopic)
                .then(r => dispatch(topicAction.updateTopic(topicId, newTopic)));
            dispatch(topicAction.saveTopicList());
            Alert.success("Update Topic Successfully");


        },
        changeInputCache: (newInputCache) => {
            dispatch(topicAction.changeTopicInputCache(newInputCache));
        }

    }

};

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(TopicPillsItem);