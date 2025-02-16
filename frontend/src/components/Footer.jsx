import { Box, Text, Link } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box
      sx={{
        textAlign: 'center',
        position: 'relative',
        bottom: '0',
        width: '100%',
        marginBottom: '1rem',
      }}
    >
      <Text fontSize="md">
        Developed by{' '}
        <Link isExternal href="https://github.com/mh-anwar">
          <u>Mohammad Anwar</u>
        </Link>{' '}
        and{' '}
        <Link isExternal href="https://github.com/koolkrish18">
          <u>Krish Nalam</u>
        </Link>
      </Text>
    </Box>
  );
}
