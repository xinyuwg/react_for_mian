import React from 'react';
import {Button, Grid, Icon, Row, Col, InputPicker, Form, FormGroup, ControlLabel, FormControl,} from "rsuite";
import * as widgetAction from "../../../../actions/widgetActions";
import * as widgetService from "../../../../services/WidgetService";
import {connect} from "react-redux";
import {INPUT_PICKER_VALUE} from "../../../../common/constants";

class HeadingWidget extends React.Component {
    preview = () => {
        switch (this.props.widget.size) {
            case 1:
                return <h1>{this.props.widget.value}</h1>;
            case 2:
                return <h2>{this.props.widget.value}}</h2>;
            case 3:
                return <h3>{this.props.widget.value}</h3>;
            case 4:
                return <h4>{this.props.widget.value}</h4>;
            case 5:
                return <h5>{this.props.widget.value}</h5>;
            case 6:
                return <h6>{this.props.widget.value}</h6>;
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
                                     componentClass={"input"}
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
                        <ControlLabel>Heading Size</ControlLabel>
                        <InputPicker data={[
                            {"value": 1, "label": "H1"},
                            {"value": 2, "label": "H2"},
                            {"value": 3, "label": "H3"},
                            {"value": 4, "label": "H4"},
                            {"value": 5, "label": "H5"},
                            {"value": 6, "label": "H6"}]
                        }
                                     value={this.props.widget.size ? this.props.widget.size : 1}
                                     onChange={value => {
                                         this.props.updateWidgetLocally(this.props.widget.id,
                                             {
                                                 ...this.props.widget,
                                                 size: value
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
)(HeadingWidget);