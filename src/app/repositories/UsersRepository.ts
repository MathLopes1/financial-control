import { getRepository } from 'typeorm';
import User from '../entities/UsersModel';
import { IUser } from '../Interfaces/Users/IUser';

class UserRepository {
  async create(
    nome: string,
    data_nascimento: string,
    email: string,
    senha: string,
  ): Promise<IUser> {
    const repo = getRepository(User);
    const newUser: IUser = new User(nome, data_nascimento, email, senha);
    const result: IUser = await repo.save(newUser);
    return result;
  }
}

export default UserRepository;
