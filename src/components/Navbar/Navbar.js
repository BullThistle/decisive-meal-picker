import React from 'react';
import { Menu, Container } from 'semantic-ui-react';

const Navbar = () => (
  <Menu>
    <Container>
      <Menu.Item header href="/">
        Decisive Meal Picker
      </Menu.Item>
      <Menu.Item href="/about">About</Menu.Item>
    </Container>
  </Menu>
);

export default Navbar;
