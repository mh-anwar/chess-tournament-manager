import { Box, Image, Text } from '@chakra-ui/react';
import { LinkBox, LinkOverlay } from '@chakra-ui/react';
import King from './main.png';
import { Link } from 'react-router-dom';
import HeaderMenu from './HeaderMenu';

export default function Header() {
  const mainStyle = { base: '2rem', sm: '3rem', md: '5rem', lg: '5rem' };
  return (
    <Box
      display="flex"
      flexDir="row"
      justifyContent="space-between"
      paddingLeft={mainStyle}
      paddingRight={mainStyle}
      padding="1rem"
      minHeight="5vh"
    >
      <LinkBox as="h1">
        <LinkOverlay
          as={Link}
          to="/"
          style={{
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            rel="preload"
            loading="eager"
            src={King}
            maxHeight={['7vh', '6vh', '6vh', '9vh']}
          />

          <Text
            className="formalfont"
            fontSize="4xl"
            fontWeight="bold"
            lineHeight="1" // Adjust line height to reduce space
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0',
              alignSelf: 'end',
              alignItems: 'center',
            }}
          >
            <span>Wilson</span>
            <span>Chess</span>
          </Text>

          {/*   <Image
            rel="preload"
            loading="eager"
            src={HeaderLogo}
            filter={bg === 'light.header' ? '' : 'invert()'}
            minHeight="5vh"
            maxHeight={['6vh', '6vh', '6vh', '8vh']}
          /> */}
        </LinkOverlay>
      </LinkBox>
      <HeaderMenu />
    </Box>
  );
}
