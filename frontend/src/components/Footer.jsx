import { Box, Text, Link } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box
      sx={{
        textAlign: 'center',
      }}
    >
      <Text fontSize="md">
        Developed by{' '}
        <Link isExternal href="https://github.com/mh-anwar">
          <u>Mohammad Anwar</u>
        </Link>{' '}
        and
        <Link isExternal href="https://github.com/koolkrish18">
          <u>Krish Nalam</u>
        </Link>
      </Text>
    </Box>
  );
}
