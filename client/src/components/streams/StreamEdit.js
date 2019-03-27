import React from 'react';
import { connect } from 'react-redux';
import {fetchStream, editStream } from '../../actions/index';
import StreamForm from './StreamForm';

import _ from "lodash";

class StreamEdit extends React.Component {

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.editStream( this.props.match.params.id , formValues )
    }

    render(){
        if(!this.props.stream) {
            return <div>Loading....</div>
        }
    return (
        <div>
            <h3>Edit a Stream</h3>
            <StreamForm 
             initialValues={_.pick(this.props.stream, 'title', 'description')}
            //  initialValues is prefefined by reduxform and we use lodash here to pick 
            //  the only properties that we want like title and desc
             onSubmit={this.onSubmit}
             />
        </div>
    );
   }
};

// MapStateToprops has 2 arguments one is State and another is the PROPS 
//thats is passed to the component
const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {fetchStream,editStream})(StreamEdit);