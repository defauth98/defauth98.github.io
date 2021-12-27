import * as React from 'react';

import { Container, SimpleGrid, Box, Image, Text, Heading } from '@chakra-ui/react';

import JavascriptIcon from '../../images/devicons/javascript-original.svg';
import TypescriptIcon from '../../images/devicons/typescript-original.svg';
import HtmlIcon from '../../images/devicons/html5-original.svg';
import CssIcon from '../../images/devicons/css3-original.svg';
import ReactIcon from '../../images/devicons/react-original.svg';
import NodeIcon from '../../images/devicons/nodejs-original.svg';
import LinuxIcon from '../../images/devicons/linux-original.svg';
import GitIcon from '../../images/devicons/git-original.svg';
import HerokuIcon from '../../images/devicons/heroku-original.svg';
import DockerIcon from '../../images/devicons/docker-original.svg';
import ReduxIcon from '../../images/devicons/redux-original.svg';
import PythonIcon from '../../images/devicons/python-original.svg';

function AboutMe() {
  return (
    <Container
      as="section"
      bg="white.200"
      minHeight="100vh"
      maxW="container.4xl"
      display="flex"
      justifyContent="center"
      marginTop={{ base: '2rem' }}
      alignItems={{ sm: 'center' }}
    >
      <Container maxW="container.xl">
        <Heading fontSize={{ base: '1.5em' }} fontWeight="semibold" marginBottom={{ base: '2rem' }}>
          Tecnologias e ferramentas que conheço
        </Heading>

        <SimpleGrid
          columns={{ base: 2, md: 3, lg: 6 }}
          spacing={10}
          maxW="container.xl"
          margin="0 auto"
          paddingBottom="1rem"
        >
          <Box width={{ base: '6rem', md: '8rem' }}>
            <Image src={JavascriptIcon} />
            <Text fontSize={{ base: '0.9rem', md: '1.2rem' }} textAlign="center">
              Javascript
            </Text>
          </Box>
          <Box width={{ base: '6rem', md: '8rem' }}>
            <Image src={TypescriptIcon} />
            <Text fontSize={{ base: '0.9rem', md: '1.2rem' }} textAlign="center">
              Typescript
            </Text>
          </Box>
          <Box width={{ base: '6rem', md: '8rem' }}>
            <Image src={HtmlIcon} />
            <Text fontSize={{ base: '0.9rem', md: '1.2rem' }} textAlign="center">
              HTML
            </Text>
          </Box>
          <Box width={{ base: '6rem', md: '8rem' }}>
            <Image src={CssIcon} />
            <Text fontSize={{ base: '0.9rem', md: '1.2rem' }} textAlign="center">
              CSS
            </Text>
          </Box>
          <Box width={{ base: '6rem', md: '8rem' }}>
            <Image src={ReactIcon} />
            <Text fontSize={{ base: '0.9rem', md: '1.2rem' }} textAlign="center">
              React
            </Text>
          </Box>
          <Box width={{ base: '6rem', md: '8rem' }}>
            <Image src={NodeIcon} />
            <Text fontSize={{ base: '0.9rem', md: '1.2rem' }} textAlign="center">
              NodeJS
            </Text>
          </Box>
          <Box width={{ base: '6rem', md: '8rem' }}>
            <Image src={LinuxIcon} />
            <Text fontSize={{ base: '0.9rem', md: '1.2rem' }} textAlign="center">
              Linux
            </Text>
          </Box>
          <Box width={{ base: '6rem', md: '8rem' }}>
            <Image src={GitIcon} />
            <Text fontSize={{ base: '0.9rem', md: '1.2rem' }} textAlign="center">
              Git
            </Text>
          </Box>
          <Box width={{ base: '6rem', md: '8rem' }}>
            <Image src={HerokuIcon} />
            <Text fontSize={{ base: '0.9rem', md: '1.2rem' }} textAlign="center">
              Heroku
            </Text>
          </Box>
          <Box width={{ base: '6rem', md: '8rem' }}>
            <Image src={DockerIcon} />
            <Text fontSize={{ base: '0.9rem', md: '1.2rem' }} textAlign="center">
              Docker
            </Text>
          </Box>
          <Box width={{ base: '6rem', md: '8rem' }}>
            <Image src={ReduxIcon} />
            <Text fontSize={{ base: '0.9rem', md: '1.2rem' }} textAlign="center">
              Redux
            </Text>
          </Box>
          <Box width={{ base: '6rem', md: '8rem' }}>
            <Image src={PythonIcon} />
            <Text fontSize={{ base: '0.9rem', md: '1.2rem' }} textAlign="center">
              Python
            </Text>
          </Box>
        </SimpleGrid>
      </Container>
    </Container>
  );
}

export default AboutMe;
