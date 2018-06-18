// import React, { Component } from 'react';
// import Navigation from '../components/navigation/Navigation';
// import SimpleSlider from '../components/body/Carousel';
// import Columns from '../components/body/Columns';
// import Foot from '../components/footer/Footer';
// import Content from '../content';
// import Fb from '../components/body/Fb';
// import { Grid, Image } from 'semantic-ui-react'
// import burner from '../Images/burning.jpg';


// class Home extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <Navigation />
//           <SimpleSlider/>
//           <br/>
//           <br/>
//           <br/>
//           <Grid celled>
//             <Grid.Row>
//               <Grid.Column width={3}>
//               <h1>Ads</h1>
//                 <Image src={burner} />
//               </Grid.Column>
//               <Grid.Column width={9}>
//                 <Content /> 
//               </Grid.Column>
//               <Grid.Column width={3}>
//                 <h1>Facebook</h1>
//                 <h4>Soweto Observer Facebook timeline</h4>
//                 <Fb/>
//               </Grid.Column>
//             </Grid.Row>
//           </Grid>       
//           {/* <Columns/> */}
//           <br/>
//           <Foot/>
//         </header>
//       </div>
//     );
//   }
// }

// export default Home;


import React, { Component } from 'react';
import { Image } from 'semantic-ui-react'
import { Media } from 'reactstrap';
import Footer from '../components/3_footer/Footer';
import HeaderNav from '../components/1_header/HeaderNav';
import NavTab from '../components/1_header/NavTab';
import { Grid} from 'semantic-ui-react';
import Card_For_Classified from '../components/2_body/Card_For_Classified';
import Sliders from '../components/2_body/Carousel';



class Home extends Component {
  render() {
    return (
      <div className="App">
       <HeaderNav/>
       <NavTab/>
       <br/>
       <br/>
      
       <Sliders/>
       <br/><br/>
       <Grid celled='internally'>
    <Grid.Row>
      <Grid.Column width={12}>
       <Card_For_Classified/>
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

export default Home ;