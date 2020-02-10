import React from "react";
import * as moduleService from "../../../services/ModuleService";
import * as moduleAction from "../../../actions/moduleActions";
import {connect} from "react-redux";
import {Alert, Button, Placeholder} from "rsuite";
import {ListGroup} from "react-bootstrap";
import ModuleListRow from "./ModuleListRow";

class ModuleList extends React.Component {

    componentDidMount() {
        this.props.findModuleForCourse(this.props.courseId);
    }

    render() {
        return (
            <>
                <ListGroup>
                    {this.props.modules && this.props.modules.map((module, index) =>
                        <ModuleListRow
                            module={module}
                            index={index}
                        />
                    )}
                    {!this.props.modules && <Placeholder.Paragraph rows={10}/>}
                </ListGroup>
                <Button appearance={"primary"}
                        onClick={
                            () => this.props.createModule(this.props.courseId)
                        }
                        className={"my-2"}
                        block>Create Module</Button>
            </>
        )
    }
}

const stateToPropertyMapper = (state) => {
    return {
        modules: state.modules.modules
    }
};

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findModuleForCourse: (courseId) =>
            moduleService.findModuleForCourse(courseId)
                .then(modules => dispatch(
                    moduleAction.findModuleForCourse(modules))),
        createModule: (courseId) =>
            moduleService.createModule(courseId)
                .then(module => {
                    dispatch(moduleAction.createModule(module));
                    Alert.success("Create Module Successfully")
                })
    }

};

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(ModuleList);