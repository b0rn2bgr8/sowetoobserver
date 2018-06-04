import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, CardImg } from 'reactstrap';
import classnames from 'classnames';
import { RSA_NO_PADDING } from 'constants';

export default class Navs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Top Stories
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              S.A. News
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="5">
              <div style={{marginLeft:15}}>
                <h1>Local Trends</h1>
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>PICS: Inside the Nkandla inspection</CardTitle>
                    <CardText>
                      The media were allowed to accompany the Nkandla ad hoc committee
                      when it inspected the 21 SA National Defence Force (SANDF) houses outside the
                      perimeter of the compound.
                    </CardText>
                  <Button>Read more</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Protesters burn properties</CardTitle>
                  <CardText>At Cape Town it is going down.</CardText>
                  <Button>Read more</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

// import React from 'react';
// import { Nav, NavItem, NavLink } from 'reactstrap';

// export default class Navs extends React.Component {
//   render() {
//     return (
//       <div>
//         <Nav>
//           <NavItem>
//             <NavLink href="#">Local News</NavLink>
//           </NavItem>
//           <NavItem>
//             <NavLink href="#">Sports</NavLink>
//           </NavItem>
//           <NavItem>
//             <NavLink href="#">Entertainment</NavLink>
//           </NavItem>
//           <NavItem>
//             <NavLink disabled href="#">Videos</NavLink>
//           </NavItem>
//         </Nav>
//         <hr />
//       </div>
//     );
//   }
// }