import * as React from 'react';

import { Box, Image, Text, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

interface SkillItemProps  {
  icon: string; text: string; link: string;
}

function SkillItem({ icon, text, link }: SkillItemProps) {
  return (
    <MotionBox
      display={{ base: 'flex' }}
      flexDirection={{ base: 'column' }}
      alignItens={{ base: 'center' }}
      justifyContent={{ base: 'center' }}
      width={{ base: '6rem', sm: '100%', md: '100%' }}
      whileTap={{ scale: 0.9 }}
    >
      <Image src={icon} width={{ sm: '50%', lg: '30%' }} margin={{ sm: '0 auto' }} />
      <Text fontSize={{ base: '0.9rem', md: '1.2rem' }} textAlign="center">
        <Link href={link} target="_blank">
          {text}
        </Link>
      </Text>
    </MotionBox>
  );
}

export default SkillItem;
