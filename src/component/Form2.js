import React, { Component } from 'react';
import swal from 'sweetalert';
import axios from 'axios';

class Form2 extends Component {
  constructor(){
    super();
    this.state={nama:'',
    email:'',
    address:'',
    city:'',
    nat:'',
    nohp:'',
    namecard:'',
    ccnumber:'',
    exprd:'',
    cvvnumber:'',
    exprdyr:'',
    stud:[]};
  }
  click=()=>{ 
    this.setState({
      nama:this.refs.nama.value, 
      email:this.refs.email.value,
      address:this.refs.address.value,
      city:this.refs.city.value,
      nat:this.refs.nat.value,
      nohp:this.refs.nohp.value,
      namecard:this.refs.namecard.value,
      ccnumber:this.refs.ccnumber.value,
      exprd:this.refs.exprd.value,
      cvvnumber:this.refs.cvvnumber.value,
      exprdyr:this.refs.exprdyr.value,
    });
  }
  //  searching=()=>{
  //    axios.get('http://localhost:4231/data/get')
  //    .then((ambildata)=>{
  //      console.log(ambildata.data);
  //       this.setState({
  //         stud:ambildata.data,
  //       })
  //    })
  //   };
  
   muat=()=>{
    var tkn = localStorage.getItem('jwtToken')
    console.log(tkn)
    if (tkn === null){
        this.props.history.push('/Login');
    }
    else {
    var m=JSON.parse(atob(tkn.split('.')[1]))
    var idu = m[0].id_user
    console.log('iduser',idu)
    axios.post('http://localhost:7000/trx/checkout', 
    { 
      nama: this.state.nama,
      email: this.state.email,
      address: this.state.address,
      city: this.state.city,
      nat: this.state.nat,
      nohp: this.state.nohp,
      namecard: this.state.namecard,
      ccnumber: this.state.ccnumber,
      exprd: this.state.exprd,
      cvvnumber: this.state.cvvnumber,
      exprdyr: this.state.exprdyr,
      id_user: idu,
    }).then((res) => {
        console.log(res); 
        swal({
          title: "Sent!",
          text: "",
          icon: "success",
          button: "Ok!",
        });
        // window.location.reload()
    })
    .catch((err) => {
        console.log(err);
    });
  }
}
  render() {
    //  const data=this.state.stud.map((item, index)=>{
    //    var nm =item.nama
    //    var hp=item.nohp
    //    var em=item.email
    //    var ad=item.alamat
    //    var city=item.kota 
    //    return <tbody><td>{nm}</td> <td>{hp}</td> <td>{em}</td> <td>{ad}</td> <td>{city}</td></tbody>
    //       });    
    return (
                <div>
                    <div className="col-lg-6">
                          <h3><b>Billing Address</b></h3>
                            <form>
                              <label for="fname"><i className="fa fa-user"></i>&nbsp;Full Name</label>
                              <input className="form-control" ref="nama" type="text" placeholder="full name" style={{width:'450px'}} onInput={()=>{this.click();}} required/><br></br>
                              <label for="email"><i className="fas fa-envelope"></i>&nbsp;email</label>
                              <input className="form-control" ref="email" type="text" placeholder="email" style={{width:'450px'}} onInput={()=>{this.click();}} required/><br></br>
                              <label for="adr"><i className="fas fa-address-book"></i>&nbsp;Address</label>
                              <input className="form-control" ref="address" type="text" placeholder="address" style={{width:'450px'}} onInput={()=>{this.click();}} required/><br></br>
                              <label for="city"><i className="fas fa-university"></i>&nbsp;City</label>
                              <input className="form-control" ref="city" type="text" placeholder="city" style={{width:'450px'}} onInput={()=>{this.click();}} required/><br></br>
                              <label for="sta">State</label>
                              <input className="form-control" ref="nat" type="text" placeholder="State" style={{width:'450px'}} onInput={()=>{this.click();}} required/><br></br>
                              <label for="tlp"><i className="fas fa-phone-square"></i>&nbsp;Phone Number</label>
                              <input className="form-control" ref="nohp" type="number" placeholder="phone number" style={{width:'450px'}} onInput={()=>{this.click();}} required/><br></br>
                              
                              <h3><b>Payment</b></h3>
                              <h6>Accepted Cards</h6>
                              <p className="row" style={{paddingLeft:"15px"}}><i className="fab fa-cc-visa"></i>&nbsp;<i className="fab fa-cc-amex"></i>&nbsp;<i className="fab fa-cc-mastercard"></i>&nbsp;<i className="fab fa-cc-discover"></i></p>
                              <label for="cname">Name on Card</label>
                              <input className="form-control" ref="namecard" type="text" placeholder="John Wick" style={{width:'450px'}} onInput={()=>{this.click();}} required/><br></br>
                              <label for="ccnum">Credit Card Number</label>
                              <input className="form-control" ref="ccnumber" type="number" placeholder="1111-2222-3333-4444" style={{width:'450px'}} onInput={()=>{this.click();}} required/><br></br>
                              <label for="exp">Exp. Month</label>
                              <input className="form-control" ref="exprd" type="text" placeholder="December" style={{width:'450px'}} onInput={()=>{this.click();}} required/><br></br>
                              <label for="cvv">CVV</label>
                              <input className="form-control" ref="cvvnumber" type="number" placeholder="433" style={{width:'450px'}} onInput={()=>{this.click();}} required/><br></br>
                              <label for="expy">Exp. Year</label>
                              <input className="form-control" ref="exprdyr" type="number" placeholder="2018" style={{width:'450px'}} onInput={()=>{this.click();}} required/><br></br>
                            </form><br></br>
                            <button type="submit" className="btn btn-outline-warning" style={{width:'100px'}} onClick={()=>{this.muat();}}>Send</button>&nbsp;&nbsp;
                            {/* <button type="submit" className="btn btn-outline-warning" style={{width:'120px'}} onClick={()=>{this.searching();}}>See ur data</button><br/><br/> */}
                    </div>              
                </div>
    );
  }
}

export default Form2;