import React, { Component } from 'react';

class Foot extends Component {
  render() {
    return (
      <div className="App">
       <footer className="Foot">
        <div class="fb-like" data-href="https://www.facebook.com/Soweto-Observer-337066023393491/" data-width="150"
          data-layout="standard" data-action="like" data-size="large" data-show-faces="true" data-share="true">
        </div>

          <div className="address">
          <middle>Last updated on <time datetime="2018-06-01">June 1st, 2018</time></middle>

            <p>
            Hosted by RayRapsTshepi
            </p>
            <address>
              Unit 18, Leogem Commercial Park<br />
              Richards Drive<br />
              Midrand
            </address>
            <p>&#169; 2018 RRT</p>
            </div>
        </footer>
      </div>
    );
  }
}

export default Foot;
