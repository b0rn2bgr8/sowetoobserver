import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText,Container } from 'reactstrap';

const Footers = (props) => {
  return (
    <Container style={{margin:"auto",width:"70%"}}>
    <div>
        <CardFooter style={{backgroundColor:"#eeeeee",textAlign:"center",}}className="text-muted">Copyright &copy; 2018 Soweto Observers Inc. All rights reserved </CardFooter>
    </div>
    </Container>
  );
};
export default Footers;