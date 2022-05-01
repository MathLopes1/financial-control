import { getRepository } from "typeorm";
import Gain from '../entities/GainModel';
import NotFound from "../Errors/errorsHttp/NotFound";

import { IGain } from "../Interfaces/Gain/IGain";
import { IGainRepository } from "../Interfaces/Gain/IGainRepository";
import { IGainService } from "../Interfaces/Gain/IGainService";
import GainRepository from "../repositories/GainRepository";

class GainService implements IGainService {
  private gainRepository: IGainRepository;

  constructor() {
    this.gainRepository = new GainRepository();
  }

  async create({ total_ganhos }): Promise<IGain> {
    const newGain:IGain = await this.gainRepository.create(total_ganhos);
    return newGain;
  }

  async find(): Promise<IGain | IGain[]> {
    const findGain = await this.gainRepository.find();
    return findGain;
  }

  async updated(id: string, payload): Promise<void> {
    const repo = getRepository(Gain);

    if (!(await repo.findOne(id))) {
      throw new NotFound(`Gain -> ${id}, does not exists!`);
    }

    await this.gainRepository.updated(id, payload);
  }

  async delete(id: string): Promise<void> {
    const repo = getRepository(Gain);

    if (!(await repo.findOne(id))) {
      throw new NotFound(`Gain -> ${id}, does not exists!`);
    }

    await this.gainRepository.delete(id);
  }
}

export default GainService;
