import React from 'react';
import { connect } from 'react-redux';
import {fetchStream, editStream } from '../../actions/index';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        console.log(formValues)
    }

    render(){
        if(!this.props.stream) {
            return <div>Loading....</div>
        }
    return (
        <div>
            <h3>Edit a Stream</h3>
            <StreamForm onSubmit={this.onSubmit}/>
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