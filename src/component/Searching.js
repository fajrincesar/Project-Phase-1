import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import style from './style.css';

class Searching extends Component {
    constructor(){
        super();
        this.state={nama:'', itm:[]};
    }
    input=()=>{
        this.setState({
            nama:this.refs.nama.value,
        });
    }
    searching=()=>{
        const search=this.state.nama;
        axios.get('http://localhost:7000/data/'+search)
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
        })
      return (  
        <div>
            <div className="fluid-container" style={{marginTop:"50px", marginLeft:"10px"}}>
                <div className="row">
                    <div className="col-md-3">
                        <div className="form-inline" style={{marginTop:"30px"}} >
                                <input className="form-control" ref="nama" type="text" placeholder="find me.." style={{width:'250px'}} onInput={()=>{this.input();}}/>&nbsp;&nbsp;                 
                                <button type="submit" className="btn btn-warning" style={{width:'50px'}} onClick={()=>{this.searching();}}><i className="fas fa-search"></i></button>
                        </div><br/>
                        <div className="widget_wrap" style={{width:"320px", height:"797px", display:"inline-block"}}>
                            <iframe src="https://www.zomato.com/widgets/res_search_widget.php?city_id=74&theme=red&widgetType=small&sort=popularity"
                            style={{position:"relative", width:"100%", height:"100%", border:"0", frameborder:"0"}}></iframe>
                        </div> 
                    </div>&nbsp;&nbsp;  
                    <div>
                        <div className="row" style={{marginLeft:"30px", marginTop:"90px"}}>{data}</div>     
                    </div>
                </div>
            </div>
        </div>
      )
    }
}
export default Searching;