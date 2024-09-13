import mongoose from 'mongoose';
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

import { LeaderboardRouter } from './api/leaderboard/LeaderboardRouter';
import { UserRouter } from './api/user/UserRouter';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(process.env.PORT);
app.use(cors());
app.use(express.static(path.resolve(__dirname, './deploy')));

try {
	await mongoose.connect('<URL>', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, './deploy', 'index.html'));
	});
	app.get('/favicon.ico', async (req, res) => {
		res.sendFile(path.resolve(__dirname, './deploy', 'favicon.ico'));
	});
} catch (error) {
	console.log(error);
	process.exit(1);
}

app.use('/api/user', UserRouter);
app.use('/api/leaderboard', LeaderboardRouter);

// userDB example
/* userDB.put(
  {
    games: { John: 'lost', Doe: 'lost', Jane: 'won' },
    password: 'test',
    email: 'email@gmail.com',
  },
  'Jack'
); */

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
