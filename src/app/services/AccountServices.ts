import AccountRepository from '../repositories/AccountRepository';

import { IAccount } from '../Interfaces/Account/IAccount';
import { IAccountService } from '../Interfaces/Account/IAccountService';
import { IAccountRepository } from '../Interfaces/Account/IAccountRepository';

class AccountService implements IAccountService {
  private accountRepository: IAccountRepository;

  constructor() {
    this.accountRepository = new AccountRepository();
  }

  async create({
    nome, cpf, data_nascimento, email, senha,
  }): Promise<IAccount> {
    const newAccount: IAccount = await this.accountRepository
      .create(nome, cpf, data_nascimento, email, senha);
    return newAccount;
  }
}

export default AccountService;
