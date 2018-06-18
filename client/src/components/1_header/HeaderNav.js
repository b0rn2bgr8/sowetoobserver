import React from 'react';
import {Collapse,Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu,DropdownItem } from 'reactstrap';

class HeaderNav extends React.Component {
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
      <div className="HeaderNav">
        <Navbar color="white" light expand="md">
          <NavbarBrand img src="./img/Soweto observer img.jpg" href="/">Soweto Observer</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Contact</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Login
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Facebook 
                  </DropdownItem>
                  <DropdownItem>
                    Twitter 
                  </DropdownItem>
                  <DropdownItem>
                    Google 
                  </DropdownItem>
                  
                  
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default HeaderNav;