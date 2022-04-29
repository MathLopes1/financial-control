import { Request, Response } from 'express';
import { Controller, Post } from '@decorators/express';

import UserService from '../services/UsersServices';
import { IUserService } from '../Interfaces/Users/IUserService';
import { IUser } from '../Interfaces/Users/IUser';

@Controller('/user')
class UserController {
  private readonly userService: IUserService;

  constructor() {
    this.userService = new UserService();
  }

  @Post('/')
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const {
        nome, data_nascimento, email, senha,
      } = req.body;
      const result: IUser = await this.userService.create({
        nome, data_nascimento, email, senha,
      });

      return res.status(201).json(result);
    } catch (error) {
      return res.status(500).json({
        details: {
          name: error.name,
          description: error.message,
        },
      });
    }
  }
}

export default UserController;
