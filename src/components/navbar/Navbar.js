import React from 'react'
import { Ul, Li, Nav, A } from './NavbarStyled';

const Navbar = () => {
  return (
    <Nav>
      <Ul>
        <Li>
          <A href="#">Home</A>
        </Li>
        <Li>
          <A href="#">About</A>
        </Li>
        <Li>
          <A href="#">Contact</A>
        </Li>
        <Li>
          <A href="#">Services</A>
        </Li>
      </Ul>
    </Nav>
  )
}

export default Navbar;
