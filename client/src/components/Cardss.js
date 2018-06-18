import React from 'react';
import { Container, Media } from 'reactstrap';

const Cards = () => {
  return (
    <Container style={{margin:"auto",width:"70%"}}>
    <Media>
    <Media left  href="#">
        <Media object data-src=".js/64*64" width="" alt="image holder" />
      </Media>
      
      <Media body>
        <Media heading>
          Media heading
        </Media>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. 
      </Media>
      
    </Media>
    </Container>
  );
};

export default Cards;