import React, { Component } from 'react';
import gab from './../pict/duke.jpg';

class Card extends Component {
    render() {
      return (
        <div>
          <div className="row" style={{margin:'50px'}}>
                        <div className="col-lg-4 col-md-6 mb-4">
                                <div className="card h-100" style={{width:'18rem'}}>
                                    <img className="card-img-top" src={gab} alt="Card image cap"></img>
                                        <div className="card-block">
                                            <h4 className="card-title" >Card title</h4>
                                            <h5>$24.99</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>  
                                        <div className="card-footer">
                                            <small className="text-muted">Rating &#9733; &#9733; &#9733; &#9734; &#9734;</small>
                                        </div>  
                                </div>
                        </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100" style={{width:'18rem'}}>
                            <img className="card-img-top" src={gab} alt="Card image cap"></img>
                            <div className="card-block">
                                <h4 className="card-title">Card title</h4>
                                <h5>$24.99</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>  
                            <div className="card-footer">
                                <small className="text-muted">Rating &#9733; &#9733; &#9733; &#9734; &#9734;</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100" style={{width:'18rem'}}>
                            <img className="card-img-top" src={gab} alt="Card image cap"></img>
                            <div className="card-block">
                                <h4 className="card-title">Card title</h4>
                                <h5>$24.99</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>  
                            <div className="card-footer">
                                <small className="text-muted">Rating &#9733; &#9733; &#9733; &#9734; &#9734;</small>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
      );
    }
  }
  
  export default Card;
  