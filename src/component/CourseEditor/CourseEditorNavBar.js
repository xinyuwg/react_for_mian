import React from "react";
import {Navbar, Icon, IconButton} from "rsuite";
import {findCourseById} from "../../services/CourseService";
import * as moduleAction from "../../actions/moduleActions";
import {connect} from "react-redux";

class CourseEditorNavBar extends React.Component {
    state = {};


    componentDidMount = async () => {
        this.setState({course: await findCourseById(this.props.courseId)});
    };

    render() {
        return (
            <Navbar>

                <Navbar.Header>
                    <IconButton icon={<Icon icon={"close"} size={"lg"}/>}
                                onClick={() => {
                                    this.props.history.push("/");
                                    this.props.closeEditor();
                                }}
                                className={"mx-2"}/> <span
                    className={"navbar-brand logo"}>{this.state.course && this.state.course.title}</span>
                </Navbar.Header>

            </Navbar>
        )
    }
}


const dispatchToPropertyMapper = (dispatch) => {
    return {
        closeEditor: () => {dispatch(moduleAction.closeEditor())}
    }

};


export default connect(
    null,
    dispatchToPropertyMapper
)(CourseEditorNavBar);