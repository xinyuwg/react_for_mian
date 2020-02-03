import React from "react";

const CourseEditorComponent = ({editedCourseTitle, setSet}) => {
    const headerStyle = {color: "white"};

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="navbar-header" style={headerStyle}>
                    <i
                        className="fas fa-times mx-3 btn-link" onClick={
                        () => setSet({
                            editingCourse: false
                        })
                    }/>
                    {editedCourseTitle}

                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse my-lg-2" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li>
                            <button type="button" className="btn btn-dark mx-1 wbdv-page-tab">Build</button>
                        </li>
                        <li>
                            <button type="button" className="btn btn-dark mx-1 wbdv-page-tab active">Page</button>
                        </li>
                        <li>
                            <button type="button" className="btn btn-dark mx-1 wbdv-page-tab">Theme</button>
                        </li>
                        <li>
                            <button type="button" className="btn btn-dark mx-1 wbdv-page-tab">Store</button>
                        </li>
                        <li>
                            <button type="button" className="btn btn-dark mx-1 wbdv-page-tab">Apps</button>
                        </li>
                        <li>
                            <button type="button" className="btn btn-dark mx-1 wbdv-page-tab">Settings</button>
                        </li>
                        <li>
                            <button type="button" className="btn btn-dark mx-5 wbdv-new-page-btn">New Page</button>
                        </li>
                    </ul>

                </div>
            </nav>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <ul className="list-group wbdv-module-list">
                            <li className="list-group-item d-flex justify-content-between align-items-center wbdv-module-item active">
                    <span className="wbdv-module-item-title"><span
                        className="d-none d-lg-inline">Module 1 - </span>JQuery</span>
                                <span className="d-none d-lg-inline wbdv-module-item-delete-btn"><i
                                    className="far fa-trash-alt"/></span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center wbdv-module-item">
                                <span className="wbdv-module-item-title"><span
                                    className="d-none d-lg-inline">Module 2 - </span>React</span>
                                <span className="d-none d-lg-inline wbdv-module-item-delete-btn"><i
                                    className="far fa-trash-alt"/></span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center wbdv-module-item">
                                <span className="wbdv-module-item-title"><span
                                    className="d-none d-lg-inline">Module 3 - </span>Redux</span>
                                <span className="d-none d-lg-inline wbdv-module-item-delete-btn"><i
                                    className="far fa-trash-alt"/></span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center wbdv-module-item">
                    <span className="wbdv-module-item-title"><span
                        className="d-none d-lg-inline">Module 4 - </span>Native</span>
                                <span className="d-none d-lg-inline wbdv-module-item-delete-btn"><i
                                    className="far fa-trash-alt"/></span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center wbdv-module-item">
                    <span className="wbdv-module-item-title"><span
                        className="d-none d-lg-inline">Module 5 - </span>Angular</span>
                                <span className="d-none d-lg-inline wbdv-module-item-delete-btn"><i
                                    className="far fa-trash-alt"/></span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center wbdv-module-item">
                                <span className="wbdv-module-item-title"><span
                                    className="d-none d-lg-inline">Module 6 - </span>Node</span>
                                <span className="d-none d-lg-inline wbdv-module-item-delete-btn"><i
                                    className="far fa-trash-alt"/></span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center wbdv-module-item">
                                <span className="wbdv-module-item-title"><span
                                    className="d-none d-lg-inline">Module 7 - </span>Mongo</span>
                                <span className="d-none d-lg-inline wbdv-module-item-delete-btn"><i
                                    className="far fa-trash-alt"/></span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <span/>

                                <i className="fas fa-plus wbdv-module-item-add-btn"/>
                            </li>

                        </ul>
                    </div>
                    <div className="col-7 offset-md-1">
                        <ul className="nav nav-tabs wbdv-topic-pill-list">
                            <li className="nav-item">
                                <span className="nav-link wbdv-topic-pill active">Topic 1</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link wbdv-topic-pill">Topic 2</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link wbdv-topic-pill">Topic 3</span>
                            </li>
                            <li className="nav-item">
                                <i className="fas fa-plus fa-1x my-2 mx-1 wbdv-topic-add-btn"/>
                            </li>
                        </ul>
                        <br/>
                        <form>
                            <div className="row">
                                <div className="col-10 col-lg-11">
                                    <label htmlFor="title" className="col-form-label">Title</label>
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <button className="btn btn-outline-secondary dropdown-toggle" type="button"
                                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">H1
                                            </button>
                                            <div className="dropdown-menu">
                                                <span className="dropdown-item">H1</span>
                                                <span className="dropdown-item">H2</span>
                                                <span className="dropdown-item">H3</span>
                                            </div>
                                        </div>
                                        <input type="text" className="form-control" id="title"
                                               aria-label="Text input with dropdown button"/>
                                    </div>
                                </div>
                                <div className="col-2 col-sm-1">
                                    <i className="fas fa-backspace widget-custom"/>
                                    <i className="fas fa-arrow-up widget-custom"/>
                                    <i className="fas fa-arrow-down widget-custom"/>

                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-10 col-lg-11">
                                    <div className="form-group">
                                        <label htmlFor="content" className="col-form-label">Text</label>
                                        <textarea className="form-control" id="content" rows="4"
                                                  placeholder="..."/>
                                    </div>
                                </div>
                                <div className="col-2 col-sm-1">
                                    <i className="fas fa-backspace widget-custom"/>
                                    <i className="fas fa-arrow-up widget-custom"/>
                                    <i className="fas fa-arrow-down widget-custom"/>

                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-10 col-lg-11">
                                    <label>Attachment</label>
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="inputFiles"
                                               aria-describedby="inputGroupFileAddon01"/>
                                        <label className="custom-file-label" htmlFor="inputFiles">Choose
                                            file</label>
                                    </div>
                                </div>
                                <div className="col-2 col-sm-1">
                                    <i className="fas fa-backspace widget-custom"/>
                                    <i className="fas fa-arrow-up widget-custom"/>
                                    <i className="fas fa-arrow-down widget-custom"/>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-10 col-lg-11">
                                    <label htmlFor="pic-url">Picture URL</label>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon3">https://</span>
                                        </div>
                                        <input type="text" className={"form-control"} id="pic-url"
                                               aria-describedby="basic-addon3"/>
                                    </div>

                                </div>
                                <div className="col-2 col-sm-1">
                                    <i className="fas fa-backspace widget-custom"/>
                                    <i className="fas fa-arrow-up widget-custom"/>
                                    <i className="fas fa-arrow-down widget-custom"/>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                </div>
                            </div>
                            <br/>

                            <div className="row">
                                <div className="input-group col-12">
                                    <select className="custom-select" id="inputGroupSelect04"
                                            aria-label="Example select with button addon">
                                        <option selected>Add a new widget</option>
                                        <option value="title">Title</option>
                                        <option value="text">Text</option>
                                        <option value="picture">Picture</option>
                                        <option value="file">Attachment</option>
                                    </select>
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="button">Add</button>
                                    </div>
                                </div>
                            </div>


                            <button type="submit" className="btn btn-success my-3">Save</button>
                            <button type="submit" className="btn btn-secondary my-3">Preview</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

};

export default CourseEditorComponent;