import React from 'react';
import logo from '../../logo.svg'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import Tabbar from './Tabbar';

export default class Navigation extends React.Component {
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
      <div>
        <Navbar color="dark" expand="xs" dark>
          <NavbarBrand 
                color="skyblue" href="/"><i>Soweto <img src={logo} className="App-logo" alt="logo" />Observer</i>
          </NavbarBrand>

          <Tabbar/>
          
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>Login</DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Viewer</DropdownItem>
                  <DropdownItem>Author</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Administrator</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}