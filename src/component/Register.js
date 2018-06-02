import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      fullname: '',
      email:'',
      password: '',

    };
  }

  in() {
      console.log(this.state.username)
      this.setState({
          username:this.refs.username.value,
          fullname:this.refs.fullname.value,
          email:this.refs.email.value,
          password:this.refs.password.value,
      })
  }

  simpan(){
      axios.post('http://localhost:7000/data/reg', {
        username: this.state.username,
        fullname: this.state.fullname,
        email: this.state.email,
        password: this.state.password
      }).then((result) => {
          console.log(result)
          swal('successed')
      })
  }

  render() {
    return (
        <div className="container-fluid" style={{marginTop:'20px'}}>
          <div className="col-lg-6">
              <form>
                <input className="form-control" ref="username" type="text" placeholder="username" style={{width:'350px'}} onInput={()=>{this.in();}} required/><br></br>
                <input className="form-control" ref="fullname" type="text" placeholder="fullname" style={{width:'350px'}} onInput={()=>{this.in();}} required/><br></br>
                <input className="form-control" ref="email" type="text" placeholder="email" style={{width:'350px'}} onInput={()=>{this.in();}} required/><br></br>
                <input className="form-control" ref="password" type="password" placeholder="password" style={{width:'350px'}} onInput={()=>{this.in();}} required/><br></br>  
              </form>
                <button type="submit" className="btn btn-outline-warning" style={{width:'100px'}} onClick={()=>{this.simpan();}}>Register</button>&nbsp;&nbsp;  
            </div> 
        </div>
    );
  }
}
export default Register;