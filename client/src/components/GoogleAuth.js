import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signIn, signOut } from '../actions/index'

class GoogleAuth extends Component {


    // when ever page renders the client connects with the google OAuth feature
    componentDidMount() {
        window.gapi.load('client:auth2', ()=> {
            window.gapi.client.init({
                clientId: '267461606910-tb7g2t4p0vop6jtr5tcdg5l23129i8ru.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                //on giving the configurations above, we get some callback object
                this.auth = window.gapi.auth2.getAuthInstance();
                //this.auth is defined above line 
                this.onAuthChange(this.auth.isSignedIn.get())
                //listening for any change on oath signin/signout feature
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        });
    }
    //this renders the authentication state to update as a realtime basis
    onAuthChange = (isSignedIn) => {
        if(isSignedIn) {
            this.props.signIn();
        } else {
            this.props.signOut()
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }
    // renders the UI with display of buttons
    renderAuthButton = () => {
        if(this.props.isSignedIn === null ) {
            return null
        } else if (this.props.isSignedIn ) {
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

const mapStateToProps = ( state ) => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}


export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);