import { getRepository } from 'typeorm';
import Account from '../entities/UsersModel';
import { IAccount } from '../Interfaces/Account/IAccount';
import { IAccountRepository } from '../Interfaces/Account/IAccountRepository';

class AccountRepository implements IAccountRepository {
  async create(
    nome: string,
    cpf: string,
    data_nascimento: string,
    email: string,
    senha: string,
  ): Promise<IAccount> {
    const repo = getRepository(Account);
    const newAccount: IAccount = new Account(nome, cpf, data_nascimento, email, senha);
    const result: IAccount = await repo.save(newAccount);
    return result;
  }
}

export default AccountRepository;
