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
}

export default GainService;
