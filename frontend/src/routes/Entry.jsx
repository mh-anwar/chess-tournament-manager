import { Box, Heading, useMediaQuery } from '@chakra-ui/react';
import Board from '../components/Board';

export default function Entry() {
  const [isDesktop] = useMediaQuery('(min-width: 1000px)');
  const mainStyle = {
    base: '2rem',
    sm: '3rem',
    md: '4rem',
    lg: '4rem',
    xl: '6rem',
  };
  return (
    <Box
      display="flex"
      flexDir={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
      padding={mainStyle}
      gap={mainStyle}
    >
      <Box
        display="flex"
        flexDir="column"
        alignItems={{
          base: 'center',
          sm: 'center',
          md: 'flex-start',
          lg: 'flex-start',
        }}
        flex="60"
        gap="2em"
      >
        <Heading as="h1" size="4xl" textAlign={{ base: 'center', sm: 'left' }}>
          Play.
        </Heading>
        <Heading as="h1" size="4xl" textAlign={{ base: 'center', sm: 'left' }}>
          Learn.
        </Heading>
        <Heading as="h1" size="4xl" textAlign={{ base: 'center', sm: 'left' }}>
          Compete.
        </Heading>
      </Box>

      <Board
        flex="40"
        width={isDesktop ? '50%' : '100%'}
        showChallenge="false"
      />
    </Box>
  );
}
