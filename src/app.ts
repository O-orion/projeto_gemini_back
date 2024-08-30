import express from 'express';
import indexRouter from './routes/indexRouter';

const app = express();

// Middleware
app.use(express.json())

// Rotas
app.use('/api', indexRouter)

export default app;
