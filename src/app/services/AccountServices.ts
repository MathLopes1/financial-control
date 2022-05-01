import AccountRepository from '../repositories/AccountRepository';

import { IAccount } from '../Interfaces/Account/IAccount';
import { IAccountService } from '../Interfaces/Account/IAccountService';
import { IAccountRepository } from '../Interfaces/Account/IAccountRepository';
import IsConflict from '../utils/functions/IsConflict.util';

class AccountService implements IAccountService {
  private accountRepository: IAccountRepository;

  constructor() {
    this.accountRepository = new AccountRepository();
  }

  async create({
    nome, cpf, data_nascimento, email, senha,
  }): Promise<IAccount> {
    await IsConflict.isMajority(data_nascimento);
    await IsConflict.validCpf(cpf);
    await IsConflict.conflictCpf(cpf);
    await IsConflict.conflictEmail(email);

    const newAccount: IAccount = await this.accountRepository
      .create(nome, cpf, data_nascimento, email, senha);
    return newAccount;
  }
}

export default AccountService;
