import React, { Component } from 'react';
import swal from 'sweetalert';
import axios from 'axios';
import style from './style.css';
import Form2 from './Form2';


class Form extends Component {
  constructor(){
    super();
    this.state={stud:[], totpr:0};
  }
  
  componentDidMount(){
    var token = localStorage.getItem('jwtToken');
    var m=JSON.parse(atob(token.split('.')[1]))
    var ids = m[0].id_user
    axios.get('http://localhost:7000/boom/cart/'+ids)
    .then((ambildata)=>{
      // const total = 0;
      // for (var i=0; i<prc.length; i++){
      //      total+= prc[i]
      //    }
      console.log(ambildata);
      // this.setState({totpr:total})
       this.setState({
         stud:ambildata.data,
       })
    })
  };
  
  delete = (rem)=>{
    axios.delete('http://localhost:7000/boom/'+rem)
    .then(res=>{
        console.log(res)
        window.location.reload()
        swal('item has been remove')
    })
}
  render() {
     const data=this.state.stud.map((item, index)=>{
       var nid=item.nmb
       var ck=item.item
       var prc=item.price
       var rem=item.no   
       var price=this.state.totpr
       return <tbody key={index}><td>{nid}</td> <td>{ck}</td> <td>IDR {prc}</td><a className="frm" onClick={() => { this.delete(rem) }}><i className="fas fa-trash-alt"  ></i></a> </tbody>
          });
          
    return (
          <div>
              <div className="container" style={{marginTop:"120px"}}>
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#home" role="tab"><i className="fas fa-shopping-cart"></i> Cart Detail</a>
                  </li>
                  <li className="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#profile" role="tab"><i className="fas fa-credit-card"></i> Transaction</a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="home" role="tabpanel">
                      <div className="row" >
                        <table className="table" style={{marginLeft:"12px"}}>
                              <tr>
                                <th scope="col">Order ID</th>
                                <th scope="col">Item</th>
                                <th scope="col">Harga</th>
                              </tr>
                                {data}
                            {/* <p>Jumlah = {price} </p> */}
                        </table>
                      </div>           
                      {/* <Link to="/Form2" className="btn btn-outline-warning btn-block" style={{width:'150px'}}>Continue</Link><br/><br/>     */}
                      {/* <div style={{marginLeft:"10px"}}><Form2 /></div> */}
                  </div> 
                  <div className="tab-pane" id="profile" role="tabpanel">
                    <div ><Form2 /></div>   
                  </div>                   
                </div>
              </div>
          </div>
    );
  }
}

export default Form;