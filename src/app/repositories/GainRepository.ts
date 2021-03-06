import { getRepository, Repository } from 'typeorm';
import Gain from '../entities/GainModel';
import { IGain } from '../Interfaces/Gain/IGain';
import { IGainRepository } from '../Interfaces/Gain/IGainRepository';

class GainRepository implements IGainRepository {
  async create(total_ganhos: number): Promise<IGain> {
    const repo: Repository<Gain> = getRepository(Gain);
    const newGain: IGain = new Gain(total_ganhos);
    const result: IGain = await repo.save(newGain);
    return result;
  }

  async find(): Promise<IGain | IGain[]> {
    const repo: Repository<Gain> = getRepository(Gain);
    const findGain = repo.find();
    return findGain;
  }

  async updated(id: string, payload): Promise<void> {
    const repo: Repository<Gain> = getRepository(Gain);
    await repo.update(id, payload);
  }

  async delete(id: string): Promise<void> {
    const repo: Repository<Gain> = getRepository(Gain);
    await repo.delete(id);
  }
}

export default GainRepository;
