import { Router } from 'express';
import { practiceController } from '../controllers/practice.controller.js';

export const practiceRouter = Router();

practiceRouter.post('/:sid', practiceController.createPractice);
