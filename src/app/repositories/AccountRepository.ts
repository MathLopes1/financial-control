import { getRepository } from 'typeorm';
import bcrypt from 'bcrypt';

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
    ganhos_id: string,
    gastos_id: string,
  ): Promise<IAccount> {
    const repo = getRepository(Account);

    const senhaHash = await bcrypt.hash(senha, 10);

    const newAccount: IAccount = new Account(
      nome,
      cpf,
      data_nascimento,
      email,
      senhaHash,
      ganhos_id,
      gastos_id,
    );
    const result: IAccount = await repo.save(newAccount);
    return result;
  }

  async find(): Promise<IAccount | IAccount[]> {
    const repo = getRepository(Account);
    const findAccount = repo.find({
      relations: ['gain', 'spend'],
    });
    return findAccount;
  }

  async updated(id: string, payload): Promise<void> {
    const repo = getRepository(Account);
    await repo.update(id, payload);
  }

  async delete(id: string): Promise<void> {
    const repo = getRepository(Account);
    await repo.delete(id);
  }
}

export default AccountRepository;
