import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions/index';

class StreamList extends React.Component {

    componentDidMount(){
        this.props.fetchStreams();
    }

    renderList() {
        return this.props.streams.map(stream => (
            <div className="item" key={stream.id}>
                <i className="large middle aligned icon camera" />
                <div className="content">
                    {stream.title}
                    <div className="description">{stream.description}</div>
                </div>
            </div>
        ))
    }

    render(){
        console.log(this.props.streams)
    return (
        <div>
            <h2>Streams</h2>
            <div className="ui celled list">{this.renderList()}</div>
        </div>
    );
   }
};

const mapStateToProps = (state) => {
    //using Object.values to convert List of streams from object to array
    return { streams: Object.values(state.streams )}
}

export default connect(mapStateToProps,{ fetchStreams })(StreamList);