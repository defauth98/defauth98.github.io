import * as React from 'react';

import { Box, Heading, Image, useDisclosure } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import TagList from './TagList';
import ProjectModal from './ProjectModal';
import ProjectType from '../../types/project';

const MotionBox = motion(Box);

interface ProjectItemProps {
  project: ProjectType
}

export function ProjectItem({ project }:  ProjectItemProps) {
  const { title, thumbnailPath, tags } = project;

  const { isOpen, onClose, onOpen } = useDisclosure();

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
      onClick={onOpen}
      cursor="pointer"
    >
      <Image
        src={thumbnailPath}
        alt={title}
        placeholder="blurred"
        width={{ base: '15rem' }}
        height={{ base: '10rem' }}
      />
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

        <ProjectModal onClose={onClose} isOpen={isOpen} project={project} />
      </Box>
    </MotionBox>
  );
}
