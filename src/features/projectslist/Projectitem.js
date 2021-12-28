import * as React from 'react';

import { Box, Heading, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import TagList from './TagList';

const MotionBox = motion(Box);

export function ProjectItem({ project }) {
  const { title, thumbnail_path: thumb, tags } = project;

  return (
    <MotionBox
      width={{ base: '15rem' }}
      height={{ base: '13rem' }}
      borderRadius={{ base: '0.8rem' }}
      overflow={{ base: 'hidden' }}
      background="black"
      border="4px solid #ccc"
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Image src={thumb} alt={title} placeholder="blurred" width={{ base: '15rem' }} height={{ base: '10rem' }} />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        height={{ base: '2.5rem' }}
        padding="0 0.8rem"
      >
        <Heading fontSize={{ base: '1rem' }} color="white">
          {title}
        </Heading>

        <TagList tags={tags} />
      </Box>
    </MotionBox>
  );
}
