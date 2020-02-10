import React from "react";
import {ListGroup} from "react-bootstrap";
import {Alert, ButtonGroup, ButtonToolbar, Icon, IconButton, Input} from "rsuite";
import * as moduleService from "../../../services/ModuleService";
import * as moduleAction from "../../../actions/moduleActions";
import {connect} from "react-redux";

class ModuleListRow extends React.Component {

    moduleLocal = this.props.module;

    plainText = () => {
        return (
            <ListGroup.Item
                index={this.props.index}
                className={"d-flex justify-content-between align-items-center"}>
                {this.props.module.title}
                <IconButton icon={<Icon icon={"edit"}/>}
                            onClick={() => this.props.editModuleList()}/>

            </ListGroup.Item>
        )
    };

    editingText = () => {
        return (
            <ListGroup.Item
                index={this.props.index}
                className={"d-flex justify-content-between align-items-center"}>
                <Input style={{width: "70%"}} value={this.moduleLocal.title}/>
                <ButtonToolbar>
                    <ButtonGroup>
                        <IconButton icon={<Icon icon={"trash-o"}/>}
                                    onClick={() => this.props.deleteModule(this.props.module._id)}/>
                        <IconButton icon={<Icon icon={"save"}/>}
                                    onClick={() => {
                                        this.setState({
                                            editingFlag: false
                                        })
                                    }}/>
                    </ButtonGroup>
                </ButtonToolbar>


            </ListGroup.Item>
        )
    };


    render() {
        switch (this.props.modulusListEditingStatus) {
            case false:
                return (this.plainText());
            case true:
                return (this.editingText());
            default:
                return (this.plainText());
        }

    }


};

const stateToPropertyMapper = (state) => {
    return {
        modulusListEditingStatus: state.modules.modulusListEditingStatus
    }
};

const dispatchToPropertyMapper = (dispatch) => {
    return {
        deleteModule: (moduleId) =>
            moduleService.deleteModule(moduleId)
                .then(status => {
                    dispatch(moduleAction.deleteModule(moduleId));
                    Alert.info("Delete Module Successfully");

                }),
        updateModule:(moduleId) =>
            moduleService.updateModule(moduleId,this.moduleLocal)
                .then(status=>{
                    dispatch(moduleAction.updateModule(moduleId, this.moduleLocal));
                }),
        editModuleList: () =>
            dispatch(moduleAction.editModuleList())
    }

};

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(ModuleListRow);