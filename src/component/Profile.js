import React, { Component } from 'react';
import style from './style.css';
import ck from './../pict/pict3.jpg';
import kc from './../pict/pict2.jpg';


class Profile extends Component {
    render() {
      return (
        <div>
            <section className="pb_section" id="section-about">
                <div className="container" id="profile">
                    <div className="row">
                    <div className="col-lg-8 mb-5">
                        <div className="row">
                        <div className="col">
                            <p><img src={ck} alt="Instant Image" className="img-fluid"></img></p>
                        </div>
                        <div className="col">
                            <p><img src={kc} alt="Instant Image" className="img-fluid"></img></p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 pl-lg-5 pl-lg-0">
                        <h2 className="mb-4 text-uppercase pb_letter-spacing-2">Our Heritage</h2>
                        <p style={{fontSize:"140%", fontFamily:"Rajdhani"}} >Fortune Cookie's philosophy is founded on the belief that an innovative product line of superior chocolates and cakes can be successfully marketed to an increasingly discriminating clientele,
                            while still affordable for all to enjoy. These superior quality chocolates and cakes keep Fortune Cookies on the leading edge of the fine pastry market. in Indonesia. 
                            We will continue to set the standard for the finest pastries anywhere!.</p>

                        {/* <p><a href="#section-menu" className="smoothscroll text-danger text-uppercase">See our menu <i className="ion-arrow-down-c"></i></a></p> */}
                    </div>
                    </div>
                </div>
            </section>
        </div>
      )
    }
}
export default Profile;