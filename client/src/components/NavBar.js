import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem ,
Container
} from 'reactstrap';


class Navbars extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Container style={{margin:"auto",width:"70%" }}>
        <Navbar style={{backgroundColor:"#eeeeee",fontFamily:"Arial, Helvetica, sansserif"}}color="#eeeeee" light expand="md">
          <NavbarBrand href="/">Soweto Observer</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">About Us</NavLink>
              </NavItem>
              <NavItem>
                <Button href="./Pages/Contacs/BodyColContact.js">Contacts</Button>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap"></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default Navbars;