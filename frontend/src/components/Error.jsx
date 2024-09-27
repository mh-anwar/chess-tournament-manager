import { Box, Button, Heading, Text, AspectRatio } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <Box
      sx={{
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
        display: 'flex',
        flexDir: 'column',
        margin: '5em',
        gap: '2em',
      }}
    >
      <Heading>Whoopsie daisy! Seems like there&apos;s an error!</Heading>
      <Text fontSize="lg">
        If you were expecting a page, report this errohr!
      </Text>
      <Link to="/">
        <Button> Go to the Homepage</Button>
      </Link>
      <AspectRatio width="400px" height="560px" ratio={10 / 11}>
        <iframe
          src="https://lichess.org/training/frame?theme=brown&bg=dark"
          draggable="false"
        ></iframe>
      </AspectRatio>
    </Box>
  );
}
