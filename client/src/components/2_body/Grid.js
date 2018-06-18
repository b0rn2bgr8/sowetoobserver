import React from 'react'
import {Image, Grid} from 'semantic-ui-react'
import { Media } from 'reactstrap';
import CardCustom from './Card';

const GridCustom = () => (
  <Grid celled='internally'>
    <Grid.Row>
      <Grid.Column width={12}>
        <CardCustom/>
         </Grid.Column>

      <Grid.Column width={4}>
        <h3>Ads</h3>
        <Image src='/assets/images/wireframe/image.png' />
         </Grid.Column>
    </Grid.Row>
   </Grid>
)

export default GridCustom;