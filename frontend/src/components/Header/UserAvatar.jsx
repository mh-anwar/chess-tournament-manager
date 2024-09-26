import { Avatar, IconButton } from '@chakra-ui/react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { clearLocalStorage } from '../constants';

export default function UserAvatar() {
  let userName = localStorage.getItem('name');
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');

  return (
    <Menu isLazy={true} closeOnBlur={true}>
      <MenuButton
        as={IconButton}
        variant="outline"
        size="lg"
        aria-label="Acccount Options"
      >
        <Avatar
          userSelect="none"
          bg="inherit"
          color="inherit"
          size="sm"
          name={userName}
        />
      </MenuButton>
      <MenuList>
        <MenuItem onClick={logout}>Logout</MenuItem>
        <MenuItem onClick={toggleColorMode}>Enable {text} mode</MenuItem>
      </MenuList>
    </Menu>
  );
}
function logout() {
  if (window.confirm('Are you sure you want to logout?')) {
    clearLocalStorage();
    window.location.reload();
  }
}
