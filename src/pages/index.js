import { Container } from '@chakra-ui/react';
import * as React from 'react';
import AboutMe from '../features/aboutme/AboutMe';

function MainPage() {
  return (
    <Container maxW="container.4xl" bg="black.800">
      <AboutMe />
    </Container>
  );
}

export default MainPage;
