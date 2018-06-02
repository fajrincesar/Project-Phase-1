import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Content from './component/Content'
import Footer from './component/Footer'
import Cakes from './component/Cakes'
import Authen from './component/Authen'
import Nav from './component/Nav';
import Barchoco from './component/Barchoco';
import Cookies from './component/Cookies';
import Dimens from './component/Dimens';
import Cakesnew from './component/Cakesnew';
import Searching from './component/Searching';
import Form from './component/Form';
import Form2 from './component/Form2';
import Login from './component/Login';
import Register from './component/Register';

class App extends Component {

   render() {
    return (
      <div>
          <Nav />
            <Route path="/" component={'Home'}/>
            <Route path="/Content" component={Content}/>
            <Route path="/Cakes" component={Cakes}/>
            <Route path="/Barchoco" component={Barchoco}/>
            <Route path="/Cookies" component={Cookies}/>
            <Route path="/Dimens" component={Dimens}/>
            <Route path="/Cakesnew" component={Cakesnew}/>
            <Route path="/Authen" component={Authen} />
            <Route path="/Searching" component={Searching} />
            <Route path="/Form" component={Form} />
            <Route path="/Form2" component={Form2} />
            <Route path="/Login" component={Login} />
            <Route path="/Register" component={Register} />
          <Footer />
      </div>
    );
  }
}

export default App;
