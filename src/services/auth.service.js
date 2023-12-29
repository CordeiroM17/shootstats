import { UserModel } from '../models/user.model.js';
import { createHash, isValidPassword } from '../utils/bcrypt.js';

class AuthService {
  async compareUserRegister(username, email, password) {
    const userInMongo = await this.findUserByEmail(email);

    if (username === userInMongo.username && email === userInMongo.email && isValidPassword(password, userInMongo.password)) {
      console.log(userInMongo)
      return userInMongo;
    } else {
      throw new Error('Something went wrong');
    }
  }

  async registerNewUser(newUser) {
    const { username, email, password } = newUser;

    const userSaved = await UserModel.create({ username, email, password: createHash(password) });

    return userSaved;
  }

  async findUserToLogin(email, password) {
    const userFound = await UserModel.findOne({ email });

    if (userFound && isValidPassword(password, userFound.password)) {
      return userFound;
    } else {
      throw new Error('Check the email or password');
    }
  }

  async findUserById(id) {
    const userFound = await UserModel.findById(id);

    if (!userFound) {
      throw new Error('User not found');
    }

    return userFound;
  }

  async findUserByEmail(email) {
    const userFound = await UserModel.findOne({ email });

    return userFound;
  }
}

export const authService = new AuthService();
