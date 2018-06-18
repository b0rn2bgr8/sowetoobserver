import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Cardss from '../components/Cardss';

 class Bodys extends React.Component {
  render() {
    return (
      <Container>
           <Row>
          <Col md="9">
          <Cardss/>
          </Col>
          
          <Col md="3">
          <h3>ads</h3>
          </Col>
        </Row>
        </Container>
    );
  }
}
export default Bodys;