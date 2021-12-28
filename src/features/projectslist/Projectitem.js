import * as React from 'react';

import { Box, Heading, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import JavascriptLogo from '../../images/devicons/javascript-original.svg';
import TypescriptLogo from '../../images/devicons/typescript-original.svg';
import ReactLogo from '../../images/devicons/react-original.svg';
import NodeLogo from '../../images/devicons/nodejs-original.svg';
import HtmlLogo from '../../images/devicons/html5-original.svg';
import CssLogo from '../../images/devicons/css3-original.svg';

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

        <Box display="flex" gap="0.4rem">
          {tags.js && (
            <Image
              src={JavascriptLogo}
              alt="Javascript Logo"
              placeholder="blurred"
              width={{ base: '1.3rem' }}
              height={{ base: '1.3rem' }}
            />
          )}

          {tags.ts && (
            <Image
              src={TypescriptLogo}
              alt="Typescript logo"
              placeholder="blurred"
              width={{ base: '1.3rem' }}
              height={{ base: '1.3rem' }}
            />
          )}

          {tags.html && (
            <Image
              src={HtmlLogo}
              alt="HTML Logo"
              placeholder="blurred"
              width={{ base: '1.3rem' }}
              height={{ base: '1.3rem' }}
            />
          )}

          {tags.css && (
            <Image
              src={CssLogo}
              alt="CSS Logo"
              placeholder="blurred"
              width={{ base: '1.3rem' }}
              height={{ base: '1.3rem' }}
            />
          )}

          {tags.react && (
            <Image
              src={ReactLogo}
              alt="React Logo"
              placeholder="blurred"
              width={{ base: '1.3rem' }}
              height={{ base: '1.3rem' }}
            />
          )}

          {tags.node && (
            <Image
              src={NodeLogo}
              alt="NodeJS Logo"
              placeholder="blurred"
              width={{ base: '1.3rem' }}
              height={{ base: '1.3rem' }}
            />
          )}
        </Box>
      </Box>
    </MotionBox>
  );
}
