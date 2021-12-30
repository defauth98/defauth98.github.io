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
} from '@chakra-ui/react';
import * as React from 'react';

import GithubLogo from '../../images/social-icons/github-original.svg';

function ProjectModal({ isOpen, onClose, project: { title, repoLink, thumbnailPath } }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom" isCentered border="3px solid #ccc">
      <ModalOverlay />
      <ModalContent maxW="container.xl" height="800px">
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody display="flex" justifyContent="center" alignItems="center">
          <Image src={thumbnailPath} border="1px solid #ccc" width="100%" />
        </ModalBody>

        <ModalFooter display="flex" justifyContent="space-between" alignItems="center" borderTop="2px solid #ccc">
          <Link href={repoLink} isExternal display="flex" alignItems="center">
            <Image src={GithubLogo} width="2rem" marginRight="1rem" />
            Ver no Github
          </Link>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ProjectModal;
