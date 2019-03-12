import React, { Component } from 'react';

class GoogleAuth extends Component {

    state = {
        isSignedIn: null
    }
    componentDidMount() {
        window.gapi.load('client:auth2', ()=> {
            window.gapi.client.init({
                clientId: '267461606910-tb7g2t4p0vop6jtr5tcdg5l23129i8ru.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get()})
            })
        });
    }

    renderAuthButton = () => {
        if(this.state.isSignedIn === null ) {
            return <div> I dont know if we are signed In</div>
        } else if (this.state.isSignedIn ) {
            return<div> I am signed In </div>
        } else {
            return <div> I am not signed In </div>
        }
    }


    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        );
    }
}

export default GoogleAuth;