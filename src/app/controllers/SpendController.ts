import { Request, Response } from 'express';
import {
  Controller, Delete, Get, Post, Put,
} from "@decorators/express";

import { ISpendService } from '../Interfaces/Spend/ISpendService';
import SpendService from '../services/SpendServices';
import { ISpend } from '../Interfaces/Spend/ISpend';

@Controller('/spend')
class SpendController {
  private readonly spendService: ISpendService;

  constructor() {
    this.spendService = new SpendService();
  }

  @Post('/')
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const {
        entretenimento,
        alimentacao,
        educacao,
        saude,
        transporte,
      } = req.body;
      const result: ISpend = await this.spendService.create({
        entretenimento,
        alimentacao,
        educacao,
        saude,
        transporte,
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

export default SpendController;
