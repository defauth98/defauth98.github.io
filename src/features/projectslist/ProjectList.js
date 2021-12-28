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
    >
      <Box width="100%" maxW="container.xl">
        <Heading color="white" textAlign="left" marginBottom="2rem">
          Meus projetos
        </Heading>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 3, lg: 5 }} gap="2rem" maxW="container.xl" paddingBottom="1rem">
        {Project.map((project) => (
          <ProjectItem project={project} />
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default ProjectList;
