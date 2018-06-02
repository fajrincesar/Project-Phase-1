import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import style from './style.css';


class Nav extends Component {
      
    logout = () => {
        localStorage.removeItem('jwtToken');
      }
    render() {
        var out = localStorage.getItem('jwtToken');
        var stat = false
        var statue = false
        var modl = false
        if (out !== null){
            stat=true
            statue=false
        }else{
            stat=false
            statue=true
        }
        const label = stat ? 'Logout' : 'Login'
        const label2 = statue ? 'nav-link disabled' : 'nav-link enabled'
      return (
        <div>
            <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top" style={{padding:"10px"}}>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link to="/Content" className="navbar-brand" style={{color:"silver", fontFamily:"Caveat", fontSize:"25px"}}>Biscuit de fortune</Link>&nbsp;&nbsp;
                <div className="collapse navbar-collapse navbar-right"  id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/Content" className="nav-link" style={{color:'silver'}}>Home<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Cakes" className="nav-link" style={{color:'silver'}}>Cakes</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Barchoco" className="nav-link" style={{color:'silver'}}>Cupcakes</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Cookies" className="nav-link" style={{color:'silver'}}>Cookies</Link>
                        </li>
                        <li className="nav-item">
                        </li>
                    </ul>
                        <Link to="/Searching" style={{padding:"8px"}}><i className="fas fa-search"></i>&nbsp;Find me..</Link>
                        <Link to="Form" className={label2}><i className="fas fa-shopping-cart"></i>&nbsp;go to cart</Link>
                        <Link to="/Login" style={{padding:"8px"}} onClick={this.logout}><i className="fa fa-user"></i>&nbsp;{label}</Link>&nbsp;
                </div>
            </nav>
        </div>
      )
    }
}
export default Nav;