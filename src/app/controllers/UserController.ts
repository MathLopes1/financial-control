import { Request, Response } from 'express';
import {
  Controller, Delete, Get, Post, Put,
} from "@decorators/express";
import { IUserService } from '../Interfaces/User/IUserService';
import UserService from '../services/UserService';
import { IUser } from '../Interfaces/User/IUser';
import { ILogin } from '../Interfaces/User/ILogin';
import ValidationBodyUser from '../validations/user/UserValidationBody';
import ValidationLogin from '../validations/user/ValidationLogin';

@Controller('/user')
class UserController {
  private readonly userService: IUserService;

  constructor() {
    this.userService = new UserService();
  }

  @Post('/', [ValidationBodyUser])
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const {
        email, senha, habilitado,
      } = req.body;
      const result: IUser = await this.userService.create({
        email, senha, habilitado,
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

  @Post('/login', [ValidationLogin])
  async login(req: Request, res: Response): Promise<Response> {
    const {
      email, senha,
    } = req.body;
    try {
      const login: ILogin = await this.userService.login({ email, senha });
      return res.status(201).json(login);
    } catch (error) {
      return res.status(error.statusCode).json({
        details: {
          name: error.name,
          description: error.message,
        },
      });
    }
  }
}

export default UserController;
