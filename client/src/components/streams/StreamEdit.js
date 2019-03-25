import React from 'react';
import { connect } from 'react-redux';
import {fetchStream} from '../../actions/index';

class StreamEdit extends React.Component {

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    render(){
    return (
        <div>StreamEdit</div>
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

export default connect(mapStateToProps, {fetchStream})(StreamEdit);