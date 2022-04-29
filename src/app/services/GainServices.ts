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
    await this.gainRepository.updated(id, payload);
  }

  async delete(id: string): Promise<void> {
    await this.gainRepository.delete(id);
  }
}

export default GainService;
