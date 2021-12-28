import * as React from 'react';

import { Box, Heading, Image } from '@chakra-ui/react';

export function ProjectItem({ project }) {
  const { title, thumbnail_path: thumb } = project;

  return (
    <Box
      width={{ base: '15rem' }}
      height={{ base: '10rem' }}
      borderRadius={{ base: '0.2rem' }}
      overflow={{ base: 'hidden' }}
      background="white"
    >
      <Image src={thumb} alt="A dinosaur" placeholder="blurred" layout="fixed" width={200} height={200} />
      <Box>
        <Heading fontSize={{ base: '1rem' }} color="black">
          {title}
        </Heading>
      </Box>
    </Box>
  );
}
