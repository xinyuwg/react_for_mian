import React from "react";

import {updateCourse} from "../services/CourseService";
import {Link} from "react-router-dom";

class CourseGridCardContainer extends React.Component {
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
            <div className={"col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 my-1"}>
                <div className="card h-100">
                    <div className="card-body">

                        <h5 className="card-title btn-link">
                            <Link to={`/course-editor/${this.state.course._id}`}>
                                {this.state.course.title}
                            </Link></h5>

                        <h6 className="card-subtitle mb-2 text-muted">{this.state.course.owner}</h6>
                        <p className="card-text">Last modified: {this.state.course.lastModified}</p>

                    </div>
                    <div className="card-footer">
                        <i className="far fa-edit mx-1 px-1 btn-link"
                           onClick={() => this.switchEditingStatus()}>Edit</i>
                        <i className="fas fa-trash-alt mx-1 px-1 btn-link"
                           onClick={() => this.props.deleteCourse(this.state.course._id)}>Delete</i>
                    </div>

                </div>
            </div>
        );
    };

    editingText = () => {
        return (
            <>
                <div className="card">
                    <div className="card-body">
                        <label htmlFor={"title"} className={"col-form-label"}>Course Title</label>
                        <input type={"text"} className={"form-control"} value={this.state.course.title}
                               name={"title"}
                               id={"title"}
                               onChange={this.inputEventListener}/>
                        <label htmlFor={"owner"} className={"col-form-label"}>Owner</label>
                        <input type={"text"} className={"form-control"} value={this.state.course.owner}
                               name={"owner"}
                               id={"owner"}
                               onChange={this.inputEventListener}/>
                        <label htmlFor={"title"} className={"col-form-label"}>Last modified</label>
                        <input type={"text"} className={"form-control"} value={this.state.course.lastModified}
                               name={"lastModified"}
                               id={"lastModified"}
                               onChange={this.inputEventListener}/>


                    </div>
                    <div className="card-footer">
                        <button type="button" className="btn btn-primary my-2"
                                onClick={this.updateCourseInfo}>Update
                        </button>
                    </div>
                </div>
            </>
        );
    };

    render() {
        return (
            <>
                {!this.state.editingStatus && this.plainText()}
                {this.state.editingStatus && this.editingText()}
            </>
        )
    }
}

export default CourseGridCardContainer;