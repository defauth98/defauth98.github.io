import { Box } from '@chakra-ui/react';
import * as React from 'react';
import AboutMe from '../features/aboutme/AboutMe';
import MySkills from '../features/myskills/MySkills';
import ProjectList from '../features/projectslist/ProjectList';

function MainPage() {
  return (
    <Box>
      <AboutMe />
      <MySkills />
      <ProjectList />
    </Box>
  );
}

export default MainPage;
