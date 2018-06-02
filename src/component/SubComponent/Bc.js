import React, { Component } from 'react';
import axios from 'axios';
import style from './style.css';

class Bc extends Component {
    constructor(){
        super();
        this.state={
            prd:[]
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
    render() {
        const data=this.state.prd.map((item, index)=>{
            var nj =[item.nama_item];
            var pr =[item.harga];
            var desk =[item.deskripsi];
            var img = [item.gambar];
        return <div key={index}  style={{fontSize:"10px"}}>
                    <div className="col-lg-12 col-md-12 mb-4">
                         <div className="card h-100" id="card-item">
                            <a href="#"><img class="card-img-top" src={img} alt="item-shop1" style={{width:"220px", height:"220px"}}></img></a>
                                <div className="card-body"style={{padding:"5px"}} >
                                    <h4 className="card-title">
                                        <a id="titlecard">{nj}</a>
                                    </h4>
                                    <h5 id="titlecard">IDR {pr}</h5>
                                    <p className="card-text" id="titlecard">{desk}</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                                </div>
                        </div>
                    </div>
                </div>
        });
      return (
            <div className="row" style={{marginLeft:"350px"}}>{data}</div>
         )
    }
}
export default Bc;