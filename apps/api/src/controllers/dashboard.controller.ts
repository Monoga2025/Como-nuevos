import type { Request, Response } from 'express';

export function getDashboardController(_req: Request, res: Response) {
  return res.json({
    dayScore: 68,
    mentalState: 7,
    streakDays: 12,
    pendingTasks: 5,
    motivationalLine: 'Hoy no optimizas: ejecutas.'
  });
}
