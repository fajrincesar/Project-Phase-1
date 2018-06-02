import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Flip, Fade, Rotate, Zoom, Bounce, Roll } from 'react-reveal';
import swal from 'sweetalert';
import style from './style.css';
import Register from './Register';
import avatar from './../pict/cup.jpeg';


class Login extends Component {
    constructor() {
        super();
        this.state = { username: '',password:''}
    }

    inputlogin() {
        console.log(this.state.username)
        this.setState({
            username: this.refs.username.value,
            password: this.refs.password.value,            
        });
    }

    checklogin() {
        axios.post('http://localhost:7000/data/log', {
            username: this.state.username,
            password: this.state.password            
        }).then((result) => {
            console.log(result);
            localStorage.setItem('jwtToken', result.data.token);
            this.props.history.push('/Content');
        }).catch(err =>{
            if (err.response.status === 401){
                this.props.history.push('/Login');
                swal('your username or password is incorrect')
            }   
        })

    }

  render() {
    return (
    <Fade>
      <div className="container">
        <center>
            <div className="box" style={{marginTop:'150px'}}>  
                <form>
                    <img src={avatar} className="avatar" alt="avatar" />
                    <p>Please sign in first</p>
                    <input className="form-control" ref="username" type="text" placeholder="username" style={{width:'250px'}} onInput={()=>{this.inputlogin();}} required/><br></br>
                    <input className="form-control" ref="password" type="password" placeholder="password" style={{width:'250px'}} onInput={()=>{this.inputlogin();}} required/><br></br>
                </form>
                <button type="submit" className="btn btn-outline-warning" style={{width:'100px'}} onClick={()=>{this.checklogin();}}>Sign In</button>&nbsp;&nbsp;     
                <br/><br/> <a id="reg" className="mymodal" data-toggle="modal" data-target="#tomodal">or sign up here</a>
            </div>
        </center>
        <div className="modal fade" id="tomodal" tabindex="-1" role="dialog" aria-labelledby="tomodalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h6 className="modal-title" id="exampleModalLabel">Complete this form to register</h6>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <Register />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-warning" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </Fade>
    );
  }
}

export default Login;