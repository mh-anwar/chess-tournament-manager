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
import { clearLocalStorage, HOST } from './constants';

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
        <Button
          onClick={() => authenticateUser(emailInput, passwordInput, toast)}
        >
          Submit
        </Button>
      </FormControl>
    </Box>
  );
}

async function authenticateUser(email, password, toast) {
  const toastCreator = (title, description, type = 'error') => {
    toast({
      title: title,
      description: description,
      status: type,
      duration: 9000,
      isClosable: true,
    });
  };
  if (password.length <= 6) {
    return toastCreator(
      'Login Unsuccessful',
      'Your password must be longer than 6 characters'
    );
  }

  try {
    const response = await fetch(`${HOST}/api/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data.success) {
      localStorage.setItem('email', email);
      localStorage.setItem('name', data.name);
      localStorage.setItem('passKey', data.passKey);
      toastCreator(
        'Login Successful',
        'You are being redirected to the homepage',
        'success'
      );
      setTimeout(() => (window.location.href = '/'), 2000);
    } else {
      clearLocalStorage();
      toastCreator('Login Failed', data.message || 'Invalid credentials');
    }
  } catch (error) {
    console.error('Login error:', error);
    toastCreator('Login Error', 'An error occurred during login');
  }
  return true;
}
