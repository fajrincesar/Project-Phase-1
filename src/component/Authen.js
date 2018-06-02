import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import { providerGoogle, providerFacebook, auth } from '../Fire';
import Content from './Content';

class Authen extends Component {
    constructor(){
        super();
        this.state={user: null}
    }
    async loginGoogle(){
        const result = await auth().signInWithPopup(providerGoogle);
        this.setState({user:result.user});
    }
    async loginFacebook(){
        const result = await auth().signInWithPopup(providerFacebook);
        this.setState({user:result.user});
    }
    async logout(){
        await auth().signOut()
        this.setState({user: null});
    }
    
  render() {
    return (
      <div>
        <center style={{textAlign:'center', marginTop:'90px'}}>
          <p>{this.state.user ? `Hi, ${this.state.user.displayName}!` : 'please login'}</p> 
            <button className="btn btn-danger" onClick={this.loginGoogle.bind(this)}>
                Login With Google
            </button><br/><br/>  
            <button className="btn btn-primary" onClick={this.loginFacebook.bind(this)}>
                Login With Facebook
            </button><br/><br/>&nbsp;
            <button className="btn btn-primary" onClick={this.logout.bind(this)}>
                Logout
            </button>
        </center>
      </div>
    );
  }
}

export default Authen;
