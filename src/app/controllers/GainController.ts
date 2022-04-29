import { Request, Response } from 'express';
import { Controller, Post } from "@decorators/express";

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
}

export default GainController;
