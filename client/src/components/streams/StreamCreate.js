import React, { Component } from 'react';

import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {
    // Rendering form data from redux-form
    // input props is provided by redux-form
    renderInput = ({ input, label }) => {
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} />
            </div>
        )
    }

    render() {
        return (
            <form className="ui form">
                <Field name="title" component={this.renderInput} label="Enter Title"/>
                <Field name="description"  component={this.renderInput} label="Enter description"/>
            </form>
        );
    }
}

export default reduxForm({
    form:'streamCreate'
})(StreamCreate);