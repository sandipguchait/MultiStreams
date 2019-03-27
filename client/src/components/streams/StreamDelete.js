import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions/index';

import { Link } from 'react-router-dom';

class StreamDelete extends React.Component {
    
    componentDidMount() {
       this.props.fetchStream(this.props.match.params.id)
    }

    renderActions() {
        return (
            <>
                <button className="ui button negative">Delete</button>
                <Link className="ui button">Cancel</Link>
            </>
        )
    }

    renderContent(){
        if(!this.props.stream) {
            return 'Are you sure you want to delete the stream?'
        } 
        return `Are you sure you want to delete the stream with title: ${this.props.stream.title}`
    }

    render(){
    return (
            <Modal 
                title='DeleteStream'
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={()=> history.push('/')}
            />
    );
   }
};

const mapStateToProps = (state, ownProps ) => {
    return {
        stream: state.streams[ownProps.match.params.id]

    }
}

export default connect(mapStateToProps, { fetchStream })(StreamDelete);