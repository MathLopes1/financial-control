import { getRepository } from 'typeorm';
import AccountRepository from '../repositories/AccountRepository';

import { IAccount } from '../Interfaces/Account/IAccount';
import { IAccountService } from '../Interfaces/Account/IAccountService';
import { IAccountRepository } from '../Interfaces/Account/IAccountRepository';
import IsConflict from '../utils/functions/IsConflict.util';
import Account from '../entities/AccountModel';
import NotFound from '../Errors/errorsHttp/NotFound';

class AccountService implements IAccountService {
  private accountRepository: IAccountRepository;

  constructor() {
    this.accountRepository = new AccountRepository();
  }

  async create({
    nome, cpf, data_nascimento, usuario_id, ganhos_id, gastos_id,
  }): Promise<IAccount> {
    await IsConflict.isMajority(data_nascimento);
    await IsConflict.validCpf(cpf);
    await IsConflict.conflictCpf(cpf);

    const newAccount: IAccount = await this.accountRepository
      .create(nome, cpf, data_nascimento, usuario_id, ganhos_id, gastos_id);
    return newAccount;
  }

  async find(): Promise<IAccount | IAccount[]> {
    const findGain = await this.accountRepository.find();
    return findGain;
  }

  async updated(id: string, payload): Promise<void> {
    const repo = getRepository(Account);

    if (!(await repo.findOne(id))) {
      throw new NotFound(`Account -> ${id}, does not exists!`);
    }

    await this.accountRepository.updated(id, payload);
  }

  async delete(id: string): Promise<void> {
    const repo = getRepository(Account);

    if (!(await repo.findOne(id))) {
      throw new NotFound(`Account -> ${id}, does not exists!`);
    }

    await this.accountRepository.delete(id);
  }

  async generateExtract(id: string) {
    const result = await this.accountRepository.generateExtract(id);
    return result;
  }
}

export default AccountService;
