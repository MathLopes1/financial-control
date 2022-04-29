import UserRepository from '../repositories/UsersRepository';

import { IUser } from '../Interfaces/Users/IUser';
import { IUserService } from '../Interfaces/Users/IUserService';
import { IUserRepository } from '../Interfaces/Users/IUserRepository';

class UserService implements IUserService {
  private userRepository:IUserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async create({
    nome, data_nascimento, email, senha,
  }): Promise<IUser> {
    const newUser:IUser = await this.userRepository.create(nome, data_nascimento, email, senha);
    return newUser;
  }
}

export default UserService;
