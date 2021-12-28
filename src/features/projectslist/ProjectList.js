import * as React from 'react';

import { Container, SimpleGrid, Heading } from '@chakra-ui/react';
import { ProjectItem } from './Projectitem';

import Project from './projectData';

function ProjectList() {
  return (
    <Container
      as="section"
      bg="black.800"
      minHeight="100vh"
      paddingTop={{ base: '7rem', md: '10rem' }}
      maxW="container.4xl"
    >
      <Heading color="white">Meus projetos</Heading>
      <SimpleGrid columns={{ base: 1, md: 3, lg: 6 }} spacing={20} maxW="container.xl" paddingBottom="1rem">
        {Project.map((project) => (
          <ProjectItem project={project} />
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default ProjectList;
