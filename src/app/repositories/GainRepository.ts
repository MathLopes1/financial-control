import { getRepository } from 'typeorm';
import Gain from '../entities/GainModel';
import NotFound from '../Errors/errorsHttp/NotFound';
import { IGain } from '../Interfaces/Gain/IGain';
import { IGainRepository } from '../Interfaces/Gain/IGainRepository';

class GainRepository implements IGainRepository {
  async create(total_ganhos: number): Promise<IGain> {
    const repo = getRepository(Gain);
    const newGain: IGain = new Gain(total_ganhos);
    const result: IGain = await repo.save(newGain);
    return result;
  }

  async find(): Promise<IGain | IGain[]> {
    const repo = getRepository(Gain);
    const findGain = repo.find();
    return findGain;
  }

  async updated(id: string, payload): Promise<void> {
    const repo = getRepository(Gain);

    if (!(await repo.findOne(id))) {
      throw new NotFound(`Gain -> ${id}, does not exists!`);
    }

    await repo.update(id, payload);
  }

  async delete(id: string): Promise<void> {
    const repo = getRepository(Gain);

    if (!(await repo.findOne(id))) {
      throw new NotFound(`Gain -> ${id}, does not exists!`);
    }

    await repo.delete(id);
  }
}

export default GainRepository;
