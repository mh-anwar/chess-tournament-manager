import express from 'express';
import User from './UserSchema';
import { createLeaderBoardEntry } from '../leaderboard/LeaderboardRouter';
const crypto = require('crypto');

const UserRouter = express.router();

// /api/user/
UserRouter.post('/', async (req, res) => {});

UserRouter.get('/:name', async (req, res) => {
	const name = req.body.name;
	const userPasskey = await checkUser(name);
	res.send({ success: true, passKey: userPasskey });
});

UserRouter.post('/login', async (request, res) => {
	const body = req.body;
	let userAuthentication = await authenticateUser(body.name, body.password);

	if (userAuthentication !== false && userAuthentication !== undefined) {
		res.send({ success: true, passKey: userAuthentication });
	} else if (userAuthentication === undefined) {
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
		if (userPasskey === false) {
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
	createLeaderBoardEntry(1, 1, name, 0);
	return passKey;
}

async function authenticateUser(name, password) {
	const user = await User.findOne({
		name: name,
	});
	if (user) {
		if (user.password === password) {
			return user.passKey;
		} else {
			return false;
		}
	} else {
		return undefined;
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
