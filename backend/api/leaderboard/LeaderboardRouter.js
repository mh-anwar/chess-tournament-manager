import { Router } from 'express';
import Leaderboard from './LeaderboardSchema.js';
import { getUserData } from '../user/UserRouter.js';
import User from '../user/UserSchema.js';

const LeaderboardRouter = Router();

// /api/leaderboard/
LeaderboardRouter.post('/', async (req, res) => {
  res.send({ data: await Leaderboard.find({}) });
});

LeaderboardRouter.post('/userGames', async (req, res) => {
  const body = req.body;
  const user = await getUserData(body.name);
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
  let actualTime = new Date(gameDate).toString().split(' ')[4];

  let fullOppName = data.opponent.split(',');
  const oppName = fullOppName[0] + ' ' + fullOppName[1];

  const user = await getUserData(name);
  let userGames = user.games;
  const oppData = await getUserData(oppName);
  let oppGames = oppData.games;
  let userWins, oppLosses;

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
    const userGamesUpdate = {
      games: userGames,
    };
    await User.findOneAndUpdate({ name: name }, userGamesUpdate);

    let oppResult = gameResult === 'won' ? 'lost' : gameResult;
    let newOppData = {
      date: gameDate,
      opponent: name,
      result: oppResult,
      type: gameType,
      confirmed: false,
    };
    oppGames[actualTime] = newOppData;
    const oppGameUpdate = {
      games: oppGames,
    };
    await User.findOneAndUpdate({ name: oppName }, oppGameUpdate);

    // Update leaderboard to increase wins and losses
    if (gameResult === 'won') {
      const userLeaderboard = getUserLeaderBoard(name);
      userWins = userLeaderboard.won;

      const oppLeaderboard = getUserLeaderBoard(oppName);
      oppLosses = oppLeaderboard.won;

      await Leaderboard.findOneAndUpdate(
        { name: name },
        {
          won: userWins + 1,
        }
      );

      await Leaderboard.findOneAndUpdate(
        { name: oppName },
        {
          lost: oppLosses + 1,
        }
      );
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
    rank: parseInt((await Leaderboard.countDocuments({})) + 1, 10),
  });

  await newLeaderBoardEntry.save();
}

async function getUserLeaderBoard(name) {
  const user = await Leaderboard.findOne({ name: name });
  return user;
}
export { LeaderboardRouter, createLeaderBoardEntry };
