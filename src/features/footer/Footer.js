import * as React from 'react';

import { Heading, Container, Box, Link, Image } from '@chakra-ui/react';

import GithubLogo from '../../images/social-icons/github.png';
import LinkedinLogo from '../../images/social-icons/linkedin.png';
import GmailLogo from '../../images/social-icons/gmail.png';

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
        borderTop="2px solid #ccc"
      >
        <Heading color="white" fontSize={{ base: '1rem' }}>
          Feito com ❤️ por Daniel Ribeiro
        </Heading>

        <Box display={{ base: 'flex', sm: 'none' }} justifyContent="space-between" gap="3rem">
          <Link href="https://github.com/defauth98" isExternal>
            <Image src={GithubLogo} width="2rem" />
          </Link>

          <Link href="https://www.linkedin.com/in/daniel-ribeiro-vassao/" isExternal>
            <Image src={LinkedinLogo} width="2rem" />
          </Link>

          <Link href="mailto:neto.daniribeiro@gmail.com" isExternal>
            <Image src={GmailLogo} width="2rem" />
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
