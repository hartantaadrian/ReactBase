
import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions'

class GoogleAuth extends React.Component {
   

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '546734376798-hb56vhdbv6qctara2d33t28o167rla3a.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthchange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthchange);
            });
        });
    }

    onAuthchange = (isSignedIn) => {
        //this.setState({ isSignedIn: this.auth.isSignedIn.get() })
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }

    }

    onSignInClick = () => {
        this.auth.signIn();
    }
    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null
        }
        else if (this.props.isSignedIn) {
            return (
                <button className="ui red google button " onClick={this.onSignOutClick}>
                    <i className="google icon" style={{ width: '100%' }} >Sign out</i>
                </button>
            )
        }
        else {
            return (
                <button className="ui google plus button" onClick={this.onSignInClick}>
                    <i className="google icon" style={{ width: '100%' }}> Sign in</i>
                </button>
            )
        }
    }

    render() {
        return <div >{this.renderAuthButton()}</div>;
    }
}

const mapStateToProps = (state) =>{
    return{isSignedIn:state.auth.isSignedIn}
}

export default connect(
    mapStateToProps, {
        signIn,signOut
    }
)(GoogleAuth);