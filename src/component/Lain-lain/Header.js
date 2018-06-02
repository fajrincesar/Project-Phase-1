import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './style.css';

class Header extends Component {
  render() {
    return (
      <div>
           <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

                <Link to="/Content" className="navbar-brand" style={{color:'silver'}}>Chocoreto</Link>
                <div className="collapse navbar-collapse pull-sm-right justify-content-end" id="navbarToggler-1">
                    <ul className="navbar-nav mt-2 mt-md-0">
                        <li className="nav-item active">
                            <Link to="/Content" className="nav-link" style={{color:'silver'}}>Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/About" className="nav-link" style={{color:'silver'}}>Cakes</Link>
                            {/* <a href="#About" className="nav-link" style={{color:'silver'}}>About</a> */}
                        </li>
                        <li className="nav-item">
                            <Link to="/Footer" className="nav-link" style={{color:'silver'}}>Bar Chocolate</Link>
                        </li>       
                        <li className="nav-item">
                            <Link to="/Authen" className="nav-link" style={{color:'silver'}}>Contact</Link>
                        </li>&nbsp;&nbsp;
                        <li className="nav-item">
                            <form className="form-inline md-form-mt-0">
                                <input className="form-control mr-sm-2 mb-0 text-blue" type="text" placeholder="search" aria-label="search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </li>
                        <li className="nav-item">
                            <Link to="/Authen" className="btn btn-outline-white btn-outline"><i className="fa fa-user"></i>Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
         {/* <ul>
             <li><Link to="/">Timeline</Link></li>
             <li><Link to="/Header">Header</Link></li>
             <li><Link to="/Content">Content</Link></li>
             <li><Link to="/Footer">Footer</Link></li>
         </ul>*/}
      </div>
    );
  }
}

export default Header;