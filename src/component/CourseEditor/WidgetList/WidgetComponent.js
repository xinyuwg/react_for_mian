import React from "react";
import {Input, Panel} from "rsuite";

class WidgetComponent extends React.Component {

    state = {
        widget: this.props.widget
    };


    headerPreview = (widget) => {
        switch (widget.size) {
            case 1:
                return <h1>{widget.name}{widget.order}</h1>;
            case 2:
                return <h2>{widget.name}{widget.order}</h2>;
            case 3:
                return <h3>{widget.name}{widget.order}</h3>;
            case 4:
                return <h4>{widget.name}{widget.order}</h4>;
            case 5:
                return <h5>{widget.name}{widget.order}</h5>;
            case 6:
                return <h6>{widget.name}{widget.order}</h6>;
            default:
                return <h1>{widget.name}{widget.order}</h1>
        }
    };

    editView = (widget) => {
        return (
            <div>
                <h2>{widget.name} {widget.order}</h2>
                <Input value={widget.value}/>
            </div>
        )
    };


    preview = (widget) => {
        switch (widget.type) {
            default:
                return (this.headerPreview(widget))
        }

    };

    render() {

        return (
            <Panel>
                {this.props.isPreview ? this.preview(this.state.widget) : this.editView(this.state.widget)}
            </Panel>
        )
    }
}

export default WidgetComponent;