import { Schema, model } from 'mongoose';
import mongoose from 'mongoose';

const LeaderboardSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lost: {
    type: Number,
    required: true,
    default: 1,
  },
  won: {
    type: Number,
    required: true,
    default: 1,
  },
  games: [
    {
      opponent: {
        type: String,
        required: true,
      },

      result: {
        type: String,
        required: true,
      },
      moves: {
        type: Number,
        required: true,
      },
      date: {
        type: Number,
        required: true,
      },
      timeControl: {
        type: String,
        required: true,
      },
    },
  ],
});

const Leaderboard =
  mongoose.models.Leaderboard || model('Leaderboard', LeaderboardSchema);
export default Leaderboard;
