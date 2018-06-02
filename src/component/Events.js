import React, { Component } from 'react';
import { Fade } from 'react-reveal';
import bar from './../pict/mrk.png';
import awd from './../pict/awrd.png'
import wks from './../pict/wrk.png'

class Events extends Component {
    render() {
      return (
        <Fade>
        <div className="container">
            <h2 style={{textAlign:"center", marginTop:'90px'}}>Events</h2><br/>
            <div className="row" style={{textAlign:'center'}}>
                    <div className="col-md-4 block-4-box">
                        <div className="block-4-box-icon">
                            <img src={bar} alt="image1" className="img-responsive img-rounded center-block" style={{width:"225px", height:"225px"}}></img>
                            {/* <span aria-hidden="true"><i className="fab fa-google fa-7x"></i></span> */}
                        </div><br/>
                            <h5>Chocolate Market</h5>
                            <h6 id="eventext">June 2nd, 2018.</h6>
                            <p id="eventext">In the marble hall you can taste and buy the best fine flavor choco and related products. </p>
                            <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                    <div className="col-md-4 block-4-box">
                        <div className="block-4-box-icon">
                            <img src={awd} alt="image2" className="img-responsive img-rounded center-block" style={{width:"225px", height:"225px"}}></img>  
                        </div><br/>
                            <h5>Chocolate Awards</h5>
                            <h6 id="eventext">March 12th, 2018.</h6>
                            <p id="eventext">a ceremony for the prize winner of international chocolate awards, and a presentation of their products. </p>
                            <small className="text-muted">Last updated  24 days ago</small>
                        </div>
                    <div className="col-md-4 block-4-box">
                        <div className="block-4-box-icon">
                            <img src={wks} alt="image3" className="img-responsive img-rounded center-block" style={{width:"225px", height:"225px"}}></img> 
                        </div><br/>
                            <h5>Cacao Ceremonny</h5>
                            <h6 id="eventext">April 17th, 2018.</h6>
                            <p id="eventext">Cacao or theobroma is the food of the gods. during the event cacao ceremonies will get you to higher spirits. </p>
                            <small className="text-muted">Last updated 10 hours ago</small>
                    </div>  
            </div>
        </div>
        </Fade>
      )
    }
}
export default Events;