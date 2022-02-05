import * as React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';
import { FiUser, FiGlobe, FiFolder } from 'react-icons/fi';

import { scroller } from 'react-scroll';

function MenuBar() {
  const scrollToAboutMe = () => {
    scroller.scrollTo('about-me', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  const scrollToMySkills = () => {
    scroller.scrollTo('my-skills', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  const scrollToMyProjects = () => {
    scroller.scrollTo('my-projects', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  const handleOpenGithubRepo = () => {
    window.open('https://github.com/defauth98/defauth98.github.io');
  };

  const handleOpenLinkedin = () => {
    window.open('https://www.linkedin.com/in/daniel-ribeiro-vassao/');
  };

  return (
    <Box
      display={{base: "flex", sm: "none", md: "flex"}}
      gap="2rem"
      height="4rem"
      alignItems="center"
      justifyContent="space-between"
      padding={{ base: '0 2rem', lg: '0 4rem', '2xl': '0 8rem', '3xl': '0 24rem', '4xl': '0 27%' }}
      background="black.800"
      color={{ '2xl': 'red' }}
      borderBottom="2px solid #333"
      width="100vw"
      position={{ '2xl': 'fixed' }}
    >
      <Box display="flex" color="white" alignItems="center" onClick={handleOpenLinkedin}>
        <Image src="/src/images/daniel_ribeiro.jpg" alt="Foto do Daniel Ribeiro" width="30px" borderRadius="100%" />
        <Text paddingLeft="0.5rem">Daniel Ribeiro</Text>
      </Box>

      <Box
        display="flex"
        gap="2rem"
        height="3rem"
        alignItems="center"
        maxW={{ base: 'container.md', lg: 'container.xl' }}
      >
        <Box display="flex" alignItems="center" color="white" onClick={scrollToAboutMe}>
          <FiUser /> <Text paddingLeft="0.5rem">Sobre</Text>
        </Box>
        <Box display="flex" alignItems="center" color="white" onClick={scrollToMySkills}>
          <FiGlobe /> <Text paddingLeft="0.5rem">Habilidades</Text>
        </Box>
        <Box display="flex" alignItems="center" color="white" onClick={scrollToMyProjects}>
          <FiFolder /> <Text paddingLeft="0.5rem">Meus projetos</Text>
        </Box>
        <Box onClick={handleOpenGithubRepo}>
          <img src="/src/images/social-icons/github.png" alt="Logo do Github" width="30px" />
        </Box>
      </Box>
    </Box>
  );
}

export default MenuBar;
