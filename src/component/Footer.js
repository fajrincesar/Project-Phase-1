import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './style.css';



class Footer extends Component {
    render() {
      return (
        <div>
            <footer className="probootstrap-footer" style={{backgroundColor:"black", marginTop:"70px", padding:"100px"}}>
                <div className="container">
                    <div className="row mb-3">
                        <div className="col-md-3">
                            <h3 className="heading">Latest Blog</h3>
                            <ul className="list-unstyled probootstrap-footer-recent-post">
                                <li>
                                <a href="#"><span className="date">November 15, 2017</span> The practice of medicine is a lot like parenting </a>
                                </li>
                                <li>
                                <a href="#"><span className="date">November 15, 2017</span>Physicians: Want to overcome burnout? Start studying business. </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h3 className="heading">Head Office</h3>
                            <p className="mb-5">98 West 21th Street, Suite 721 New York NY 10016</p>
                            <h3 className="heading text-white">Open</h3> 
                            <p>
                                Mon-Fri 7:30-18:00 <br/>
                                Sat 7:30-18:00 <br/>
                                Sun 7:30-18:00
                            </p>
                        </div>
                        <div className="col-md-3">
                            <h3 className="heading">Quick Links</h3>
                            <ul className="list-unstyled probootstrap-footer-links">
                                <li><Link to="/Content">Home</Link></li>
                                <li><Link to="/Cakes">Cakes</Link></li>
                                <li><Link to="/Barchoco">Cupcake</Link></li>
                                <li><Link to="Cookies">Cookies</Link></li>
                                
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h3 className="heading">Follow us</h3>
                            <ul className="list-inline">
                                <li className="list-inline-item"><a href="#"><i className="fab fa-facebook fa-1x"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fab fa-twitter fa-1x"></i></a></li>
                                <li className="list-inline-item"><a href="#"><i className="fab fa-instagram fa-1x"></i></a></li>
                            </ul>
                        </div>
                    </div>
                
                    <div className="row probootstrap-copyright">
                        <div className="col-md-12">
                            <p><small>&copy; 2017 <a href="https://uicookies.com/" target="_blank">uiCookies Health</a>. All Rights Reserved. Designed &amp; Developed by <a href="https://uicookies.com/" target="_blank">uicookies.com</a> (please don't remove credit, see <a href="https://uicookies.com/license/" target="_blank">license</a>)  <br/> Demo Images <a href="https://pexels.com/">Pexels</a> </small></p>
                        </div>
                </div>
            </div>
        </footer>
    </div>
      )
    }
}
export default Footer;