import { PracticeModel } from '../models/practice.model.js';
import { exec } from 'child_process';
import { ShooterModel } from '../models/shooter.model.js';

class PracticeService {
  async createPractice(practice, shooterId) {
    const { rounds, shootsPerRound, shoots } = practice;

    // Consultation of shots in competition with rounds and shots per round.
    if (shoots.length !== rounds) {
      throw new Error('There are not the same number of shots as rounds');
    }

    shoots.map((shoot) => {
      let i = 0;

      // Check that no value is less than 0 or greater than 10
      for (const clave in shoot) {
        if (shoot[clave] < 0 || shoot[clave] > 10) {
          shoot[clave] = 0;
        }
        i++;
      }
      if (i !== shootsPerRound) {
        throw new Error('There is not the indicated number of shots');
      }
    });

    const practiceChecked = {
      shooterId: shooterId,
      rounds,
      shootsPerRound,
      shoots,
    };

    const practiceCreated = await PracticeModel.create(practiceChecked);

    await ShooterModel.findByIdAndUpdate({ _id: shooterId }, { $push: { practices: practiceCreated._id } });

    exec(`py src/operations/index.py ${JSON.stringify(practiceCreated)}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error al ejecutar el script: ${error}`);
        return;
      }
      console.log(`Salida del script: ${stdout}`);
      console.error(`Errores del script: ${stderr}`);
    });

    return practiceCreated;
  }
}

export const practiceService = new PracticeService();
