
import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody, Modal_Readmore } from 'reactstrap';
import Model_Readmore from './Modal';
import { Button, Header, Image, Modal } from 'semantic-ui-react';


const Card_For_Classified = (props) => {
  return (
    <CardDeck>
      
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Modal trigger={<Button>Read More</Button>}></Modal>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Modal trigger={<Button>Read More</Button>}></Modal>
        </CardBody>
      </Card>   
    </CardDeck>
  );
};

export default Card_For_Classified;