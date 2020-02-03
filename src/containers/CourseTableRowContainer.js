import React from "react";
import {updateCourse} from "../services/CourseService";

class CourseTableRowContainer extends React.Component {

    state = {
        editingStatus: false,
        course: this.props.course
    };


    switchEditingStatus = () => {
        this.setState({
            editingStatus: true
        })
    };

    updateCourseInfo = () => {
        updateCourse(this.state.course._id, this.state.course).then(
            response => {
                this.setState({
                        editingStatus: false
                    }
                )
            }
        )

    };

    inputEventListener = (event) => {
        this.setState({
            course: {
                ...this.state.course,
                [event.target.name]: event.target.value
            }
        })
    };

    plainText = () => {
        return (
            <>
                <td>
                    <i className="fas fa-book mx-2"/>
                    {this.state.course.title}
                </td>
                <td className="d-none d-md-table-cell py-auto">{this.state.course.owner}</td>
                <td className="d-none d-md-table-cell py-auto">{this.state.course.lastModified}</td>
                <td className="text-center">
                    <i className="far fa-edit mx-1 btn-link"
                       onClick={() => this.switchEditingStatus()}/>
                    <i className="fas fa-trash-alt mx-1 btn-link"
                       onClick={() => this.props.deleteCourse(this.state.course._id)}/>
                </td>
            </>
        );
    };

    editingText = () => {
        return (
            <>
                <td>
                    <input type={"text"} className={"form-control"} value={this.state.course.title}
                           name={"title"}
                           onChange={this.inputEventListener}/>
                </td>
                <td>
                    <input type={"text"} className={"form-control d-none d-md-table-cell py-auto"}
                           value={this.state.course.owner}
                           name={"owner"}
                           onChange={this.inputEventListener}/>
                </td>
                <td>
                    <input type={"text"} className={"form-control d-none d-md-table-cell py-auto"}
                           value={this.state.course.lastModified}
                           name="lastModified"
                           onChange={this.inputEventListener}/>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-primary" onClick={this.updateCourseInfo}>Update</button>
                </td>
            </>
        )
    };

    render() {
        return (
            <tr>
                {!this.state.editingStatus && this.plainText()}
                {this.state.editingStatus && this.editingText()}
            </tr>
        )
    }
}

export default CourseTableRowContainer;