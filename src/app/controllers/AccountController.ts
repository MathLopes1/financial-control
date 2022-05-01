import { Request, Response } from 'express';
import { Controller, Post } from '@decorators/express';

import AccountService from '../services/AccountServices';
import { IAccountService } from '../Interfaces/Account/IAccountService';
import { IAccount } from '../Interfaces/Account/IAccount';

@Controller('/account')
class AccountController {
  private readonly accountService: IAccountService;

  constructor() {
    this.accountService = new AccountService();
  }

  @Post('/')
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const {
        nome, cpf, data_nascimento, email, senha,
      } = req.body;
      const result: IAccount = await this.accountService.create({
        nome, cpf, data_nascimento, email, senha,
      });

      return res.status(201).json(result);
    } catch (error) {
      return res.status(404).json({
        details: {
          name: error.name,
          description: error.message,
        },
      });
    }
  }
}

export default AccountController;
