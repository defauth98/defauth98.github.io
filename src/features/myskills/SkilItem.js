import * as React from 'react';

import { Box, Image, Text, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

function SkillItem({ icon, text, link }) {
  return (
    <MotionBox width={{ base: '6rem', md: '8rem' }} whileTap={{ scale: 0.9 }}>
      <Link href={link} target="_blank">
        <Image src={icon} />
        <Text fontSize={{ base: '0.9rem', md: '1.2rem' }} textAlign="center">
          {text}
        </Text>
      </Link>
    </MotionBox>
  );
}

export default SkillItem;
