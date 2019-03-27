import React from 'react';
import Modal from '../Modal';
import history from '../../history';

const StreamDelete = () => {

    const actions =(
        <>
            <button className="ui button negative">Delete</button>
            <button className="ui button">Cancel</button>
        </>
    )
    return (
        <div>
            StreamDelete
            <Modal 
                title='DeleteStream'
                content="Are you sure you want to delete the stream ?"
                actions={actions}
                onDismiss={()=> history.push('/')}
            />
        </div>
    );
};

export default StreamDelete;