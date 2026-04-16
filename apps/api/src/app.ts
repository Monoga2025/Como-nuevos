import cors from 'cors';
import express, { type NextFunction, type Request, type Response } from 'express';
import { authRouter } from './routes/auth.routes';
import { dashboardRouter } from './routes/dashboard.routes';

export const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/auth', authRouter);
app.use('/api/dashboard', dashboardRouter);

app.use((_req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

app.use((error: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error('Unhandled API error:', error);

  res.status(500).json({
    message: 'Internal server error',
    hint: 'Revisa logs de Vercel para el stack trace completo.'
  });
});
