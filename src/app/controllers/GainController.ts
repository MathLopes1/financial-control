import { Request, Response } from 'express';
import {
  Controller, Get, Post, Put,
} from "@decorators/express";

import { IGain } from "../Interfaces/Gain/IGain";
import { IGainService } from "../Interfaces/Gain/IGainService";
import GainService from '../services/GainServices';

@Controller('/gain')
class GainController {
  private readonly gainService: IGainService;

  constructor() {
    this.gainService = new GainService();
  }

  @Post('/')
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const {
        total_ganhos,
      } = req.body;
      const result: IGain = await this.gainService.create({
        total_ganhos,
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
      const findGain = await this.gainService.find();

      return res.status(200).json(findGain);
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

      await this.gainService.updated(id, payload);

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
}

export default GainController;
