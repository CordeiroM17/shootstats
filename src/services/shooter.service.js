import { ShooterModel } from '../models/shooter.model.js';

class ShooterService {
  isHisShooter(shooter, userId) {
    if (shooter.user.toString() !== userId) {
      throw new Error('Is not your shooter');
    }
  }

  async getAllShooters(userId) {
    const shooters = await ShooterModel.find({
      user: userId,
    });

    return shooters;
  }

  async getShooterById(shooterId, userId) {
    const shooter = await ShooterModel.findById({ _id: shooterId });

    this.isHisShooter(shooter, userId);

    return shooter;
  }

  async createShooter(shooter, userId) {
    const { firstName, lastName, birthday } = shooter;
    const shooterCreated = await ShooterModel.create({ firstName, lastName, birthday, user: userId });

    return shooterCreated;
  }

  async deleteShooter(shooterId, userId) {
    const shooter = await ShooterModel.findById({ _id: shooterId });

    this.isHisShooter(shooter, userId);

    await ShooterModel.findByIdAndDelete({ _id: shooterId });
  }

  async updateShooter(shooterId, userId, shooterToUpdate) {
    const shooter = await ShooterModel.findById({ _id: shooterId });

    this.isHisShooter(shooter, userId);

    const shooterUpdated = await ShooterModel.findByIdAndUpdate({ _id: shooterId }, shooterToUpdate, { new: true });

    return shooterUpdated;
  }
}

export const shooterService = new ShooterService();
