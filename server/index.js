import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import { uploadRoutes, authRoutes } from './routes/index.js';

const app = express();
dotenv.config();

// Use built-in express.json() and express.urlencoded() middlewares
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true, limit: '30mb' }));

app.use(cors());

app.use('/users', authRoutes);
app.use('/', uploadRoutes);

const { PORT } = process.env;
const port = PORT || 5000;

const startServer = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(port, () => console.log(`Server running on port: ${port}`));
  } catch (error) {
    console.log(error);
  }
};

startServer();
