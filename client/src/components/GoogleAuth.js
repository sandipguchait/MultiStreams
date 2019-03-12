import React, { Component } from 'react';

class GoogleAuth extends Component {

    // initial state to hold sign in value
    state = {
        isSignedIn: null
    }

    // when ever page renders the client connects with the google OAuth feature
    componentDidMount() {
        window.gapi.load('client:auth2', ()=> {
            window.gapi.client.init({
                clientId: '267461606910-tb7g2t4p0vop6jtr5tcdg5l23129i8ru.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                //on giving the configurations above, we get some callback object
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get()})
                //listening for any change on oath signin/signout feature
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        });
    }
    //this renders the authentication state to update as a realtime basis
    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get()})
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }
    // renders the UI with display of buttons
    renderAuthButton = () => {
        if(this.state.isSignedIn === null ) {
            return null
        } else if (this.state.isSignedIn ) {
            return (
                <button onClick={()=> this.onSignOutClick()} className=" ui red google button">
                    <i className="google icon"/>
                    Sign Out
                </button>
            )
        } else {
            return (
                <button onClick={()=>this.onSignInClick()} className="ui blue google button">
                    <i className=" google icon"/>
                    Sign In With Google
                </button>
            )
        }
    }


    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        );
    }
}

export default GoogleAuth;