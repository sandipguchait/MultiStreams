import React, { Component } from 'react';

import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {
    // Rendering form data from redux-form
    // input props is provided by redux-form
    renderInput = ({ input}) => {
        return (
            <input {...input} />
        )
    }

    render() {
        return (
            <form>
                <Field name="title" component={this.renderInput} />
                <Field name="description"  component={this.renderInput}/>
            </form>
        );
    }
}

export default reduxForm({
    form:'streamCreate'
})(StreamCreate);