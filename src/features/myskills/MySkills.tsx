import * as React from 'react';

import { Container, SimpleGrid, Heading } from '@chakra-ui/react';

import JavascriptIcon from '../../images/devicons/javascript-original.svg';
import TypescriptIcon from '../../images/devicons/typescript-original.svg';
import HtmlIcon from '../../images/devicons/html5-original.svg';
import CssIcon from '../../images/devicons/css3-original.svg';
import ReactIcon from '../../images/devicons/react-original.svg';
import NodeIcon from '../../images/devicons/nodejs-original.svg';
import LinuxIcon from '../../images/devicons/linux-original.svg';
import GitIcon from '../../images/devicons/git-original.svg';
import HerokuIcon from '../../images/devicons/heroku-original.svg';
import DockerIcon from '../../images/devicons/docker-original.svg';
import ReduxIcon from '../../images/devicons/redux-original.svg';
import PythonIcon from '../../images/devicons/python-original.svg';
import SkillItem from './SkilItem';

function AboutMe() {
  return (
    <Container
      as="section"
      bg="white.200"
      maxW="container.4xl"
      display="flex"
      justifyContent="center"
      alignItems={{ sm: 'center', md: 'center' }}
      minHeight="100vh"
    >
      <Container maxW="container.xl">
        <Heading fontSize={{ base: '1.5em' }} fontWeight="semibold" marginBottom={{ base: '2rem' }}>
          Tecnologias e ferramentas que conheço
        </Heading>

        <SimpleGrid
          columns={{ base: 3, md: 3, lg: 6 }}
          spacing={{ sm: 5, lg: 20 }}
          maxW="container.xl"
          margin="0 auto"
          paddingBottom="1rem"
        >
          <SkillItem
            icon={JavascriptIcon}
            text="Javascript"
            link="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
          />
          <SkillItem icon={TypescriptIcon} text="Typescript" link="https://www.typescriptlang.org/" />
          <SkillItem icon={HtmlIcon} text="HTML" link="https://developer.mozilla.org/pt-BR/docs/Web/HTML" />
          <SkillItem icon={CssIcon} text="CSS" link="https://developer.mozilla.org/pt-BR/docs/Web/CSS" />
          <SkillItem icon={ReactIcon} text="React" link="https://pt-br.reactjs.org/" />
          <SkillItem icon={NodeIcon} text="NodeJS" link="https://nodejs.org/en/" />
          <SkillItem icon={LinuxIcon} text="Linux" link="https://www.linux.org/pages/download/" />
          <SkillItem icon={GitIcon} text="Git" link="https://git-scm.com/" />
          <SkillItem icon={HerokuIcon} text="Heroku" link="https://www.heroku.com/" />
          <SkillItem icon={DockerIcon} text="Docker" link="https://www.docker.com/" />
          <SkillItem icon={ReduxIcon} text="Redux" link="https://redux.js.org/" />
          <SkillItem icon={PythonIcon} text="Python" link="https://www.python.org/" />
        </SimpleGrid>
      </Container>
    </Container>
  );
}

export default AboutMe;
