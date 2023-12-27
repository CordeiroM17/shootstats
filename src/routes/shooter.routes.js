import { Router } from 'express';
import { authRequired } from '../middlewares/validateToken.middleware.js';
import { shooterController } from '../controllers/shooter.controller.js';
import { validatorSchema } from '../middlewares/validator.middleware.js';
import { shooterSchema } from '../schemas/shooter.schema.js';

export const shooterRouter = Router();

shooterRouter.get('/', authRequired, shooterController.getShooters);

shooterRouter.get('/:sid', authRequired, shooterController.getShooter);

shooterRouter.post('/', authRequired, validatorSchema(shooterSchema), shooterController.createShooter);

shooterRouter.delete('/:sid', authRequired, shooterController.deleteShooter);

shooterRouter.put('/:sid', authRequired, validatorSchema(shooterSchema), shooterController.updateShooter);
