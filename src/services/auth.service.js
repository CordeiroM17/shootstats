import { UserModel } from '../models/user.model.js';
import { createHash, isValidPassword } from '../utils/bcrypt.js';

class AuthService {
  async registerUser(username, email, password) {
    const userSaved = await UserModel.create({ username, email, password: createHash(password) });

    return userSaved;
  }

  async loginUser(email, password) {
    const userFound = await UserModel.findOne({ email });

    if (userFound && isValidPassword(password, userFound.password)) {
      return userFound;
    } else {
      throw new Error('User not logged');
    }
  }

  async findUserById(id) {
    const userFound = await UserModel.findById(id);

    if (!userFound) {
      throw new Error('User not found');
    }

    return userFound;
  }
}

export const authService = new AuthService();
