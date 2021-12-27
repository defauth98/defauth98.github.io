import * as React from 'react';

import { Container, Heading, Box, Text, Image, Link } from '@chakra-ui/react';

import DanielPhoto from '../../images/daniel_ribeiro.jpg';
import GithubLogo from '../../images/social-icons/github.png';
import LinkedinLogo from '../../images/social-icons/linkedin.png';
import GmailLogo from '../../images/social-icons/gmail.png';

function AboutMe() {
  return (
    <Container as="main" bg="black.800" minHeight="100vh" paddingTop={{ base: '7rem', md: '10rem' }}>
      <Image
        src={DanielPhoto}
        borderRadius="50%"
        width={{ base: '15rem', md: '15rem', lg: '15rem' }}
        marginRight="auto"
        marginLeft="auto"
        marginBottom="2rem"
      />
      <Heading
        color="white"
        fontSize={{ base: '1.5rem', md: '2.5rem', lg: '2.5rem' }}
        textAlign="center"
        marginBottom="0.5rem"
        fontWeight="normal"
      >
        Daniel Ribeiro
      </Heading>
      <Text
        color="white"
        textAlign="center"
        fontSize={{ base: '1rem', md: '1.2rem' }}
        maxWidth={{ base: '20rem', md: '30rem' }}
        margin="0 auto"
      >
        Sou apaixonado por tecnologia e marcas que buscam uma maior interação digital. Estudo desenvolvimento de
        software na Trybe, uma escola que usa de metodologias para fazer com que os alunos realmente aprendam e se
        desenvolvam com uma experiência real de um dia de trabalho como desenvolvedor.
      </Text>

      <Box
        display="flex"
        justifyContent="space-between"
        width={{ base: '60%', md: '10rem', lg: '15rem' }}
        margin="0 auto"
        marginTop="1.5rem"
      >
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
    </Container>
  );
}

export default AboutMe;
