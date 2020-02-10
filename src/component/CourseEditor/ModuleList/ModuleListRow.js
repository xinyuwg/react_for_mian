import React from "react";
import {ListGroup} from "react-bootstrap";
import {Alert, ButtonGroup, ButtonToolbar, Icon, IconButton, Input} from "rsuite";
import * as moduleService from "../../../services/ModuleService";
import * as moduleAction from "../../../actions/moduleActions";
import {connect} from "react-redux";

class ModuleListRow extends React.Component {

    componentDidMount() {
        if (this.props.match.params.moduleId) {
            console.log(this.props.index);
            if (this.props.match.params.moduleId === this.props.module._id) {
                this.props.changeHighlightIndex(this.props.index)
            }
        }
    }

    plainText = () => {
        return (
            <ListGroup.Item
                index={this.props.index}
                className={"d-flex justify-content-between align-items-center"
                    .concat((this.props.index === this.props.highlightRowIndex
                        && this.props.editingRowIndex === -1) ? " active" : "")}
                onClick={() => {
                    this.props.changeHighlightIndex(this.props.index);
                    this.props.history.push(`/course-editor/${this.props.match.params.courseId}/module/${this.props.module._id}`);
                    // this.props.history.go();
                }}
            >
                {this.props.modules[this.props.index].title}
                <IconButton icon={<Icon icon={"edit"}/>}
                            onClick={() => this.props.editModuleList(this.props.index, this.props.module.title)}/>
            </ListGroup.Item>
        )
    };

    editingText = () => {
        return (
            <ListGroup.Item
                index={this.props.index}
                className={"d-flex justify-content-between align-items-center active"}>
                <Input style={{width: "70%"}}
                       value={this.props.editingInputCache}
                       onChange={value => this.props.changeInputCache(value)}/>

                <ButtonToolbar>
                    <ButtonGroup>
                        <IconButton icon={<Icon icon={"trash-o"}/>}
                                    onClick={() => this.props.deleteModule(this.props.module._id)}/>
                        <IconButton icon={<Icon icon={"save"}/>}
                                    onClick={() =>
                                        this.props.saveModuleList(
                                            this.props.module._id,
                                            {title: this.props.editingInputCache})}/>
                    </ButtonGroup>
                </ButtonToolbar>
            </ListGroup.Item>
        )
    };


    render() {
        if (this.props.editingRowIndex === this.props.index) {
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
        modules: state.modules.modules,
        editingRowIndex: state.modules.editingRowIndex,
        editingInputCache: state.modules.editingInputCache,
        highlightRowIndex: state.modules.highlightRowIndex
    }
};

const dispatchToPropertyMapper = (dispatch) => {
    return {
        deleteModule: (moduleId) =>
            moduleService.deleteModule(moduleId)
                .then(status => {
                    dispatch(moduleAction.deleteModule(moduleId));
                    dispatch(moduleAction.saveModuleList());
                    Alert.info("Delete Module Successfully");

                }),

        editModuleList: (editingRowIndex, editingRowValue) =>
            dispatch(moduleAction.editModuleList(editingRowIndex, editingRowValue)),
        saveModuleList: (moduleId, newModule) => {
            moduleService.updateModule(moduleId, newModule)
                .then(r => dispatch(moduleAction.updateModule(moduleId, newModule)));
            dispatch(moduleAction.saveModuleList());
            Alert.success("Update Module Successfully");


        },
        changeInputCache: (newInputCache) => {
            dispatch(moduleAction.changeModuleInputCache(newInputCache));
        },
        changeHighlightIndex: (rowIndex) => {
            dispatch(moduleAction.changeHighlightRow(rowIndex));
        }

    }

};

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(ModuleListRow);