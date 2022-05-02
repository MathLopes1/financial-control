import { getRepository } from "typeorm";
import User from "../entities/UserModel";
import { IUser } from "../Interfaces/User/IUser";
import { IUserRepository } from "../Interfaces/User/IUserRepository";

class UserRepository implements IUserRepository {
  async create(email: string, senha: string, habilitado: string): Promise<IUser> {
    const repo = getRepository(User);
    const newUser: IUser = new User(email, senha, habilitado);
    const result: IUser = await repo.save(newUser);
    return result;
  }

  async login(email: string): Promise<IUser> {
    const repo = getRepository(User);
    const result: IUser = await repo.findOne({ where: { email } });
    return result;
  }
}

export default UserRepository;
