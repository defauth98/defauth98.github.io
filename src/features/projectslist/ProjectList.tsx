import * as React from 'react';

import { Container, SimpleGrid, Heading, Box } from '@chakra-ui/react';

import { ProjectItem } from './Projectitem';
import Project from './projectData';

function ProjectList() {
  return (
    <Container
      as="section"
      bg="black.800"
      minHeight="100vh"
      maxW="container.4xl"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      className="my-projects"
    >
      <Box width="100%" maxW="container.xl">
        <Heading
          color="white"
          textAlign={{ base: 'left', sm: 'center', md: 'center', '2xl': 'left' }}
          paddingLeft={{ '2xl': '4.5rem' }}
          marginBottom="2rem"
          marginTop={{ base: '0', sm: '2rem', '2xl': '5rem' }}
          fontWeight={{ base: 'regular' }}
        >
          Meus projetos
        </Heading>
      </Box>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, '2xl': 4 }}
        gap={{ base: '2rem', md: '4rem' }}
        maxW="container.xl"
        paddingBottom="5rem"
      >
        {Project.map((project) => (
          <ProjectItem project={project} key={project.id} />
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default ProjectList;
