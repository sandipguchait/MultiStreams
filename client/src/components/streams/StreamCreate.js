import React, { Component } from "react";

import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
  // Rendering form data from redux-form
  // input props is provided by redux-form
  renderInput = ({ input, label }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  };

  onSubmit = formValues => {
    console.log(formValues);
  };


  render() {
    return (
      //this.props.handleSubmit is supplied as props from redux-form 
      //this.onSubmit() is the helper function
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form"
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

export default reduxForm({
  form: "streamCreate"
})(StreamCreate);
