import { Box, Image, useColorModeValue } from '@chakra-ui/react';
import { LinkBox, LinkOverlay } from '@chakra-ui/react';
import HeaderLogo from './header.svg';
import { Link } from 'react-router-dom';
import HeaderMenu from './HeaderMenu';

export default function Header() {
  const bg = useColorModeValue('light.header', 'dark.header');
  const mainStyle = { base: '2rem', sm: '3rem', md: '5rem', lg: '5rem' };
  return (
    <Box
      display="flex"
      flexDir="row"
      alignItems="center"
      justifyContent="space-between"
      paddingLeft={mainStyle}
      paddingRight={mainStyle}
      padding="1rem"
      minHeight="5vh"
    >
      <LinkBox as="h1">
        <LinkOverlay as={Link} to="/">
          <Image
            rel="preload"
            loading="eager"
            src={HeaderLogo}
            filter={bg === 'light.header' ? '' : 'invert()'}
            minHeight="5vh"
            maxHeight={['6vh', '6vh', '6vh', '8vh']}
          />
        </LinkOverlay>
      </LinkBox>
      <HeaderMenu />
    </Box>
  );
}
