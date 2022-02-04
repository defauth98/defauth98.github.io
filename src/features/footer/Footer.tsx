import * as React from 'react';

import { Heading, Container, Box, Link, Image } from '@chakra-ui/react';

import { motion } from 'framer-motion';
import GithubLogo from '../../images/social-icons/github.png';
import LinkedinLogo from '../../images/social-icons/linkedin.png';
import GmailLogo from '../../images/social-icons/gmail.png';

const MotionLink = motion(Link);

export default function Footer() {
  return (
    <Container
      as="footer"
      bg="black.800"
      maxW="container.4xl"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        width="100%"
        maxW="container.xl"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        padding="0 4rem"
        height="8rem"
        borderTop={{ base: '2px solid #333' }}
      >
        <Heading color="white" fontSize={{ base: '1rem' }} fontWeight="medium">
          Feito com ❤️ por Daniel Ribeiro
        </Heading>

        <Box display={{ base: 'flex', sm: 'none', md: 'flex' }} justifyContent="space-between" gap="3rem">
          <MotionLink
            href="https://github.com/defauth98"
            isExternal
            whileHover={{ rotate: 360, scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image src={GithubLogo} width="2rem" />
          </MotionLink>

          <MotionLink
            href="https://www.linkedin.com/in/daniel-ribeiro-vassao/"
            isExternal
            whileHover={{ rotate: 360, scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image src={LinkedinLogo} width="2rem" />
          </MotionLink>

          <MotionLink
            href="mailto:neto.daniribeiro@gmail.com"
            isExternal
            whileHover={{ rotate: 360, scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image src={GmailLogo} width="2rem" />
          </MotionLink>
        </Box>
      </Box>
    </Container>
  );
}
