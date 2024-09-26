import {
  Box,
  Button,
  useMediaQuery,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  IconButton,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import ColorModeSwitcher from './ColorModeSwitcher';
import UserAvatar from './UserAvatar';
import { AiFillHome, AiOutlineHome } from 'react-icons/ai';
import {
  RiFilePaperFill,
  RiFilePaperLine,
  RiTrophyFill,
  RiTrophyLine,
} from 'react-icons/ri';

export default function HeaderMenu() {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  let urlPath = window.location.pathname;
  const isLoggedIn = localStorage.getItem('email');

  const btnStyle = {
    paddingLeft: '2rem',
    paddingRight: '2rem',
    marginLeft: '0.5rem',
    marginRight: '0.5rem',
  };
  const NavigationData = [
    {
      name: 'Home',
      link: '/',
      icon1: <AiFillHome />,
      icon2: <AiOutlineHome />,
    },
    {
      name: 'Play',
      link: '/board',
      icon1: <RiTrophyFill />,
      icon2: <RiTrophyLine />,
    },
    {
      name: 'Help',
      link: '/instructions',
      icon1: <RiFilePaperFill />,
      icon2: <RiFilePaperLine />,
    },
  ];
  return isMobile ? (
    <Box>
      {isLoggedIn !== null ? (
        <UserAvatar mobile={true} />
      ) : (
        <>
          <Link to="/join">
            <Button w="4em" h="3em" style={btnStyle} variant="outline">
              Join
            </Button>
          </Link>
        </>
      )}
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
          w="4em"
          h="3em"
          marginLeft="1em"
        />
        <MenuList
          style={{ zIndex: 5000, display: 'flex', flexDirection: 'column' }}
        >
          {NavigationData.map((item, index) => {
            return (
              <MenuItem
                icon={urlPath === item.link ? item.icon1 : item.icon2}
                key={index}
                as={Link}
                to={item.link}
              >
                {item.name}
              </MenuItem>
            );
          })}
          <MenuDivider />
          <ColorModeSwitcher />
        </MenuList>
      </Menu>
    </Box>
  ) : (
    <Box
      display="flex"
      flexDir="row"
      flexWrap="wrap"
      marginTop="1rem"
      gap="0.5rem"
      alignItems="center"
      justifyContent="center"
    >
      {NavigationData.map((item, index) => {
        return (
          <Link key={index} a to={item.link}>
            <Button
              style={btnStyle}
              variant={urlPath === item.link ? 'solid' : 'outline'}
            >
              {item.name}
            </Button>
          </Link>
        );
      })}
      <ColorModeSwitcher />
      <UserAvatar />
    </Box>
  );
}
