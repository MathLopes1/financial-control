import bcrypt from 'bcrypt';
import Unauthorized from '../Errors/errorsHttp/Unauthorized';

import { IUser } from "../Interfaces/User/IUser";
import { IUserRepository } from "../Interfaces/User/IUserRepository";
import { IUserService } from "../Interfaces/User/IUserService";
import UserRepository from "../repositories/UserRepository";
import Token from '../auth/GenerateToken';
import { ILogin } from '../Interfaces/User/ILogin';
import IsConflict from '../utils/functions/IsConflict.util';

class UserService implements IUserService {
  private userRepository: IUserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async create({ email, senha, habilitado }): Promise<IUser> {
    await IsConflict.conflictEmail(email);

    const newUser:IUser = await this.userRepository.create(email, senha, habilitado);
    return newUser;
  }

  async login({ email, senha }): Promise<ILogin> {
    const user: IUser = await this.userRepository.login(email);
    if (!user) {
      throw new Unauthorized(`invalid email -> ${email}`);
    }

    const isValidPassword = await bcrypt.compare(senha, user.senha);

    if (!isValidPassword) {
      throw new Unauthorized('Invalid password, enter a valid one');
    }

    const token: String = Token({ id: user.id });
    const { habilitado } = user;
    const result: ILogin = { email, habilitado, token };
    return result;
  }
}

export default UserService;
