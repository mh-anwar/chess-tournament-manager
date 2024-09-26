import {
  Box,
  FormControl,
  Button,
  useToast,
  useColorModeValue,
} from '@chakra-ui/react';
import '../index.css';
import { useState } from 'react';
import CustomInput from './CustomInput';
import { HOST } from './constants';

export default function LoginBox() {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const toast = useToast();

  const bg = useColorModeValue('light.sec', 'dark.sec');
  const fg = useColorModeValue('light.fg', 'dark.fg');
  const inputs = [
    {
      label: 'Email',
      placeholder: 's------@ddsbstudent.ca',
      helper: 'Use your Email',
      type: 'text',
      errorMsg: 'Email is required',
      value: emailInput,
      onChange: e => setEmailInput(e.target.value),
    },
    {
      label: 'Password',
      placeholder: '******',
      helper: 'Click here to Reset Your Password',
      type: 'password',
      errorMsg: 'Password is required',
      value: passwordInput,
      onChange: e => setPasswordInput(e.target.value),
    },
  ];
  return (
    <Box className="auth" bg={bg} color={fg}>
      {inputs.map(keys => {
        return <CustomInput options={keys} key={keys.label} />;
      })}
      <FormControl>
        <Button onClick={() => createUser(emailInput, passwordInput, toast)}>
          Submit
        </Button>
      </FormControl>
    </Box>
  );
}

async function createUser(email, password, toast) {
  const toastCreator = (title, description, type = 'error') => {
    toast({
      title: title,
      description: description,
      status: type,
      duration: 9000,
      isClosable: true,
    });
  };

  if (password.length > 6) {
    fetch(HOST + '/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then(data => data.json())
      .then(response => {
        if (response.success === true) {
          localStorage.setItem('email', email);
          localStorage.setItem('passKey', response.passKey);
          toastCreator(
            'Login Successful',
            'You are being redirected to the homepage',
            'success'
          );
          setTimeout(() => (window.location.href = '/'), 2000);
        } else {
          localStorage.removeItem('email');
          localStorage.removeItem('color');
          localStorage.removeItem('passKey');
          toastCreator(response.success, '');
        }
      });
  } else {
    toastCreator(
      'Login Unsuccessful',
      'Your password must be longer than 6 characters'
    );
  }

  return true;
}
