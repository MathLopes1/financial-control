import { getRepository } from 'typeorm';
import Gain from '../entities/GainModel';
import { IGain } from '../Interfaces/Gain/IGain';
import { IGainRepository } from '../Interfaces/Gain/IGainRepository';

class GainRepository implements IGainRepository {
  async create(total_ganhos: number): Promise<IGain> {
    const repo = getRepository(Gain);
    const newGain: IGain = new Gain(total_ganhos);
    const result: IGain = await repo.save(newGain);
    return result;
  }
}

export default GainRepository;
