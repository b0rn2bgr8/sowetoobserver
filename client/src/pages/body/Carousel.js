import React, { Component } from "react";
import Slider from "react-slick";
import { Card, CardBody, Button, CardTitle, CardText, CardImg,CardImgOverlay ,CardSubtitle} from 'reactstrap';

const imgStyle = {
  width: 300,
  height: 300
}

export default class VariableWidth extends Component {
  render() {
    const settings = {
      lazyLoad: 'ondemand',
      dots: true,
      infinite: true,
      centerMode: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    return (
      <div style={{ width: '81%', margin: 'auto' }}>
       
        <Slider {...settings}>
          <div >
            <img style={imgStyle}src="https://images.unsplash.com/photo-1523998822965-93c94dec92b7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=492c1d0226e16c117b70d015e369d906&auto=format&fit=crop&w=500&q=60"/>
          </div>
          <div >
          <img style={imgStyle}src="https://images.unsplash.com/photo-1485110168560-69d4ac37b23e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f4bd96dd8aa176ff04286b2263cb6c29&auto=format&fit=crop&w=500&q=60"/>
          </div>
          <div >
          <img style={imgStyle}src="https://images.unsplash.com/photo-1504598578017-40d9b776f1bc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=79e06f1b49d46132da2b377cef2b5814&auto=format&fit=crop&w=500&q=60"/>
          </div>
          <div >
          <img style={imgStyle}src="https://images.unsplash.com/photo-1507475238349-a5a81b0ee407?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=809cef081afe18f6823a73feddc2d088&auto=format&fit=crop&w=500&q=60"/>
          </div>
          <div >
          <img style={imgStyle}src="https://images.unsplash.com/photo-1523998822965-93c94dec92b7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=492c1d0226e16c117b70d015e369d906&auto=format&fit=crop&w=500&q=60"/>
          </div>
          <div >
          <img style={imgStyle}src="https://images.unsplash.com/photo-1522056429125-1bdf11ac20ce?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e2344431d69bfa1bd849becc65d6c926&auto=format&fit=crop&w=500&q=60"/>
          </div>
        </Slider>
      </div>
    );
  }
}