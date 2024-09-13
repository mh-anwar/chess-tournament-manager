import express from 'express';
import Leaderboard from './LeaderboardSchema';
import { getUserData } from '../user/UserRouter';

const LeaderboardRouter = express.router();

// /api/leaderboard/

LeaderboardRouter.post('/userGames', async (req, res) => {
	const body = req.body;
	const user = await getUserData(data.name);
	if (user.passKey === body.passKey) {
		res.send({ data: user.games });
	} else {
		res.send({ data: null });
	}
});

LeaderboardRouter.post('/gamePlay', async (req, res) => {
	const data = req.body;
	const name = data.name;
	const gameType = data.gameType;
	const gameResult = data.gameResult;
	const gameDate = data.gameDate;
	let actualTime = new Date(gameDate).toString().split(' ');
	actualTime = actualTime[4];
	let fullOppName = data.opponent;
	fullOppName = fullOppName.split(',');
	const oppName = fullOppName[0] + ' ' + fullOppName[1];

	const user = await getUserData(name);
	let userGames = user.games;
	const oppData = await getUserData(oppName);
	let oppGames = oppData.games;
	let userWins, oppLosses, userKey, oppKey;

	if (user.passKey === data.passKey) {
		// Update USERDB with games
		// WINNER INPUTS INTO SYSTEM
		let newUserData = {
			date: gameDate,
			opponent: oppName,
			result: gameResult,
			type: gameType,
			confirmed: true,
		};
		userGames[actualTime] = newUserData;
		const userUpdates = {
			games: userGames,
		};
		await userDB.update(userUpdates, userName);

		let oppResult = gameResult;
		if (gameResult === 'won') {
			oppResult = 'lost';
		}
		let newOppData = {
			date: gameDate,
			opponent: userName,
			result: oppResult,
			type: gameType,
			confirmed: false,
		};
		oppGames[actualTime] = newOppData;
		const oppUpdates = {
			games: oppGames,
		};
		await userDB.update(oppUpdates, oppName);
		// Update leaderboard to increase wing
		if (gameResult === 'won') {
			let boardData = await boardDB.fetch();
			for (let i = 0; i < boardData.items.length; i++) {
				if (boardData.items[i]['name'] === userName) {
					userWins = boardData.items[i]['won'];
					userKey = boardData.items[i]['key'];
				} else if (boardData.items[i]['name'] === oppName) {
					oppLosses = boardData.items[i]['lost'];
					oppKey = boardData.items[i]['key'];
				}
			}
			const userBoardUpdate = {
				won: userWins + 1,
			};
			await boardDB.update(userBoardUpdate, userKey);
			const oppBoardUpdate = {
				lost: oppLosses + 1,
			};
			await boardDB.update(oppBoardUpdate, oppKey);
		}
		res.send({ success: 'Leaderboard updated' });
	} else {
		res.send({ failed: 'Failed. Your login is invalid.' });
	}
});
async function createLeaderBoardEntry(lost, won, name, rank) {
	const newLeaderBoardEntry = new Leaderboard({
		lost: 1,
		won: 1,
		name: name,
		move: 0,
		rank: Leaderboard.countDocuments({}) + 1,
	});

	await newLeaderBoardEntry.save();
}

async function getUserLeaderBoard(name) {
	const user = await Leaderboard.findOne({ name: name });
	return user;
}
export { LeaderboardRouter, createLeaderBoardEntry };
