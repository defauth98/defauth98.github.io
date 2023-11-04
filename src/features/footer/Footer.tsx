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
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.1 },
            }}
            isExternal
          >
            <Image src={GithubLogo} width="2rem" />
          </MotionLink>

          <MotionLink
            href="https://www.linkedin.com/in/daniel-ribeiro-vassao/"
            isExternal
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.1 },
            }}
          >
            <Image src={LinkedinLogo} width="2rem" />
          </MotionLink>

          <MotionLink
            href="mailto:neto.daniribeiro@gmail.com"
            isExternal
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.5,
              transition: { duration: 0.1 },
            }}
          >
            <Image src={GmailLogo} width="2rem" />
          </MotionLink>
        </Box>
      </Box>
    </Container>
  );
}
