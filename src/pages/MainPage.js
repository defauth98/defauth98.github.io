import { Box } from '@chakra-ui/react';
import * as React from 'react';
import AboutMe from '../features/aboutme/AboutMe';
import MySkills from '../features/myskills/MySkills';

function MainPage() {
  return (
    <Box>
      <AboutMe />
      <MySkills />
    </Box>
  );
}

export default MainPage;
