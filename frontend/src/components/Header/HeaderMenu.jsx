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
  const urlPath = window.location.pathname;
  const isLoggedIn = Boolean(localStorage.getItem('email'));

  const btnStyle = {
    padding: '0 2rem',
    margin: '0 0.5rem',
  };

  const NavigationData = [
    {
      name: 'Home',
      link: '/',
      iconActive: AiFillHome,
      iconInactive: AiOutlineHome,
    },
    {
      name: 'Play',
      link: '/board',
      iconActive: RiTrophyFill,
      iconInactive: RiTrophyLine,
    },
    {
      name: 'Help',
      link: '/instructions',
      iconActive: RiFilePaperFill,
      iconInactive: RiFilePaperLine,
    },
  ];

  const getIcon = item =>
    urlPath === item.link ? item.iconActive : item.iconInactive;

  const renderButtons = () =>
    NavigationData.map((item, index) => (
      <Link key={index} to={item.link}>
        <Button
          leftIcon={<item.iconActive />}
          style={btnStyle}
          variant={urlPath === item.link ? 'solid' : 'outline'}
        >
          {item.name}
        </Button>
      </Link>
    ));

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent={isMobile ? 'start' : 'center'}
      flexWrap="wrap"
      gap="0.5rem"
    >
      {isMobile ? (
        <>
          {isLoggedIn ? (
            <UserAvatar mobile />
          ) : (
            <Link to="/join">
              <Button w="4em" h="3em" style={btnStyle} variant="outline">
                Join
              </Button>
            </Link>
          )}
          <Menu isLazy closeOnBlur>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
              size="lg"
            />
            <MenuList>
              {NavigationData.map((item, index) => (
                <MenuItem
                  icon={getIcon(item)}
                  key={index}
                  as={Link}
                  to={item.link}
                >
                  {item.name}
                </MenuItem>
              ))}
              <MenuDivider />
              <ColorModeSwitcher />
            </MenuList>
          </Menu>
        </>
      ) : (
        <>
          {renderButtons()}
          <ColorModeSwitcher />
          <UserAvatar />
        </>
      )}
    </Box>
  );
}
