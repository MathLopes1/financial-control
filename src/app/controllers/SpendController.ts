import { Request, Response } from 'express';
import {
  Controller, Delete, Get, Post, Put,
} from "@decorators/express";

import { ISpendService } from '../Interfaces/Spend/ISpendService';
import SpendService from '../services/SpendServices';
import { ISpend } from '../Interfaces/Spend/ISpend';
import VadalidationId from '../validations/ValidationId';

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

  @Get('/')
  async find(req: Request, res: Response): Promise<Response> {
    try {
      const findSpend = await this.spendService.find();

      return res.status(200).json(findSpend);
    } catch (error) {
      return res.status(404).json({
        details: {
          name: error.name,
          description: error.message,
        },
      });
    }
  }

  @Put('/:id', [VadalidationId])
  async updated(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const payload = req.body;
      await this.spendService.updated(id, payload);

      return res.status(200).json('Updated Sucess');
    } catch (error) {
      return res.status(error.statusCode).json({
        details: {
          name: error.name,
          description: error.message,
        },
      });
    }
  }

  @Delete('/:id', [VadalidationId])
  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      await this.spendService.delete(id);

      return res.status(204).end();
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

export default SpendController;
