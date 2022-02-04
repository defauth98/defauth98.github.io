/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import * as React from 'react';

import { Box } from '@chakra-ui/react';

import AboutMe from '../features/aboutme/AboutMe';
import MySkills from '../features/myskills/MySkills';
import ProjectList from '../features/projectslist/ProjectList';
import Footer from '../features/footer/Footer';

function MainPage() {
  return (
    <Box>
      <AboutMe />
      <MySkills />
      <ProjectList />
      <Footer />
    </Box>
  );
}

export default MainPage;
