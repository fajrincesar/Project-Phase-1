import React, { Component } from 'react';
import { Flip, Fade, Rotate, Zoom, Bounce, Roll } from 'react-reveal';

class Style extends Component {
    render() {
      return (
        <div>
            <Bounce>
                <center>
                    <h1 style={{fontSize:'50px', color:'red'}}>React Mania</h1>
                    <img alt="" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn2Fr42QsvPkLANianoQ86BOMF42GbdFCjIdzVhbvoRt5XEGfZ' />
                </center>            
            </Bounce>
        </div>
    );
}
}
export default Style;