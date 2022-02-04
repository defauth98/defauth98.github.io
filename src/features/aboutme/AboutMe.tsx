import * as React from 'react';

import { Container, Heading, Box, Text, Image, Link } from '@chakra-ui/react';

import { motion } from 'framer-motion';
import MenuBar from '../menu/MenuBar';

import DanielPhoto from '../../images/daniel_ribeiro.jpg';
import GithubLogo from '../../images/social-icons/github.png';
import LinkedinLogo from '../../images/social-icons/linkedin.png';
import GmailLogo from '../../images/social-icons/gmail.png';

const MotionLink = motion(Link);

function AboutMe() {
  return (
    <Container
      as="section"
      bg="black.800"
      minHeight="100vh"
      maxWidth="100vw"
      paddingTop={{ base: '7rem', sm: '2rem', md: '10rem', lg: '6rem', xl: '10rem' }}
      maxW="container.4xl"
      className="about-me"
    >
      <MenuBar />

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
    </Container>
  );
}

export default AboutMe;
