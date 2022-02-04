import * as React from 'react';
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { FiUser, FiGlobe, FiFolder } from 'react-icons/fi';

import { scroller } from 'react-scroll';

function MenuBar() {
  const scrollToAboutMe = () => {
    scroller.scrollTo('about-me', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  const scrollToMySkills = () => {
    scroller.scrollTo('my-skills', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  const scrollToMyProjects = () => {
    scroller.scrollTo('my-projects', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        display={{ md: 'none' }}
        marginLeft={{ base: '75vw' }}
      />
      <MenuList>
        <MenuItem icon={<FiUser />} onClick={scrollToAboutMe}>
          Sobre
        </MenuItem>
        <MenuItem icon={<FiGlobe />} onClick={scrollToMySkills}>
          Habilidades
        </MenuItem>
        <MenuItem icon={<FiFolder />} onClick={scrollToMyProjects}>
          Meus projetos
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default MenuBar;
