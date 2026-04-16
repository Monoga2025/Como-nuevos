import { Router } from 'express';
import { getDashboardController } from '../controllers/dashboard.controller';
import { requireAuth } from '../middleware/require-auth';

const dashboardRouter = Router();

dashboardRouter.get('/overview', requireAuth, getDashboardController);

export { dashboardRouter };
