import {
  Button,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  Link,
  Image,
  Box,
  Text
} from '@chakra-ui/react';
import * as React from 'react';
import { FiExternalLink } from 'react-icons/fi';

import GithubLogo from '../../images/social-icons/github-original.svg';
import ProjectType from '../../types/project'

interface projectModelProps {
  isOpen: boolean;
  onClose: () => void,
  project: ProjectType
}

function ProjectModal({ isOpen, onClose, project: { title, repoLink, thumbnailPath, link } }: projectModelProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom" isCentered >
      <ModalOverlay />
      <ModalContent maxW={{'2xl': "container.md", '3xl': "container.xl"}} height={{'2xl': "600px", '3xl': "800px"}}>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody display="flex" justifyContent="center" alignItems="center">
          <Image src={thumbnailPath} border="1px solid #ccc" width="100%" />
        </ModalBody>

        <ModalFooter display="flex" justifyContent="space-between" alignItems="center" borderTop="2px solid #ccc">
          <Box display="flex" alignItems="center" justifyContent="center" height='2rem'>
            <Link href={link} isExternal display="flex" alignItems="center" justifyContent="center" marginRight="2rem">
              <FiExternalLink size={30}  />
              <Text marginLeft="0.5rem">Acessar o site</Text>
            </Link>

            <Link href={repoLink} isExternal display="flex" alignItems="center" justifyContent="center">
              <Image src={GithubLogo} width="2rem" />
              <Text marginLeft="0.5rem">Ver no Github</Text>
            </Link>
          </Box>

          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ProjectModal;
