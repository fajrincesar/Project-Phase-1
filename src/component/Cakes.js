import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import style from './style.css';
import pic4 from './../pict/caros4.png';
import pic5 from './../pict/caros5.jpg';
import pic6 from './../pict/caros6.jpg';
import Barchoco from './Barchoco';
import Cookies from './Cookies';
import Dimens from './Dimens';
import Cakesnew from './Cakesnew';
import Form from './Form';

class Cakes extends Component {
    constructor(){
        super();
        this.state={
            prd:[ ]
        };
    }
    componentDidMount(){
        axios.get('http://localhost:7000/data/cakes')
        .then((getdata)=>{
          console.log(getdata.data);
          this.setState({
            prd:getdata.data,
          })
        })
      };

      crossdata = ( id, nj, hr) => {
        var x = localStorage.getItem('jwtToken')
        console.log(x)
        if (x === null){
            this.props.history.push('/Login');
        }
        else {
        var nmb = id
        var item = nj
        var price = hr;
        var m=JSON.parse(atob(x.split('.')[1]))
        var id_user = m[0].id_user
        axios.post('http://localhost:7000/data/xpost', { nmb, item, price, id_user })
          .then((res) => {
            console.log('Data berhasil dimasukan ke addtocart')
            this.props.history.push('/Form');
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
    render() {
        const data=this.state.prd.map((item, index)=>{
            var id=item.id_item;
            var nj =item.nama_item;
            var hr =item.harga;
            var desk =item.deskripsi;
            var img = item.gambar;
        return <div key={index}  style={{fontSize:"10px"}}>
                    <div className="col-lg-12 col-md-12 mb-4">
                         <div className="card h-100" id="card-item">
                            <a href="#"><img class="card-img-top" src={img} alt="item-shop1" style={{width:"265px", height:"265px"}}></img></a>
                                <div className="card-body" style={{padding:"5px"}}>
                                    <h4 className="card-title">
                                        <a id="titlecard">{nj}</a>
                                    </h4>
                                    <h5 id="titlecard">IDR {hr}</h5>
                                    <p className="card-text" id="titlecard">{desk}</p>
                                    <button className="btn btn-outline-warning my-2 my-sm-0" onClick={()=>{this.crossdata(id, nj, hr)}}>Buy</button>
                                </div>
                                <div className="card-footer">
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                        </div>
                    </div>
                </div>
        });
      return (
        <div>
            <div className="fluid-container" style={{marginTop:"50px", marginLeft:"10px"}}>
                <div className="row">
                    <div className="col-md-3">
                        <h1 className="my-4" style={{fontFamily:"Caveat"}}>Biscuit de fortune</h1>
                            <div className="list-group">
                                <Link to="/Cakesnew" className="list-group-item">What's New</Link>
                                <Link to="/Cakes" className="list-group-item">Birthday Cakes</Link>
                                <Link to="/Dimens" className="list-group-item">3D Cakes</Link>
                            </div>
                    </div>&nbsp;&nbsp;  
                    <div className="col-md-8">
                        <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                                <div className="carousel-inner" role="listbox">
                                    <div className="carousel-item active">
                                        <img className="d-block img-fluid" src={pic4} alt="First slide"></img>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block img-fluid" src={pic5} alt="Second slide"></img>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block img-fluid" src={pic6} alt="Third slide"></img>
                                    </div>
                                </div>
                                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                        </div>
                    </div>
                </div>
              <div className="row" style={{marginLeft:"350px"}}>{data}</div>
            </div>
        </div>
      )
    }
}
export default Cakes;