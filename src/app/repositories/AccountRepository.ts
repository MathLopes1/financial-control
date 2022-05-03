import { getRepository, Repository } from 'typeorm';

import Account from '../entities/AccountModel';
import { IAccount } from '../Interfaces/Account/IAccount';
import { IAccountRepository } from '../Interfaces/Account/IAccountRepository';

class AccountRepository implements IAccountRepository {
  async create(
    nome: string,
    cpf: string,
    data_nascimento: string,
    usuario_id: string,
    ganhos_id: string,
    gastos_id: string,
  ): Promise<IAccount> {
    const repo: Repository<Account> = getRepository(Account);

    const newAccount: IAccount = new Account(
      nome,
      cpf,
      data_nascimento,
      usuario_id,
      ganhos_id,
      gastos_id,
    );
    const result: IAccount = await repo.save(newAccount);
    return result;
  }

  async find(): Promise<IAccount | IAccount[]> {
    const repo: Repository<Account> = getRepository(Account);
    const findAccount = repo.find();
    return findAccount;
  }

  async updated(id: string, payload): Promise<void> {
    const repo: Repository<Account> = getRepository(Account);
    await repo.update(id, payload);
  }

  async delete(id: string): Promise<void> {
    const repo: Repository<Account> = getRepository(Account);
    await repo.delete(id);
  }

  async generateExtract(id: string) {
    const repo: Repository<Account> = getRepository(Account);
    const result: Account = await repo.findOne(id, {
      relations: ['user', 'gain', 'spend'],
      select: ['nome', 'data_nascimento', 'cpf'],
    });

    const total: number = result.gain.total_ganhos
    - (result.spend.alimentacao
      + result.spend.educacao
      + result.spend.entretenimento
      + result.spend.saude
      + result.spend.transporte);

    const extract: object = { Total: total };
    const newResult = Object.assign(result, extract);
    return newResult;
  }
}

export default AccountRepository;
