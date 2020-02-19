import React from "react";
import {connect} from "react-redux";
import * as widgetService from "../../../services/WidgetService";
import * as widgetAction from "../../../actions/widgetActions";
import {Button, Col, Grid, PanelGroup, Row, Toggle} from "rsuite";
import WidgetComponent from "./WidgetComponent";

class WidgetListComponent extends React.Component {

    state = {
        isPreview: true
    };

    componentDidMount() {
        this.props.findWidgetsForTopic(this.props.match.params.topicId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.topicId !== this.props.match.params.topicId) {
            this.props.findWidgetsForTopic(this.props.match.params.topicId);
        }
    }


    render() {
        return (
            <Grid fluid>
                <Row className={"show-grid"} style={{"marginTop": 20}}>
                    <Col md={10} mdPush={15}>
                        <Button appearance={"primary"}
                                onClick={() => this.props.createWidget(
                                    this.props.match.params.topicId,
                                    this.props.widgets.length)}>
                            Create
                        </Button>
                        <Button color={"green"}
                                className={"mx-2"}
                                onClick={() =>
                                    this.props.widgets.map(
                                        widget => widgetService.updateWidget(widget.id, widget))
                                }>
                            Save
                        </Button>
                        <Toggle className={"mx-2"}
                                checkedChildren={"Preview"}
                                unCheckedChildren={"Preview"}
                                checked={this.state.isPreview}
                                onChange={(checked) => this.setState({
                                    isPreview: checked
                                })}
                                size={"lg"}/>

                    </Col>
                </Row>
                <PanelGroup
                    className={"my-4"}>
                    {this.props.widgets &&
                    this.props.widgets.sort(function (a, b) {
                        return a.order - b.order
                    }).map((widget, index) =>
                        <WidgetComponent
                            widget={widget}
                            key={index}
                            order={index}
                            isPreview={this.state.isPreview}
                            widgetListLength={this.props.widgets.length}
                        />
                    )}
                </PanelGroup>

            </Grid>
        );
    }
}


const stateToPropertyMapper = (state) => {
    return {
        widgets: state.widgets.widgets
    }
};

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findWidgetsForTopic: (topicId) => {
            return widgetService.findWidgetsForTopic(topicId)
                .then(widgets => dispatch(widgetAction.findAllWidgetsForTopic(widgets)));
        },
        createWidget: (topicId, order) => {
            return widgetService.createWidget(topicId, {
                "name": "Widget",
                "id": Date.now().toString(),
                "order": order
            })
                .then(widget => dispatch(widgetAction.createWidget(topicId, widget)));
        }
    }

};

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(WidgetListComponent);