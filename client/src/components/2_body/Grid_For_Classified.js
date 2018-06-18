import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import Card_For_Classified from './Card_For_Classified';

const Grid_For_Classified = () => (
  <Grid celled='internally'>
    <Grid.Row>
      <Grid.Column width={12}>
      <Card_For_Classified/>
      </Grid.Column>
      <Grid.Column width={4}>
        <Image src='/assets/images/wireframe/centered-paragraph.png' />
      </Grid.Column>
    </Grid.Row>
    </Grid>
)

export default Grid_For_Classified;