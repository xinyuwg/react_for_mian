import React from "react";
import {ListGroup} from "react-bootstrap";
import {Alert, ButtonGroup, ButtonToolbar, Icon, IconButton, Input} from "rsuite";
import * as moduleService from "../../../services/ModuleService";
import * as moduleAction from "../../../actions/moduleActions";
import {connect} from "react-redux";

class ModuleListRow extends React.Component {

    state = {moduleLocalTitle: this.props.module.title};


    plainText = () => {
        return (
            <ListGroup.Item
                index={this.props.index}
                className={"d-flex justify-content-between align-items-center"
                    .concat(this.props.index === this.props.highlightRowIndex ? " active" : "")}
                onClick={() => this.props.changeHighlightIndex(this.props.index)}
            >
                {this.props.module.title}
                <IconButton icon={<Icon icon={"edit"}/>}
                            onClick={() => this.props.editModuleList(this.props.index, this.props.module.title)}/>
            </ListGroup.Item>
        )
    };

    editingText = () => {
        return (
            <ListGroup.Item
                index={this.props.index}
                className={"d-flex justify-content-between align-items-center"
                    .concat(this.props.index === this.props.highlightRowIndex ? " active" : "")}>
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
        updateModule: (moduleId) =>
            moduleService.updateModule(moduleId, this.moduleLocal)
                .then(status => {
                    dispatch(moduleAction.updateModule(moduleId, this.moduleLocal));
                }),
        editModuleList: (editingRowIndex, editingRowValue) =>
            dispatch(moduleAction.editModuleList(editingRowIndex, editingRowValue)),
        saveModuleList: (moduleId, newModule) => {
            moduleService.updateModule(moduleId, newModule)
                .then(r => dispatch(moduleAction.updateModule(moduleId, newModule)));
            Alert.success("Update Module Successfully");
            dispatch(moduleAction.saveModuleList());

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