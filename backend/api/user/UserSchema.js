import { Schema, model } from 'mongoose';
import mongoose from 'mongoose';

const UserSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	games: {
		type: Object,
		default: {},
	},
	password: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	passKey: {
		type: String,
		required: true,
	},
	color: {
		type: String,
		required: true,
	},
});

const User = mongoose.models.User || model('User', UserSchema);
export default User;
