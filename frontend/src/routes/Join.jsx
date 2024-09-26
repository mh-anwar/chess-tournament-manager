import { Box, useColorModeValue, useToast } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { HOST } from '../components/constants';
import JoinBox from '../components/JoinBox';
import LoginBox from '../components/LoginBox';

export default function Join() {
  const bg = useColorModeValue('light.sec', 'dark.sec');
  const fg = useColorModeValue('light.fg', 'dark.fg');
  const toast = useToast();
  const toastCreator = (title, description, type = 'error') => {
    toast({
      title: title,
      description: description,
      status: type,
      duration: 9000,
      isClosable: true,
    });
  };
  window.setLocalItems = (name, passKey) => {
    localStorage.setItem('name', name);
    localStorage.setItem('passKey', passKey);
  };
  window.handleCredentialResponse = data => {
    localStorage.removeItem('name');
    localStorage.removeItem('passKey');
    fetch(HOST + '/googleauth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data }),
    })
      .then(data => data.json())
      .then(response => {
        if (response.success === true) {
          window.setLocalItems(response.name, response.passKey);
          toastCreator(
            'Account created',
            'Your being redirected to the homepage',
            'success'
          );
          setTimeout(() => (window.location.href = '/'), 2000);
        } else if (response.success === 'password required') {
          const password = window.prompt('Please create a password', '');
          if (password != null) {
            fetch(HOST + '/googleauth', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ data, password }),
            })
              .then(data => data.json())
              .then(response => {
                window.setLocalItems(response.name, response.passKey);

                toastCreator(
                  'Account created',
                  'Your being redirected to the homepage',
                  'success'
                );
                setTimeout(() => (window.location.href = '/'), 2000);
              });
          } else {
            toastCreator('Account not created', 'No password provided');
          }
        } else {
          toastCreator(
            'Account not created',
            'Some error has occured, make your account manually'
          );
        }
      });
  };

  return (
    <Box display="flex" flexDir="row" justifyContent="center">
      <Tabs
        isLazy
        colorScheme="blue"
        width={['full', 'full', '60%', '50%']}
        isFitted
        variant="enclosed"
        align="center"
        minHeight="80vh"
        maxHeight="90vh"
      >
        <TabList paddingTop="2em">
          <Tab _selected={{ color: fg, bg: bg }}>Log In</Tab>
          <Tab _selected={{ color: fg, bg: bg }}>Sign Up</Tab>
        </TabList>

        <TabPanels align="center">
          <TabPanel>
            <LoginBox />
          </TabPanel>
          <TabPanel>
            <JoinBox />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
