import React, { Component } from 'react';
import Home from './pages/Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid, Image } from 'semantic-ui-react'
import { Media } from 'reactstrap';
import News from './pages/News';
import Entertainment from './pages/Entertainment';
import Sports from './pages/Sports';
import Classified from './pages/Classified';
import CommunityService from './pages/CommunityService';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="Container">
        <Route path="/Home" exact component ={Home} />
        <Route path="/News" exact component ={News} />
        <Route path="/Entertainment" exact component ={Entertainment} />
        <Route path="/Sports" exact component ={Sports} />
        <Route path="/Classified" exact component ={Classified} />
        <Route path="/Community Services" exact component ={CommunityService} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
