import { practiceService } from '../services/practice.service.js';

export const practiceController = {
  createPractice: async function (req, res) {
    const practice = req.body;
    const shooterId = req.params.sid;
    try {
      const practiceCreated = await practiceService.createPractice(practice, shooterId);
      return res.status(201).json({
        status: 'Success',
        message: 'Practice created',
        data: practiceCreated,
      });
    } catch (error) {
      return res.status(500).json({
        status: 'Error',
        message: 'Practice not created',
        data: [error.message],
      });
    }
  },
};
