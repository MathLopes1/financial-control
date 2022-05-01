import { Request, Response } from 'express';
import {
  Controller, Delete, Get, Post, Put,
} from '@decorators/express';

import AccountService from '../services/AccountServices';
import { IAccountService } from '../Interfaces/Account/IAccountService';
import { IAccount } from '../Interfaces/Account/IAccount';

import ValidationBodyAccount from '../validations/account/AccountValidationBody';
import ValidationFindAccount from '../validations/account/AccountValidationFind';

@Controller('/account')
class AccountController {
  private readonly accountService: IAccountService;

  constructor() {
    this.accountService = new AccountService();
  }

  @Post('/', [ValidationBodyAccount])
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
      return res.status(error.statusCode).json({
        details: {
          name: error.name,
          description: error.message,
        },
      });
    }
  }

  @Get('/', [ValidationFindAccount])
  async find(req: Request, res: Response): Promise<Response> {
    try {
      const accountGain = await this.accountService.find();

      return res.status(200).json(accountGain);
    } catch (error) {
      return res.status(404).json({
        details: {
          name: error.name,
          description: error.message,
        },
      });
    }
  }

  @Put('/:id')
  async updated(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const payload = req.body;
      await this.accountService.updated(id, payload);

      return res.status(200).json('Updated Sucess');
    } catch (error) {
      return res.status(404).json({
        details: {
          name: error.name,
          description: error.message,
        },
      });
    }
  }

  @Delete('/:id')
  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      await this.accountService.delete(id);

      return res.status(204).end();
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
