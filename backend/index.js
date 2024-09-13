import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { UserRouter } from './api/user/UserRouter.js';
import { LeaderboardRouter } from './api/leaderboard/LeaderboardRouter.js';

const PORT = process.env.PORT || 3000;

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.resolve(__dirname, './dist')));

const spinUpServer = async () => {
  console.log(process.env.MONGO_DB);
  try {
    await mongoose.connect(process.env.MONGO_DB);

    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, './dist', 'index.html'));
    });
    app.get('/favicon.ico', async (req, res) => {
      res.sendFile(path.resolve(__dirname, './dist', 'favicon.ico'));
    });
    // Start the server after DB connection
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};
app.use('/api/user', UserRouter);
app.use('/api/leaderboard', LeaderboardRouter);
spinUpServer();
// TODO Archive old unused code
/*
// Was used when user avatar called on backend, pretty unnecessary
app.use('/userCheck', async (request, res) => {
  const user = await userDB.fetch(request.userName);
  if (user.keyPass === request.keyPass) {
    res.send({ userSignedIn: true, color: user.color });
  } else {
    res.send({ userSignedIn: false });
  }
}); 

app.post('/googleauthas', async (request, res) => {
  await request;

  const CLIENT_ID_GOOGLE =
    '868153396436-mm5sutbunjn1n5m7bebgslr1rp9spg0s.apps.googleusercontent.com';

  const client = new OAuth2Client(CLIENT_ID_GOOGLE);

  const ticket = await client.verifyIdToken({
    idToken: request.body.data.credential,
    audience: CLIENT_ID_GOOGLE,
  });
  let userName = ticket.payload.name;
  let email = ticket.payload.email;

  let userExists = await checkUser(userName);

  if (userExists === false) {
    if (request.body.password) {
      let passKey = await createUser(
        userName,
        email,
        request.body.password,
        'black'
      );
      res.send({
        success: true,
        name: userName,
        passKey: passKey,
        color: 'black',
      });
    } else {
      res.send({ success: 'password required' });
    }
  } else {
    res.send({ success: true, name: userName, passKey: userExists });
  } 
});
*/
