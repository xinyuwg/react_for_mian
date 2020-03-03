import React from 'react';
import {Button, Grid, Icon, Row, Col, InputPicker, Form, FormGroup, ControlLabel, FormControl,} from "rsuite";
import * as widgetAction from "../../../../actions/widgetActions";
import * as widgetService from "../../../../services/WidgetService";
import {connect} from "react-redux";
import {INPUT_PICKER_VALUE} from "../../../../common/constants";

class ListWidget extends React.Component {
    preview = () => {
        switch (this.props.widget.style) {
            case "ul":
                return (
                    <ul>
                        {this.props.widget.value.split("\n").map((item, index) =>
                            <li key={index}>{item}</li>)}
                    </ul>
                );
            case "ol":
                return (
                    <ol>
                        {this.props.widget.value.split("\n").map((item, index) =>
                            <li key={index}>{item}</li>)}
                    </ol>
                );
            default:
                return <h1>{this.props.widget.value}</h1>
        }
    };

    editing = () => {
        return (
            <Grid fluid>
                <Row className={"show-grid"}>
                    <Col md={10} mdHidden xsHidden smHidden>
                        <h2>{this.props.widget.name}</h2>
                    </Col>
                    <Col>
                        <Button color={"yellow"}
                                className={"mx-1"}
                                disabled={this.props.widget.order === 0}
                                onClick={() => this.props.changeOrder(this.props.widget.id, this.props.order, "up")}
                        >
                            <Icon icon={"arrow-up2"}/>
                        </Button>
                        <Button color={"yellow"}
                                className={"mx-1"}
                                disabled={this.props.widget.order === (this.props.widgetListLength - 1)}
                                onClick={() => this.props.changeOrder(this.props.widget.id, this.props.order, "down")}
                        >
                            <Icon icon={"arrow-down2"}/>
                        </Button>
                        <Button color={"red"}
                                className={"mx-1"}
                                onClick={() => this.props.deleteWidget(this.props.widget.id)}>
                            Delete
                        </Button>
                        <InputPicker data={INPUT_PICKER_VALUE}
                                     value={this.props.widget.type}
                                     onChange={value => {
                                         this.props.updateWidgetLocally(this.props.widget.id,
                                             {
                                                 ...this.props.widget,
                                                 type: value
                                             });
                                     }
                                     }/>
                    </Col>
                </Row>
                <Form style={{"marginTop": "15px"}} fluid>
                    <FormGroup>
                        <ControlLabel>Widget Name</ControlLabel>
                        <FormControl value={this.props.widget.name}
                                     placeholder={"Type Widget Name Here"}
                                     className={"my-2"}
                                     onChange={value => {
                                         this.props.updateWidgetLocally(this.props.widget.id,
                                             {
                                                 ...this.props.widget,
                                                 name: value
                                             });
                                     }
                                     }/>

                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Widget Value</ControlLabel>
                        <FormControl value={this.props.widget.value}
                                     placeholder={"Type Widget Content Here"}
                                     className={"my-2"}
                                     componentClass={"textarea"}
                                     onChange={value => {
                                         this.props.updateWidgetLocally(this.props.widget.id,
                                             {
                                                 ...this.props.widget,
                                                 value: value
                                             });
                                     }
                                     }/>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>List Type</ControlLabel>
                        <InputPicker data={[
                            {"value": "ul", "label": "Unordered List"},
                            {"value": "ol", "label": "Ordered List"}
                        ]
                        }
                                     value={this.props.widget.style}
                                     onChange={value => {
                                         this.props.updateWidgetLocally(this.props.widget.id,
                                             {
                                                 ...this.props.widget,
                                                 style: value
                                             });
                                     }
                                     }/>
                    </FormGroup>

                </Form>


            </Grid>
        );
    };

    render() {
        return (
            this.props.isPreview ? this.preview() : this.editing()
        );
    }
}


const dispatchToPropertyMapper = (dispatch) => {
    return {
        updateWidgetLocally: (widgetId, widget) => {
            dispatch(widgetAction.updateWidget(widgetId, widget));
        },
        deleteWidget: (widgetId) => {
            widgetService.deleteWidget(widgetId).then(
                r => dispatch(widgetAction.deleteWidget(widgetId))
            );
        },
        changeOrder: (widgetId, order, direction) => {
            dispatch(widgetAction.changeOrder(widgetId, order, direction));
        }

    }

};

export default connect(
    null,
    dispatchToPropertyMapper
)(ListWidget);