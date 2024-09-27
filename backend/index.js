console.log('Hello via Bun!');
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
