import dotenv from 'dotenv';
import express, { Express } from 'express';
import cors from 'cors';
import connectDB from './config/db';
import authRoutes from './routes/auth';
import notesRoutes from './routes/notes';

dotenv.config();

const app: Express = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect Database
connectDB();

// Routes
app.use('/auth', authRoutes);
app.use('/notes', notesRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
