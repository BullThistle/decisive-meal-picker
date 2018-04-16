import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import Restaurant from '../../containers/Restaurant/Restaurant';

const Home = () => (
  <Container>
    <Header>React Redux Boilerplate</Header>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod aut dolore
      quam maxime nulla eum ullam enim voluptas dolorum eius! Similique ea
      voluptate reiciendis quibusdam itaque. Perferendis fugiat temporibus unde.
    </p>
    <Restaurant />
  </Container>
);

export default Home;
