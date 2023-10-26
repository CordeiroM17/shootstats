import { Router } from 'express';
import { authRequired } from '../middlewares/validateToken.middleware.js';
import { shooterController } from '../controllers/shooter.controller.js';

export const shooterRouter = Router();

shooterRouter.get('/', authRequired, shooterController.getShooters);

shooterRouter.get('/:sid', authRequired, shooterController.getShooter);

shooterRouter.post('/', authRequired, shooterController.createShooter);

shooterRouter.delete('/:sid', authRequired, shooterController.deleteShooter);

shooterRouter.put('/:sid', authRequired, shooterController.updateShooter);
