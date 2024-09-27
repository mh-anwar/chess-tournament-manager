import { Router } from 'express';
import User from './UserSchema.js';
import { createLeaderBoardEntry } from '../leaderboard/LeaderboardRouter.js';
import crypto from 'crypto';

const UserRouter = Router();

// /api/user/

UserRouter.get('/:name', async (req, res) => {
  const name = req.body.name;
  const userPasskey = await checkUser(name);
  res.send({ success: true, passKey: userPasskey });
});

UserRouter.post('/login', async (req, res) => {
  console.log(req.body);
  const body = req.body;
  const [name, passKey] = await authenticateUser(body.email, body.password);

  if (passKey !== false && passKey !== false) {
    res.send({ success: true, name: name, passKey: passKey });
  } else if (passKey === undefined) {
    res.send({ success: "User doesn't exist" });
  } else {
    res.send({ success: 'Incorrect password' });
  }
});

UserRouter.post('/join', async (req, res) => {
  const body = req.body;
  let name = body.name;
  let email = body.email;
  let password = body.password;
  let color = body.color;
  const userPasskey = await checkUser(name);
  if (email.includes('@ddsbstudent.ca')) {
    if (userPasskey === undefined || userPasskey === false) {
      let passKey = await createUser(name, email, password, color);

      res.send({ success: true, passKey: passKey });
    } else {
      res.send({ success: true, passKey: userPasskey });
    }
  } else {
    res.send({ success: 'Use your student email.' });
  }
});

async function createUser(name, email, password, color) {
  var passKey = crypto.randomBytes(12).toString('hex');
  const newUser = new User({
    name: name,
    games: {},
    password: password,
    email: email,
    passKey: passKey,
    color: color,
  });

  await newUser.save();
  await createLeaderBoardEntry(1, 1, name, 0);

  return passKey;
}

async function authenticateUser(email, password) {
  const user = await User.findOne({
    email: email,
  });
  if (user) {
    if (user.password === password) {
      return [user.name, user.passKey];
    } else {
      return [false, false];
    }
  } else {
    return [false, false];
  }
}

async function checkUser(name) {
  const user = getUserData(name);
  if (user) {
    return user.passKey;
  } else {
    return false;
  }
}

async function getUserData(name) {
  const user = await User.findOne({
    name: name,
  });
  return user;
}

export { UserRouter, getUserData };
