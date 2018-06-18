import React from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink, Container } from 'reactstrap';
 class Navs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
        <Container style={{margin:"auto",width:"70%"}}>
        <Nav tabs>
          <NavItem>
            <NavLink href="/" active>Home</NavLink>
          </NavItem>
          {/* <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown> */}
          {/* <NavItem>
            <NavLink href="./pages/News">News</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="">Sports</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="../pages/Entertainment">Entertainment</NavLink>
          </NavItem>
          <NavItem>
            <NavLink  href="">Classified</NavLink>
          </NavItem>
          <NavItem>
            <NavLink  href=""></NavLink>
          </NavItem> */}
          {/* <NavItem>
            <NavLink  href="#">Videos</NavLink>
          </NavItem> */}
        </Nav>
      </Container>
    );
  }
}
export default Navs;