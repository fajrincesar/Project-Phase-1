import React, { Component } from 'react';
import axios from 'axios';
import './style.css'

class Sample extends Component {
  constructor(){
    super();
    this.state={club:[]};
  }
   componentDidMount(){
     axios.get('https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=Juventus')
     .then((ambildata)=>{
       console.log(ambildata.data.player);
        this.setState({
          club:ambildata.player,
        })
     })
   };       
  render() {
     const fc=this.state.club.map((item, index)=>{
       var nm =[item.strPlayer]
       var reg=[item.strFacebook] 
       var area=[item.strPosition]
       return <tr key={index}><td>{nm}</td><td>{reg}</td><td>{area}</td></tr>
     })
    return (
       <div>
         <br></br>
         <table>
           <tr>
             <td>Club</td>
             <td>League</td>
             <td>Stadium</td>
            </tr>
         {fc}
         </table>
       </div>
    )
  }
}

export default Sample;