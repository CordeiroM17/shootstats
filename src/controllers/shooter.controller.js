import { shooterService } from '../services/shooter.service.js';

export const shooterController = {
  getShooters: async function (req, res) {
    try {
      const userId = req.user.id;

      const shooters = await shooterService.getAllShooters(userId);

      return res.status(200).json({
        status: 'Success',
        message: 'All your shooters',
        data: shooters,
      });
    } catch (error) {
      return res.status(400).json({
        status: 'Error',
        message: 'Shooters not found',
        data: [error.message],
      });
    }
  },

  getShooter: async function (req, res) {
    try {
      const shooterId = req.params.sid;
      const userId = req.user.id;

      const shooter = await shooterService.getShooterById(shooterId, userId);

      return res.status(200).json({
        status: 'Success',
        message: 'Shooter found',
        data: shooter,
      });
    } catch (error) {
      return res.status(400).json({
        status: 'Error',
        message: 'Shooter not found',
        data: [error.message],
      });
    }
  },

  createShooter: async function (req, res) {
    try {
      const shooterToCreate = req.body;
      const userId = req.user.id;

      const shooterCreated = await shooterService.createShooter(shooterToCreate, userId);

      return res.status(201).json({
        status: 'Success',
        message: 'Shooter created',
        data: shooterCreated,
      });
    } catch (error) {
      return res.status(500).json({
        status: 'Error',
        message: 'Shooter not created',
        data: [error.message],
      });
    }
  },

  deleteShooter: async function (req, res) {
    try {
      const shooterId = req.params.sid;
      const userId = req.user.id;

      await shooterService.deleteShooter(shooterId, userId);

      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({
        status: 'Error',
        message: 'Shooter not deleted',
        data: [error.message],
      });
    }
  },

  updateShooter: async function (req, res) {
    try {
      const shooterId = req.params.sid;
      const userId = req.user.id;
      const shooterToUpdate = req.body;

      const shooterUpdated = await shooterService.updateShooter(shooterId, userId, shooterToUpdate);

      return res.status(200).json({
        status: 'Success',
        message: 'Shooter updated',
        data: shooterUpdated,
      });
    } catch (error) {
      return res.status(500).json({
        status: 'Error',
        message: 'Shooter not updated',
        data: [error.message],
      });
    }
  },
};
