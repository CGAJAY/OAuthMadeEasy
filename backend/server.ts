import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRouter from './routes/index.js';

// Load environment variables
dotenv.config();

const app = express(); // Create express app
const port = process.env.PORT || 3000; // Default port to listen
const corsOptions = {
    origin: process.env.FRONTEND_URL,
    credentials: true,
};

app.use(cors(corsOptions)); // Enable CORS
app.use(express.json()); // Enable JSON parsing

// route handler for the root route
app.get('/', (req, res) => {
    res.status(200).json({message: "Silence is golden"});
});

// route handler for the /auth route
app.use('/auth', authRouter);

app.use("*", (req, res) => {
    res.status(404).json({message: "Resource not found"});
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
}); 