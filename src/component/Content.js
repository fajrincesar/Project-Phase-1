import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import jv from './../pict/cake2.jpg';
import bar from './../pict/cup.jpeg';
import candies from './../pict/candies.jpg';
import style from './style.css';
import Events from './Events';
import Galery from './Galery';
import Profile from './Profile';

class Content extends Component {
  render() {
    return (
      <div>
        <div className="fluid-container">
          <div className="jumbotron col-lg-12 col-md-12 col-sm-12 mb-4" style={{textAlign:'center', marginTop:'50px', height:'600px', width:'1350px'}} >
            <h2 className="display-3" style={{color:"white", fontFamily:"Caveat"}}>"There is nothing better than a friend, unless it is a friend with Chocolates."</h2>
              <h2 className="lead"></h2>
            <hr class="my-4"></hr>
              <p class="lead">
                <a class="btn btn-outline-warning btn-lg" href="#" role="button">Learn more</a>
              </p>
          </div>
        </div>

        <div>
        <Profile />
        </div>

            <section id="About">
              <div className="block-3-container section-container what-we-do-container" style={{marginTop:'90px'}}> 
              <div className="container">
                  <div className="row">
                      <div className="col-sm-12 block-3 section-description">
                          <h2>What we sell</h2>
                          <div className="divider-1"><span></span></div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                          </p>
                      </div>
                  </div>
                  <div className="row" style={{textAlign:'center', marginTop:'90px'}}>
                      <div className="col-md-4 block-4-box">
                        <div className="block-4-box-icon">
                          <Link to="/Cakes"><img src={jv} className="img-responsive rounded-circle center-block"></img></Link>
                          {/* <span aria-hidden="true"><i className="fab fa-google fa-7x"></i></span> */}
                        </div>
                          <h3>Cakes</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                      </div>
                      <div className="col-md-4 block-4-box">
                        <div className="block-4-box-icon">
                          <Link to="/Barchoco"><img src={bar} className="img-responsive rounded-circle center-block"></img></Link>  
                        </div>
                          <h3>Cupcakes</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                      </div>
                      <div className="col-md-4 block-4-box">
                        <div className="block-4-box-icon">
                          <Link to="/Cookies"><img src={candies} className="img-responsive rounded-circle center-block"></img></Link>
                        </div>
                          <h3>Cookies</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                      </div>  
                  </div>
              </div>
            </div>
            <br/>
            <br/> 
              <div>
                <Events />
              </div>
            </section>
            <br />
            <br />
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                  <h2 className="display-3" style={{color:"white", fontFamily:"Caveat"}}>Created with love and passion for French patisserie</h2>
                  <p className="lead"></p>
                </div>
            </div>
            <br/>
            <br/> 
              <div>
              <Galery />
            </div>
      </div>
    );
  }
}

export default Content;