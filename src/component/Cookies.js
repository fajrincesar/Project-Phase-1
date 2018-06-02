import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import pic1 from './../pict/caros.jpg';
import pic2 from './../pict/caros2.jpg';
import pic3 from './../pict/caros3.jpg';

class Cookies extends Component {
    constructor(){
        super();
        this.state={
            itm:[]
        };
    }
    componentDidMount(){
        axios.get('http://localhost:7000/data/cookies')
        .then((getdata)=>{
          console.log(getdata.data);
          this.setState({
            itm:getdata.data,
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
        const data=this.state.itm.map((item, index)=>{
            var id=[item.id_item];
            var nj =[item.nama_item];
            var hr =[item.harga];
            var desk =[item.deskripsi];
            var pic = [item.gambar];
        return <div key={index}  style={{fontSize:"10px"}}>
                    <div className="col-lg-12 col-md-12 mb-4">
                         <div className="card h-100" id="card-item">
                            <a href="/"><img className="card-img-top" src={pic} alt="item-shop3" style={{width:"225px", height:"225px"}}></img></a>
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
        })
      return (  
        <div>
            <div className="fluid-container" style={{marginTop:"50px", marginLeft:"10px"}}>
                <div className="row">
                    <div className="col-md-3">
                        <h1 className="my-4" style={{fontFamily:"Caveat"}}>Biscuit de fortue</h1>
                            <div className="list-group">
                                <Link to="/Cakes" className="list-group-item">Previous page</Link>
                                <Link to="/Barchoco" className="list-group-item">Cupcakes</Link>
                                <Link to="/Dimens" className="list-group-item">3D Cakes</Link>
                            </div><br/>
                            <div className="widget_wrap" style={{width:"320px", height:"797px", display:"inline-block"}}>
                                <iframe src="https://www.zomato.com/widgets/res_search_widget.php?city_id=74&theme=red&widgetType=small&sort=popularity"
                                style={{position:"relative", width:"100%", height:"100%", border:"0", frameborder:"0"}}></iframe>
                            </div>
                    </div>&nbsp;&nbsp;  
                    <div className="col-md-8">
                        <div id="carouselExampleIndicators" class="carousel slide my-4" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                                <div className="carousel-inner" role="listbox">
                                    <div className="carousel-item active">
                                        <img className="d-block img-fluid" src={pic1} alt="First slide"></img>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block img-fluid" src={pic2} alt="Second slide"></img>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block img-fluid" src={pic3} alt="Third slide"></img>
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
                        <div className="row" style={{marginLeft:"30px"}}>{data}</div>
                    </div>
                </div>
            </div>
        </div>
      )
    }
}
export default Cookies;