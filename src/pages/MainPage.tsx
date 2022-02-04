import * as React from 'react';

import { Box } from '@chakra-ui/react';

import Menubar from '../features/menu/MenuBar';
import AboutMe from '../features/aboutme/AboutMe';
import MySkills from '../features/myskills/MySkills';
import ProjectList from '../features/projectslist/ProjectList';
import Footer from '../features/footer/Footer';

function MainPage() {
  return (
    <Box maxWidth={{ base: '100vw' }}>
      <Menubar />
      <AboutMe />
      <MySkills />
      <ProjectList />
      <Footer />
    </Box>
  );
}

export default MainPage;
