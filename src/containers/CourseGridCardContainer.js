import React from "react";
import {updateCourse} from "../services/CourseService";

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
            <>
                <div className="card" style="width: 18rem;">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk
                            of the card's content.</p>
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                </div>
            </>
        );
    };


}

export default CourseGridCardContainer;