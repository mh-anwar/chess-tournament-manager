import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Box,
  ChakraProvider,
  ColorModeScript,
  extendTheme,
} from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { mode } from '@chakra-ui/theme-tools';
import Join from './routes/Join';
import LeaderBoard from './routes/LeaderBoard';
import Entry from './routes/Entry';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import Instructions from './routes/Instructions';
import Error from './components/Error';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Entry />
        <Footer />
      </>
    ),
    errorElement: <Error />,
  },
  {
    path: '/board',
    element: (
      <Box display="flex" flexDir="column" justifyContent="space-between">
        <Header />
        <LeaderBoard />
        <Footer />
      </Box>
    ),
  },
  {
    path: '/join',
    element: (
      <>
        <Header />
        <Join />
        <Footer />
      </>
    ),
  },
  {
    path: '/instructions',
    element: (
      <Box display="flex" flexDir="column" justifyContent="space-between">
        <Header />
        <Instructions />
        <Footer />
      </Box>
    ),
  },
]);
const theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: true,
  colors: {
    dark: {
      header: '#322659',
      bg: '#065666',
      fg: 'white',
      sec: '#182747',
      tri: '#171923',
    },

    light: {
      header: '#c4e7ff',
      bg: '#CDF0EA',
      fg: 'black',
      sec: '#D8D8D8',
      tri: '#ECF9FF',
    },
  },
  styles: {
    global: props => ({
      body: {
        bg: mode('#fafafa', '')(props),
      },
    }),
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>
);
