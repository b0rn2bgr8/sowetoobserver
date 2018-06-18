import React, { Component } from 'react';
import { Image } from 'semantic-ui-react'
import { Media } from 'reactstrap';
import CardCustom from '../components/2_body/Card';
import Footer from '../components/3_footer/Footer';
import HeaderNav from '../components/1_header/HeaderNav';
import NavTab from '../components/1_header/NavTab';
import { Grid} from 'semantic-ui-react'


class Sports extends Component {
  render() {
    return (
      <div className="App">
       <HeaderNav/>
       <NavTab/>
       <Grid celled='internally'>
    <Grid.Row>
      <Grid.Column width={12}>
        <CardCustom/>
      </Grid.Column>

      <Grid.Column width={4}>
        <Image src='/assets/images/wireframe/image.png' />
      </Grid.Column>    
    </Grid.Row>
        </Grid>
       <Footer/>
      </div>
    );
  }
}


export default Sports;