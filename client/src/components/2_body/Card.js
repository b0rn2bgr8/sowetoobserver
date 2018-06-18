import React from 'react';
import { Media, CardImg } from 'reactstrap';
import img1 from '../../img/Gold_letter_E.jpg';

const CardCustom = () => {
  return (
    <Media>
      <Media left href="#">
      <CardImg style={{width:"50%"}} src={img1}/>
      </Media>
      <Media body >
        <Media heading>
        Heading
        </Media>
        <div classname='container'>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. 
        Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </div>
      </Media>
    </Media>
  );
};

export default CardCustom;


