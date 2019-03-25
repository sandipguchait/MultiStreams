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
            <StreamForm initialValues={this.props.stream} onSubmit={this.onSubmit}/>
            {/* redux form has predefined method called initialValues so passing the value as props */}
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