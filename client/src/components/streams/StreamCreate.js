import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from 'react-redux';
import { createStream } from '../../actions/index';


class StreamCreate extends Component {
  // Rendering form data from redux-form
  // input props is provided by redux-form
  renderInput = ({ input, label, meta }) => {
      //showing classname of error conditionally
      const className = `field ${meta.error && meta.touched ? 'error': ''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {/* meta is the validate error property that we get from redux from validate function below */}
        {this.renderError(meta)}
      </div>
    );
  };

  renderError = ({ error, touched }) => {
      //touched is a property on reduxform that shows that is a filed selected or not
      // if a field is selected and there is error then show the error else not
    if(touched && error ) {
        return(
            <div className="ui error message">
                <div className="header">
                    {error}
                </div>
            </div>
        )
    }
  }

  onSubmit = formValues => {
    this.props.createStream(formValues);
  };


  render() {
    return (
      //this.props.handleSubmit is supplied as props from redux-form 
      //this.onSubmit() is the helper function
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
    const errors = {};
    if( !formValues.title ) {
       errors.title =" You must enter a title"
    }
    if( !formValues.description ) {
        errors.description = " You must enter a Description"
    }
    return errors
}

const formWrapped = reduxForm({
    form: "streamCreate",
    validate
  })(StreamCreate);

export default connect(null, { createStream })(formWrapped);
