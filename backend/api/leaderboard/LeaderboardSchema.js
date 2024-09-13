import { Schema, model } from 'mongoose';
import mongoose from 'mongoose';
``;
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
	move: {
		type: Number,
		required: true,
	},
	rank: {
		type: Number,
		required: true,
	},
});

const Leaderboard =
	mongoose.models.Leaderboard || model('Leaderboard', LeaderboardSchema);
export default Leaderboard;
